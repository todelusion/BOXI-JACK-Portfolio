import { shaderMaterial } from "@react-three/drei";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import React, { useRef, useMemo, Ref } from "react";
import { MathUtils } from "three";
import { Mesh, ShaderMaterial } from "three/src/Three";
import fragmentShader from "./fragmentShader";
import vertexShader from "./vertexShader";

function Blob(): JSX.Element {
  const mesh = useRef<Mesh>(null);
  const hover = useRef(false);
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_intensity: { value: 0.15 },
    }),
    []
  );
  useFrame((state) => {
    const { clock } = state;
    if (mesh.current === null) return;
    const material = mesh.current.material as ShaderMaterial;
    material.uniforms.u_time.value = 0.2 * clock.getElapsedTime();
    material.uniforms.u_intensity.value = MathUtils.lerp(
      material.uniforms.u_intensity.value,
      hover.current ? 0.4 : 0.15,
      0.1
    );
  });

  return (
    <mesh
      ref={mesh}
      scale={2}
      position={[1, 0, 0]}
      onPointerOver={() => {
        hover.current = true;
      }}
      onPointerOut={() => {
        hover.current = false;
      }}
    >
      <icosahedronGeometry args={[1, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default Blob;
