import React from "react";

export default function LoginLayout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "url(/bg/bg.jpeg) center/cover",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
