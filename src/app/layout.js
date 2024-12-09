import Header from "@/components/Header/Header";
import "./globals.css";
import About from "@/pages/About/About";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <About />
        {children}
      </body>
    </html>
  );
}
