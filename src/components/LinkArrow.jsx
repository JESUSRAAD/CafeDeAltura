import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinkArrow = ({ titleArrow, color, path }) => {
  const linkPath = path || "";

  switch (color) {
    case "black":
      return (
        <div className=" underline  ">
          <Link
            className="flex text-black items-center font-semibold text-sm leading-4 gap-4"
            href={linkPath}
          >
            {titleArrow}

            <MoveRight color="#000000" />
          </Link>
        </div>
      );
    case "white":
      return (
        <div className=" underline  ">
          <Link
            className="flex text-white items-center font-semibold text-sm leading-4 gap-4"
            href={linkPath}
          >
            {titleArrow}

            <MoveRight color="#ffffff" />
          </Link>
        </div>
      );
    default:
      return (
        <div className=" underline  ">
          <Link
            className="flex text-purple-950 items-center font-semibold text-sm leading-4 gap-4"
            href={linkPath}
          >
            {titleArrow}

            <MoveRight color="#3b0764" />
          </Link>
        </div>
      );
  }
};

export default LinkArrow;
