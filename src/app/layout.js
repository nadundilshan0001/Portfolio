import Header from "@/components/Header/Header";
import "./globals.css";
import About from "@/pages/About/About";
import Contact from "@/components/Contact/Contact";
import Technology from "@/components/Technology/Technology";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <About />
        {children}
        <Technology />
        <Contact />
      </body>
    </html>
  );
}
