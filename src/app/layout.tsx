import "@/app/Stylings/main.css";
import "@/app/Stylings/colors.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Board Calculator",
  description: "Cut length optimizer for boards.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
