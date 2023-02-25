import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center">
        <hr />
        <p className="text-center py-5">
          Crafted with ❤️ by{" "}
          <span className="font-black">
            <Link href="https://github.com/kaifcoder">@darkkaif</Link>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
