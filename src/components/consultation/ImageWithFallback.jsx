import React, { useState } from "react";

export default function ImageWithFallback({ src, alt, ...props }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg flex items-center justify-center p-6" {...props}>
        <p className="text-[#A0A0A0] text-center">{alt || "이미지를 불러올 수 없습니다"}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}