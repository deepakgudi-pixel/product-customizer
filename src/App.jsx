import "./styles/main.scss";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function App() {
  const ref = useRef();

  return (
    <div>
      <Canvas>
        <mesh ref={ref}>
          <boxGeometry attach="geometry" args={[5, 5]} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
