import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function ProductCard() {
  const [mesh, setMesh] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [sole, setSole] = useState("#ffffff");
  const [laces, setLaces] = useState("#ffffff");

  return (
    <>
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
                <Model
                  customColors={{
                    mesh: mesh,
                    stripes: stripes,
                    sole: sole,
                    laces: laces,
                  }}
                />
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
              <input
                type="color"
                id="mesh"
                name="mesh"
                defaultValue={mesh}
                onChange={(e) => setMesh(e.target.value)}
              />
              <label htmlFor="mesh">Main</label>
            </div>

            <div>
              <input
                type="color"
                id="stripes"
                name="stripes"
                defaultValue={stripes}
                onChange={(e) => setStripes(e.target.value)}
              />
              <label htmlFor="stripes">Stripes</label>
            </div>

            <div>
              <input
                type="color"
                id="sole"
                name="sole"
                defaultValue={sole}
                onChange={(e) => setSole(e.target.value)}
              />
              <label htmlFor="body">Sole</label>
            </div>

            <div>
              <input
                type="color"
                id="laces"
                name="laces"
                defaultValue={laces}
                onChange={(e) => setLaces(e.target.value)}
              />
              <label htmlFor="laces">Laces</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
