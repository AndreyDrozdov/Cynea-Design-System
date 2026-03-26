import "../styles/index.css";
import React from "react";

export const metadata = {
  title: "Cynea Design System",
  description: "Advanced AI-powered conservation systems.",
  icons: {
    icon: "/cyanea_logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
