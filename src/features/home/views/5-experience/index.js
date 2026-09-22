import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { experience } from "@/Data/experience";
import { useContent } from "@/common/content";

// Las fechas se leen en UTC para que la zona horaria no corra el mes.
const monthsBetween = (start, end) => {
  let months = (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
  months -= start.getUTCMonth();
  months += end.getUTCMonth();
  if (end.getUTCDate() < start.getUTCDate()) months--;
  return months;
};

const formatDuration = (months, t) => {
  if (months < 12) {
    return `${months} ${t(months === 1 ? "duration.month" : "duration.months")}`;
  }

  const years = Math.floor(months / 12);
  const restMonths = months % 12;
  const yearsLabel = `${years} ${t(years === 1 ? "duration.year" : "duration.years")}`;

  if (restMonths === 0) return yearsLabel;

  const monthsLabel = `${restMonths} ${t(
    restMonths === 1 ? "duration.month" : "duration.months"
  )}`;
  return `${yearsLabel} ${t("duration.and")} ${monthsLabel}`;
};

// Clases de cada hito de la línea de tiempo (el punto y el círculo punteado).
const timelineItemClasses =
  "ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-dark-purple md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900";

export const Experience = () => {
  const { t } = useTranslation();
  const { tx } = useContent();

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
            {experience.map((item, index) => {
              // Los hitos se van alternando de lado en pantallas medianas y grandes.
              const isLeft = index % 2 === 0;

              const start = new Date(item.start);
              const end = item.end ? new Date(item.end) : new Date();
              const years = `${start.getUTCFullYear()}-${
                item.end ? end.getUTCFullYear() : t("duration.present")
              }`;
              const duration = formatDuration(monthsBetween(start, end), t);

              const heading = (
                <>
                  <Image
                    src={item.logo}
                    alt={item.company}
                    width={36}
                    height={36}
                    className={`rounded-full h-9 w-9 ${
                      isLeft ? "md:ms-auto" : "md:me-auto"
                    }`}
                  />
                  <h5 className="my-2 font-semibold text-lg">{item.company}</h5>
                  <h6 className="text-sm mb-0">
                    {years}({duration})
                  </h6>
                </>
              );

              return (
                <div
                  key={`${item.company}-${item.start}`}
                  className={index === 0 ? timelineItemClasses : `mt-12 ${timelineItemClasses}`}
                >
                  <div className="grid md:grid-cols-2">
                    <div
                      className={
                        isLeft
                          ? "md:text-end md:me-8 relative"
                          : "text-start md:ms-8 relative md:order-2"
                      }
                    >
                      {item.url ? <Link href={item.url}>{heading}</Link> : heading}
                    </div>

                    <div
                      className={
                        isLeft
                          ? "ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0"
                          : "ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1"
                      }
                    >
                      <h5 className="title mb-1 font-semibold">{tx(item.role)}</h5>
                      <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                        {tx(item.summary)}
                      </p>
                      {item.highlights?.map((highlight, highlightIndex) => (
                        <p
                          key={highlightIndex}
                          className="mt-3 mb-0 text-slate-400 text-[15px]"
                        >
                          • {tx(highlight)}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
