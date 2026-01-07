import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  let language = "ja"; // デフォルト言語
  try {
    const body = await request.json();
    const { name, email, subject, message, lang } = body;
    language = lang || "ja";

    // バリデーション
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          error:
            language === "en"
              ? "Please fill in all fields"
              : "すべての項目を入力してください",
        },
        { status: 400 }
      );
    }

    // 言語に応じたテキスト
    const texts = {
      ja: {
        adminSubject: "【お問い合わせ】",
        adminTitle: "お問い合わせがありました",
        nameLabel: "お名前",
        emailLabel: "メールアドレス",
        subjectLabel: "お問い合わせ内容",
        messageLabel: "メッセージ",
        autoReplySubject: "【自動返信】お問い合わせありがとうございます",
        autoReplyTitle: "お問い合わせありがとうございます",
        greeting: "様",
        thankYou:
          "この度は、お問い合わせいただき誠にありがとうございます。\n以下の内容でお問い合わせを受け付けいたしました。",
        subjectLabel2: "【お問い合わせ内容】",
        messageLabel2: "【メッセージ】",
        responseTime:
          "通常1〜2営業日以内にご返信いたします。\n今しばらくお待ちください。",
        closing: "今後ともよろしくお願いいたします。",
        companyName: "Evimería",
      },
      en: {
        adminSubject: "[Inquiry]",
        adminTitle: "New Inquiry Received",
        nameLabel: "Name",
        emailLabel: "Email",
        subjectLabel: "Subject",
        messageLabel: "Message",
        autoReplySubject: "[Auto Reply] Thank you for your inquiry",
        autoReplyTitle: "Thank you for your inquiry",
        greeting: "",
        thankYou:
          "Thank you for contacting us.\nWe have received your inquiry with the following details:",
        subjectLabel2: "[Subject]",
        messageLabel2: "[Message]",
        responseTime:
          "We typically respond within 1-2 business days.\nPlease wait for our reply.",
        closing: "We look forward to working with you.",
        companyName: "Evimería",
      },
    };

    const t = texts[language as "ja" | "en"] || texts.ja;

    // Nodemailerの設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 管理者への通知メール
    const adminMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `${t.adminSubject}${subject}`,
      text: `
${t.nameLabel}: ${name}
${t.emailLabel}: ${email}
${t.subjectLabel}: ${subject}

${t.messageLabel}:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0ABAB5; margin-bottom: 20px;">${t.adminTitle}</h2>
          <div style="margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong>${t.nameLabel}:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>${t.emailLabel}:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>${t.subjectLabel}:</strong> ${subject}</p>
          </div>
          <div style="margin-top: 20px;">
            <p style="margin-bottom: 8px;"><strong>${t.messageLabel}:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #333;">${message}</p>
          </div>
        </div>
      `,
    };

    // 送信者への自動返信メール
    const autoReplyMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: t.autoReplySubject,
      text: `
${name}${t.greeting ? ` ${t.greeting}` : ""}

${t.thankYou}

${t.subjectLabel2}
${subject}

${t.messageLabel2}
${message}

${t.responseTime}

${t.closing}

---
${t.companyName}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0ABAB5; margin-bottom: 20px;">${
            t.autoReplyTitle
          }</h2>
          <p style="line-height: 1.6; margin-bottom: 20px;">
            ${name}${t.greeting ? ` ${t.greeting}` : ""}
          </p>
          <p style="line-height: 1.6; margin-bottom: 20px;">
            ${t.thankYou.replace(/\n/g, "<br>")}
          </p>
          <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-left: 3px solid #0ABAB5;">
            <p style="margin: 8px 0;"><strong>${
              t.subjectLabel2
            }</strong> ${subject}</p>
            <p style="margin: 8px 0;"><strong>${t.messageLabel2}</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6; margin-top: 8px;">${message}</p>
          </div>
          <p style="line-height: 1.6; margin-top: 20px;">
            ${t.responseTime.replace(/\n/g, "<br>")}
          </p>
          <p style="line-height: 1.6; margin-top: 20px;">
            ${t.closing}
          </p>
          <div style="border-top: 1px solid #e0e0e0; margin-top: 30px; padding-top: 15px;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              ${t.companyName}
            </p>
          </div>
        </div>
      `,
    };

    // 両方のメールを送信
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(autoReplyMailOptions),
    ]);

    return NextResponse.json(
      {
        message:
          language === "en"
            ? "Inquiry received"
            : "お問い合わせを受け付けました",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error:
          language === "en"
            ? "Failed to send email"
            : "メール送信に失敗しました",
      },
      { status: 500 }
    );
  }
}
