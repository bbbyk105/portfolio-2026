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
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{
        zIndex: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {!isLoaded && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 1 }}
        >
          <div className="text-white/30 text-xs">Loading 3D...</div>
        </div>
      )}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: isLoaded ? 0.6 : 0,
          transition: isLoaded ? "opacity 1s ease-in-out" : "none",
          zIndex: -10,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
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
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </div>
    </div>
  );
}
