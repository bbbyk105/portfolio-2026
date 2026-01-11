"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function SplineBackground() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  if (hasError) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{
        zIndex: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {!isLoaded && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <div className="text-white/30 text-xs">Loading 3D...</div>
        </div>
      )}
      <div
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={{
          opacity: isLoaded ? 0.6 : 0,
          transition: isLoaded && !hasError ? "opacity 0.3s ease-in" : "none",
          zIndex: 0,
          width: "100%",
          height: "100%",
          willChange: "opacity",
          transform: "translate3d(0, 0, 0)",
          touchAction: "pan-y",
        }}
      >
        <Spline
          scene="https://prod.spline.design/ZPAGXaENIh4fEJPe/scene.splinecode"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            touchAction: "pan-y",
          }}
        />
      </div>
    </div>
  );
}
