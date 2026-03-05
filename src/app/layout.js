import Header from "@/components/Header/Header";
import "./globals.css";
import About from "@/pages/About/About";
import Contact from "@/components/Contact/Contact";
import Technology from "@/components/Technology/Technology";
import CursorGlow from "@/components/CursorGlow/CursorGlow";

export const metadata = {
  title: "Nadun Dilshan - Full-Stack Developer",
  description:
    "Portfolio of Nadun Dilshan - A passionate Full-Stack Developer specializing in MERN stack, Next.js, and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CursorGlow />
        <Header />
        <main className="relative">
          <About />
          {children}
          <Technology />
          <Contact />
        </main>
      </body>
    </html>
  );
}
