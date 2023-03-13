import React from "react";
import { work } from "../constants";

function Work(): JSX.Element {
  return (
    <section id="WORK" className="px-5 text-second">
      <h2 className="mb-20 text-6xl">Work Experience</h2>
      {work.map((item) => (
        <div
          key={item.title}
          className="mb-18 flex flex-wrap items-start md:flex-nowrap"
        >
          <p className="mr-24 mb-3 text-2xl">{item.date}</p>
          <ul>
            <li className="mb-9 flex items-start">
              <img
                src={item.icon}
                alt="MOOCs"
                width="80"
                className="box-shadow mr-10 block h-20 w-20 border-2 border-second object-contain"
              />
              <h3 className="box-shadow flex min-h-20 flex-col items-start justify-center border-2 border-second px-4">
                <span className="text-2xl font-semibold">{item.title}</span>
                <span>
                  {item.company}
                  <span className="mx-2">|</span>
                  <span>{item.jobType}</span>
                </span>
              </h3>
            </li>
            <li>
              <ul className="box-shadow max-w-3xl list-disc border-2 border-black bg-white pl-6 pr-5 pt-1 pb-14">
                {item.contents.map((content) => (
                  <li>{content}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Work;
