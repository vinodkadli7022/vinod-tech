import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Now from "@/components/Now";
import Experience from "@/components/Experience";
import Honors from "@/components/Honors";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-grow">
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal>
          <Work />
        </Reveal>

        <Reveal>
          <Now />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>

        <Reveal>
          <Honors />
        </Reveal>

        <Reveal>
          <Stack />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
