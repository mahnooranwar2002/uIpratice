// app/layout.tsx
"use client"; // Isse hum state use kar payenge
import { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "./components/navbar";
import Loading from "./Loading";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3 second baad loader band kar do
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
 <link
  href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
  rel="stylesheet"
/>
          <>
       <Navbar/>         
           <main>
    
              {children}</main>
            <Footer/>
          </>
     

      </body>
    </html>
  );
}