import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Jaydeo Sawale — Android · Flutter · AI Engineer",description:"Jaydeo Sawale — Android, Flutter and AI engineering portfolio."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}