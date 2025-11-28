import Navbar from "../components/Navbar";
import MenuSection from "../components/MenuSection";
import Footer from "../components/Footer";

export default function Menu() {
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <MenuSection />
      </div>
      <Footer />
    </div>
  );
}