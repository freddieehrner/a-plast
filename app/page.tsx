import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Branscher from "@/components/Branscher";
import Produktutveckling from "@/components/Produktutveckling";
import OmAPlast from "@/components/OmAPlast";
import Legotillverkning from "@/components/Legotillverkning";
import Siffror from "@/components/Siffror";
import Hallbarhet from "@/components/Hallbarhet";
import SenasteNytt from "@/components/SenasteNytt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Branscher />
      <Produktutveckling />
      <OmAPlast />
      <Legotillverkning />
      <Siffror />
      <Hallbarhet />
      <SenasteNytt />
      <Footer />
    </main>
  );
}
