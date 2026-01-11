"use client";

type LoadingProps = {
  fullScreen?: boolean;
  size?: "sm" | "md" | "lg";
  text?: string;
  variant?: "spinner" | "dots" | "pulse";
};

export default function Loading({
  fullScreen = false,
  size = "md",
  text,
  variant = "spinner",
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-12 h-12 border-3",
    lg: "w-16 h-16 border-4",
  };

  const spinnerSize = sizeClasses[size];

  const renderSpinner = () => {
    if (variant === "dots") {
      return (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#0ABAB5] rounded-full animate-pulse" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 bg-[#0ABAB5] rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 bg-[#0ABAB5] rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>
      );
    }

    if (variant === "pulse") {
      return (
        <div
          className={`${spinnerSize} bg-[#0ABAB5]/20 rounded-full animate-pulse`}
        />
      );
    }

    // Default: spinner
    return (
      <div
        className={`${spinnerSize} border-[#2e2e2e] border-t-[#0ABAB5] rounded-full animate-spin`}
        style={{
          animation: "spin 1s linear infinite",
        }}
      />
    );
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* スピナー */}
      {renderSpinner()}
      {/* テキスト */}
      {text && (
        <p className="text-sm sm:text-base text-[#898989] font-medium animate-fadeIn">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]">
        {content}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12 sm:py-16 md:py-20">
      {content}
    </div>
  );
}
