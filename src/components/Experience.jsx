import {
  Lightformer,
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Car from "./Car";
import Chair from "./Chair";

const Experience = () => {
  /* const gltf = useLoader(GLTFLoader, "/Poimandres.gltf"); */
  return (
    <PresentationControls
      speed={1.5}
      global
      polar={[0.1, Math.PI / 4]}
      /* rotation={[Math.PI / 8, Math.PI / 4, 10]} */
    >
      <Stage environment={"city"} intensity={0.6} contactShasow={false}>
        {/* <Suspense fallback={null}>
          <Chair/>
        </Suspense> */}
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, -8]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, -4]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, 0]}
        scale={[10, 1, 1]}
      />
      <Car/>
    </PresentationControls>
  );
};

export default Experience;
