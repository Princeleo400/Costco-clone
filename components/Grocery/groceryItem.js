import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaClipboardList, FaThList } from "react-icons/fa";

const GroceryItem = ({ title, price, description }) => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
        <div className="p-2">
          <Image
            src="/assets/imageService.webp"
            alt=""
            width={270}
            height={70}
          />
          <div className="text-center py-2">
            <div className="flex">
              <h2> {title} </h2>
              <FaThList size={18}/>
            </div>

            <h5>{price} </h5>
            <Link className=" hover:underline" href="#">
              <p> {description} </p>
            </Link>
          </div>

          <div className="">
            <div className="flex border border-gray-500">
              <button
                onClick={() => setCount(count + 1)}
                disabled={count === 1}
                className="bg-gray-500 p-2"
              >
                -
              </button>
              <input type="number" className="" />
              <button className="bg-gray-500 p-2"> + </button>
            </div>
            <button className="bg-blue-650 text-white w-full p-2 my-2 ">
              {" "}
              Addq
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroceryItem;
