import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export const Experience = () => {
  const { t } = useTranslation();

  const now = new Date();
  const dateStartEducaria = new Date("09-01-2021");
  const dateEndEducaria = new Date("03-30-2025");
  const dateStartFreelance = new Date("01-05-2019");
  const dateEndtFreelance = new Date("12-12-2019");

  const calculateMonths = (startDate, endDate) => {
    // Convert the difference from milliseconds to months
    let monthDifference =
      (endDate.getFullYear() - startDate.getFullYear()) * 12;
    monthDifference -= startDate.getMonth();
    monthDifference += endDate.getMonth();

    // Adjust if the difference is negative
    if (endDate.getDate() < startDate.getDate()) {
      monthDifference--;
    }

    // Handle the case when monthDifference is less than 12
    if (monthDifference < 12) {
      return monthDifference + " months";
    } else {
      const years = Math.floor(monthDifference / 12);
      const remainingMonths = monthDifference % 12;
      if (remainingMonths === 0) {
        return years + " year" + (years > 1 ? "s" : "");
      } else {
        return (
          years +
          " year" +
          (years > 1 ? "s" : "") +
          " and " +
          remainingMonths +
          " month" +
          (remainingMonths > 1 ? "s" : "")
        );
      }
    }
  };

  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="experience"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            {t("Experiences.title")}
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            {t("Experiences.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 mt-8">
          <div className="relative after:content-[''] after:absolute after:top-0 ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0">
            <div className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-dark-purple md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  <Link href={"https://www.linkedin.com/company/educaria-euro/"}>
                    <Image
                      src="/images/logos/educaria_argentina_logo.jpeg"
                      className="rounded-full h-9 w-9 md:ms-auto"
                      alt=""
                      height={0}
                      width={0}
                      sizes="100vw"
                      style={{ with: "100%", height: "auto" }}
                    />
                    <h5 className="my-2 font-semibold text-lg">Educaria</h5>
                    <h6 className="text-sm mb-0">
                      2021-2025({calculateMonths(dateStartEducaria, dateEndEducaria)})
                    </h6>
                  </Link>
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">
                    Full Stack Developer
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    {t("Experiences.educaria0")}
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    {t("Experiences.educaria1")}
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    {t("Experiences.educaria2")}
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    {t("Experiences.educaria3")}
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    {t("Experiences.educaria4")}
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    {t("Experiences.educaria5")}
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    {t("Experiences.educaria6")}
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    {t("Experiences.educaria7")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-dark-purple md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="text-start md:ms-8 relative md:order-2">
                  <Image
                    src="/images/logos/liberoprofessionista_logo.jpeg"
                    className="rounded-full h-9 w-9 md:me-auto"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ with: "100%", height: "auto" }}
                  />
                  <h5 className="my-2 font-semibold text-lg">Freelance</h5>
                  <h6 className="text-sm mb-0">2019-2019({calculateMonths(dateStartFreelance, dateEndtFreelance)})</h6>
                </div>

                <div className="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                  <h5 className="title mb-1 font-semibold">
                    Full Stack developer
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    {t("Experiences.freelance0")}
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    {t("Experiences.freelance1")}
                  </p>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    {t("Experiences.freelance2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
