import React from "react";
import { Link as Link1 } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import profileImg from "@/assets/images/profileimg.JPG";
import { profile } from "@/Data/profile";
import { asset } from "@/common/asset";
import { useContent } from "@/common/content";

export const Hero = () => {
  const { t } = useTranslation();
  const { lang } = useContent();

  return (
    <>
      <section
        className="relative pt-28 personal-wrapper overflow-hidden"
        id="home"
      >
        <div className="absolute inset-0" id="overlay"></div>
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div>
              <h4 className="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal mb-4">
                {t("hi")} <br />
                <TypeAnimation
                  // Las frases salen de src/Data/profile.js. El 1000 es la pausa
                  // en milisegundos entre una y la siguiente.
                  sequence={profile.roles.flatMap((role) => [role, 1000])}
                  wrapper="span"
                  speed={50}
                  className="typewrite text-dark-purple"
                  repeat={Infinity}
                />
              </h4>
              <p className="text-slate-400 max-w-xl">{t("hero_subtitle")}</p>
              <div className="flex mt-6" style={{gap:"1rem"}} >
                {/* <Link1
                  href=""
                  className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md"
                >
                  {t("hire_me")}
                </Link1> */}
                <a
                  href={asset(profile.cv[lang])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-amber-400/10 hover:bg-dark-purple border-dark-purple hover:border-dark-purple text-dark-purple hover:text-white rounded-md ms-1"
                >
                  {t("download_cv")}
                </a>
              </div>
            </div>
            <div className="relative">
              {/* <Image
                height={0}
                width={0}
                sizes="100vw"
                style={{
                  height: "auto",
                  width: "100%",
                  borderRadius: "50%",
                }}
                src={profileImg}
                alt={profile.name}
              /> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="rounded-full"
                src={profileImg.src}
                alt={profile.name}
              />
              {/* <div className="absolute lg:bottom-20 md:bottom-10 bottom-2 ltr:md:-left-5 ltr:left-2 rtl:md:-right-5 rtl:right-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                <span className="text-3xl font-medium mb-0">
                  <span className="counter-value font-bold" data-target="125">
                    {" "}
                    <CountUp
                      start={0}
                      className="counter-value"
                      end={15}
                      duration={2.75}
                    />
                  </span>
                  +
                </span>
                <h6 className="text-sm text-slate-400 mt-1">
                  {t("projects_completed")}
                </h6>
              </div> */}
              {/* <div className="absolute lg:top-80 md:top-56 top-48 ltr:md:-right-0 ltr:right-2 rtl:md:-left-0 rtl:left-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                <h6 className="font-semibold">Full Stack</h6>
                <h6 className="text-sm text-slate-400 mt-1">
                  {t("years_experience")}
                </h6>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="absolute block w-full h-auto bottom-[25px] z-1 left-0">
          <Link href="#about">
            <i className="mdi mdi-arrow-down absolute top-0 left-0 right-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i>
          </Link>
        </div>
      </div>
    </>
  );
};
