import { Canvas } from "@react-three/fiber";
import React from "react";
import { icon_grid } from "../assets/icons";
import { hero } from "../constants";
import Blob from "./Blob";

function Hero(): JSX.Element {
  return (
    <section id="ABOUT" className="relative mx-auto h-200">
      <div className="absolute top-28 left-3 z-10 text-second">
        <h1 className="mb-2 text-6xl">{hero.name}</h1>
        <h2 className="ml-1 mb-2 text-4xl">{hero.job}</h2>
        <p className="max-w-lg text-xl">{hero.description}</p>
      </div>
      <img
        src={icon_grid}
        alt=""
        className=" absolute right-3 bottom-24 z-10"
      />
      <Canvas camera={{ position: [0, 0, 5] }} className="absolute">
        <Blob />
      </Canvas>
    </section>
  );
}

export default Hero;
