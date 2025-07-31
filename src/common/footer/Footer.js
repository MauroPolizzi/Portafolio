"use client"
import React from "react";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
 
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container text-center">
          <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
            <div className="lg:col-span-3 md:text-start text-center">
              <Link href="#" className="text-[18px] focus:outline-none">
                <span>{t("tanks_footer")}</span>
              </Link>
            </div>
            <div className="lg:col-span-6 text-center mt-6 md:mt-0">
              <p className="mb-0">
                © {new Date().getFullYear()} Mauro Polizzi
              </p>
            </div>
            <ul className="lg:col-span-3 list-none md:text-end text-center mt-6 md:mt-0">
              <li className="inline">
                {" "}
                <Link
                  href="https://www.linkedin.com/in/mauropolizzideveloperfullstack/"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"
                >
                  <Unicons.UilLinkedin width={30} />
                  <i className="uil uil-linkedin" title="Linkedin"></i>
                </Link>
              </li>
              <li className="inline">
                {" "}
                <Link
                  href="mailto:mauropolizzi2@gmail.com"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"
                >
                  <Unicons.UilEnvelope width={30} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;