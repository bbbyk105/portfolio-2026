import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  let language = "ja"; // デフォルト言語
  try {
    const body = await request.json();
    const {
      name,
      email,
      subject,
      message,
      language: bodyLanguage,
      lang,
    } = body;
    language = bodyLanguage || lang || "ja";

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
        companyName: "Evimeria",
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
        companyName: "Evimeria",
      },
    };

    const t = texts[language as "ja" | "en"] || texts.ja;
    const tAdmin = texts.ja; // 管理者へのメールは常に日本語

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

    // 管理者への通知メール（常に日本語）
    const adminMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `${tAdmin.adminSubject}${subject}`,
      text: `
${tAdmin.nameLabel}: ${name}
${tAdmin.emailLabel}: ${email}
${tAdmin.subjectLabel}: ${subject}

${tAdmin.messageLabel}:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0ABAB5; margin-bottom: 20px;">${tAdmin.adminTitle}</h2>
          <div style="margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong>${tAdmin.nameLabel}:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>${tAdmin.emailLabel}:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>${tAdmin.subjectLabel}:</strong> ${subject}</p>
          </div>
          <div style="margin-top: 20px;">
            <p style="margin-bottom: 8px;"><strong>${tAdmin.messageLabel}:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #333;">${message}</p>
          </div>
        </div>
      `,
    };

    // 送信者への自動返信メール（シンプルなUI）
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
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <p>${name}${t.greeting ? ` ${t.greeting}` : ""}</p>
          <p>${t.thankYou.replace(/\n/g, "<br>")}</p>
          <p><strong>${t.subjectLabel2}</strong> ${subject}</p>
          <p><strong>${t.messageLabel2}</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <p>${t.responseTime.replace(/\n/g, "<br>")}</p>
          <p>${t.closing}</p>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">${
            t.companyName
          }</p>
        </div>
      `,
    };

    // 管理者へのメールを先に送信
    await transporter.sendMail(adminMailOptions);

    // 管理者への送信が成功した場合のみ自動返信を送信
    await transporter.sendMail(autoReplyMailOptions);

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
