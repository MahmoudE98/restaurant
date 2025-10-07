import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import MenuCards from "./components/MenuCards";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div 
      className="relative mb-10 bg-cover bg-center bg-no-repeat h-[600px] "
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <section id="hero" className="relative z-10"><Hero /></section>
      </div>
      <div className="flex flex-col items-center gap-10">
        <h1 className="font-extrabold text-cyan-500 text-center text-4xl">Menu</h1>
        <section id="menu"><MenuCards /></section>
        <section id="gallery"><Gallery /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </div>
      <Footer/>
      
    </div>
  );
}
