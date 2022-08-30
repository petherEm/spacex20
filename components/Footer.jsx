import React from "react";
import { SiTwitter, SiLinkedin, SiInstagram, SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-black pb-10">
      <div className="max-w-4xl mx-auto flex text-white h-20 justify-between p-10">
        <a href="#">
          <SiFacebook className="text-3xl" />
        </a>

        <a href="#">
          <SiTwitter className="text-3xl" />    
        </a>
        <a href="#">
          <SiLinkedin className="text-3xl" />
        </a>
        <a href="#">
          <SiInstagram className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
