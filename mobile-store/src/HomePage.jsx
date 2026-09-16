import React from "react";
import MainBanner from "./component/MainBanner";
import ProductGrid from "./component/ProductGrid";
import ProductFeature from "./component/ProductFeature";

export default function HomePage() {
  return (
    <>
      <MainBanner />
      <ProductGrid />
      <ProductFeature />
    </>
  );
}
