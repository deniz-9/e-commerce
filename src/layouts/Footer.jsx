import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Footer = () => {
  return (
    <>
      <div className="flex px-60 bg-custom-gray items-start h-20">
        <div className="xl:flex md:flex xl:flex-row md:flex-col xl:items-center md:items-start xl:py-7 md:py-0 xl:justify-between  xl:gap-0 md:gap-6  w-full ">
          <div>HepsiOrada</div>
          <div className="xl:flex md:flex xl:px-14 md:px-0 gap-4  ">
            <BiLogoFacebookCircle className="text-blue-400 w-6 h-6" />
            <FaInstagram className="text-blue-400 w-6 h-6" />
            <BsTwitter className="text-blue-400 w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="px-60">
        <div className="xl:flex md:flex xl:flex-row md:flex-col md:gap-14 xl:gap-14 xl:items-start md:items-start py-10">
          <div className="list-none flex flex-col gap-6 py-4">
            <div className="text-xl font-bold ">Company İnfo</div>

            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </div>
          <div className="list-none flex flex-col gap-6 py-4">
            <div className="text-xl font-bold">Legal</div>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </div>
          <div className="list-none flex flex-col gap-6 py-4">
            <div className="text-xl font-bold">Features</div>
            <li>Business Marketing</li>
            <li>User Analytics</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </div>
          <div className="list-none flex flex-col gap-6 py-4">
            <div className="text-xl font-bold">Resources</div>
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Costumers</li>
            <li>API</li>
          </div>
          <div className="flex gap-6 py-4 flex-col">
            <div className="text-xl font-bold"> Get in Touch</div>
            <div>
              <Form.Control
                type="text"
                placeholder="Your E-mail"
                className="rounded-md py-4 px-5  border border-custom-button"
              />
              <Button
                variant="primary"
                className="mt-2 text-white bg-sky-400 py-4 px-4 rounded  "
              >
                Subscribe
              </Button>
              <div>Lorem ipsum dolor </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-60 bg-custom-gray">
        <div className="flex py-6 flex-col items-start flex-shrink-0">
          <div className="flex items-start">
            Made With Love By Turkiye. All Right Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
