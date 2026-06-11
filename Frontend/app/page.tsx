import Hero from "./components/Hero";
import Features from "./components/Features";
import Marketing from "./components/Marketing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Marketing />
      <Footer />
    </main>
  );
}
