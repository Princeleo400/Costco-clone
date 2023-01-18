import Link from "next/link";
import React, { useState, useEffect } from "react";
import Membership from "./footer/Membership";
import ProductHeader from "./Grocery/productHeader";
import ProductItem from "./Grocery/productItems";
import ProductSidebar from "./Grocery/productSidebar";

const Grocery = () => {
  const [checkTwo, setCheckTwo] = useState(false);

  return (
    <div className="flex md:flex-row flex-col">
      <div className="w-3/12 p-3 hidden sm:block">
      <ProductSidebar />
      </div>

      <div className="sm:w-9/12 w-full">
        <ProductHeader />
        <div className=" grid w-full p-2 md:grid-cols-4 m:grid-cols-4 grid-cols-2 gap-4 border-y border-gray-200">
          <ProductItem
            img="/assets/imageService (6).webp"
            title="Cold & Frozen"
            price="$19.99"
            description="Kirkland Signature Italian Sausage and Beef Lasagna, 3 lbs, 2-count"
          />
          <ProductItem
            img="/assets/imageService (8).webp"
            title="Cold & Frozen"
            price="$19.99"
            description="Kirkland Signature Italian Sausage and Beef Lasagna, 3 lbs, 2-count"
          />
          <ProductItem
            img="/assets/imageService (9).webp"
            title="Cold & Frozen"
            price="$19.99"
            description="Kirkland Signature Italian Sausage and Beef Lasagna, 3 lbs, 2-count"
          />
          <ProductItem
            img="/assets/imageService (10).webp"
            title="Cold & Frozen"
            price="$19.99"
            description="Kirkland Signature Italian Sausage and Beef Lasagna, 3 lbs, 2-count"
          />
          <ProductItem
            img="/assets/imageService (11).webp"
            title="Cold & Frozen"
            price="$19.99"
            description="Kirkland Signature Italian Sausage and Beef Lasagna, 3 lbs, 2-count"
          />
          <ProductItem
            img="/assets/imageService (12).webp"
            title="Cold & Frozen"
            price="$19.99"
            description="Kirkland Signature Italian Sausage and Beef Lasagna, 3 lbs, 2-count"
          />
          <ProductItem
            img="/assets/imageService (13).webp"
            title="Cold & Frozen"
            price="$19.99"
            description="Kirkland Signature Italian Sausage and Beef Lasagna, 3 lbs, 2-count"
          />
        </div>
      </div>
    </div>
  );
};

export default Grocery;
