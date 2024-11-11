import React from "react";

export default function LoginLayout({ children }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <video
        src="/bg/bg.mp4"
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      />
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "relative",
          zIndex: "1",
        }}
      >
        {children}
      </div>
    </div>
  );
}
