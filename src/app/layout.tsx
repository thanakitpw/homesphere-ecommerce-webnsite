import type { Metadata } from "next";
import { Prompt, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Homesphere — ศูนย์รวมของบ้านครบครัน",
  description:
    "Homesphere e-commerce demo — เครื่องใช้ไฟฟ้า เฟอร์นิเจอร์ ห้องน้ำ เครื่องมือช่าง สไตล์โมเดิร์น พร้อมบริการติดตั้งและส่งถึงบ้าน",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${prompt.variable} ${ibmPlex.variable} h-full antialiased`}
    >
      <head>
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
