import "./styles/main.scss";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="card">
          <div className="product-canvas">
            <Canvas>
              
            </Canvas>
          </div>
          <h2>Select your color</h2>
          <div className="colors">
            <div>
              <input type="color" id="head" name="head" value="#e66465" />
              <label for="head">Main</label>
            </div>

            <div>
              <input type="color" id="body" name="body" value="#f6b73c" />
              <label for="body">Stripes</label>
            </div>

            <div>
              <input type="color" id="body" name="body" value="#f6b73c" />
              <label for="body">Sole</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
