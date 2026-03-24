import "../styles/index.css";
import React from "react";

export const metadata = {
  title: "Cynea Design System",
  description: "Advanced AI-powered conservation systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
