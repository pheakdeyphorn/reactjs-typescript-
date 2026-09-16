import "./styles.css";
import Header from "./Header";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";
import MainBanner from "./MainBanner";
import ProductGrid from "./ProductGrid";
import ProductFeature from "./ProductFeature";
import Footer from "./Footer";
import Copyright from "./Copyright";

const MobileStoreLayout = () => {
  return (
    <div className="container">
      {/* 1. TOP HEADER NAVIGATION */}
      <Header />

      {/* 2. MAIN HEADER & SEARCH */}
      <MainHeader />

      {/* 3. NAVIGATION BAR */}
      <Navbar />

      {/* 4. MAIN BANNER SECTION */}
      <MainBanner />

      {/* 5. TOP PRODUCTS GRID (3 Items) */}
      <ProductGrid />

      {/* 6. FEATURED PRODUCTS SECTION */}
      <ProductFeature />

      {/* 7. FOOTER */}
      <Footer />

      {/* COPYRIGHT */}
      <Copyright year={"2026"} owner={"Pheakdey"} />
    </div>
  );
};

export default MobileStoreLayout;
