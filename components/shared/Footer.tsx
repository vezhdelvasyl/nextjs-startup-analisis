import React from "react";
import { Label } from "../ui/label";

const Footer = () => {
  return (
    <footer className="flex flex-row border-t p-8 justify-between">
      <Label className=" text-neutral-500">All rights reserved</Label>
      <Label className=" text-neutral-500">Created by Vezhdel Vasyl</Label>
    </footer>
  );
};

export default Footer;
