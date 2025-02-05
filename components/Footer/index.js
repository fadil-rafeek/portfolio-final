import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
        <Socials />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        {" "}
        <Link href="http://www.nil.com">
          <a className="underline underline-offset-1">Fadil Rafeek</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
