import Link from "next/link";
import React from "react";
import { FaBox, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";

const DeliveryNav = () => {
  return (
    <div className="flex justify-between w-full  bg-gray-50 p-4 flex-wrap">
      <div className="flex">
        <div className="content-1">
          <p> My Warehouse </p>
          <p className="flex items-center">
            <FaMapMarkerAlt /> Seattle
          </p>
          <small className="text-red-500">
            {" "}
            Closed: Open 10:00 AM Wednesday
          </small>
        </div>
        <div className="content-1 mx-2">
          <p> Delivery Location </p>
          <p className="flex items-center">
            <FaBox className="mr-2" /> 98101
          </p>
        </div>
      </div>

      <div className="box text-sm ml-auto">
        <Link className="hidden top-tel ml-auto text-blue-450 text-lg" href={"#"}>
          {" "}
          Current Order/Delivery Fee?{" "}
        </Link>
        <div className="box-item ml-auto">
          <p className="text-end">
            {" "}
            <Link className="hover:underline text-blue-450" href={"#"}>
              2-Day Delivery{" "}
            </Link>{" "}
            Current Order: $0.00 {"|"}{" "}
            <span>Add $75.00 More to Avoid Delivery Fee </span>
          </p>
          <p className="text-end">
            {" "}
            <Link className="hover:underline text-blue-450" href={"#"}>
              Cold & Frozen{" "}
            </Link>{" "}
            Current Order: $0.00 {"|"}{" "}
            <span>Add $100.00 More to Avoid Delivery Fee </span>
          </p>
        </div>

        <Link
          className="hover:underline text-blue-450 text-end block"
          href={""}
        >
          {" "}
          Lists / Reorder
        </Link>
      </div>
    </div>
  );
};

export default DeliveryNav;
