import localFont from "next/font/local";
import "./globals.css";
import '@fontsource/inter';


const geistSans = localFont({
  src: "./fonts/Poppins/Poppins-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Poppins/Poppins-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Unicord",
  description: "Unicord-Connect with universe",
};

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
         <ToastContainer />
        {children}
      </body>
    </html>
  );
}
