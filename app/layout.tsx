import { Public_Sans } from "next/font/google";
import "./globals.css";

const public_sans = Public_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "PayApi: Demo App",
  description:
    "Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={public_sans.className}>
        <div className="w-[39px] md:[165px] h-full">{children}</div>
      </body>
    </html>
  );
}
