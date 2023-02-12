import "./styles/main.scss";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Model from "./components/Model";


function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="card">
          <div className="product-canvas">
            <Canvas>
              <Suspense fallback={null}>
              <ambientLight />
                  <spotLight 
                   position={[10, 15, 10]}
                   angle={0.1}
                   penumbra={0.1}
                   intensity={0.9}
                   castShadow
                  />
                  <Model />
                  <OrbitControls 
                  enablePan={false}
                  enableZoom={false}
                  enableRotate={true}
                  />
              </Suspense>
            </Canvas>
          </div>
          <h2>Select your color</h2>
          <div className="colors">
            <div>
              <input type="color" id="head" name="head" defaultValue="#e66465" />
              <label  htmlFor="head">Main</label>
            </div>

            <div>
              <input type="color" id="body" name="body" defaultValue="#f6b73c" />
              <label  htmlFor="body">Stripes</label>
            </div>

            <div>
              <input type="color" id="body" name="body" defaultValue="#f6b73c" />
              <label  htmlFor="body">Sole</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
