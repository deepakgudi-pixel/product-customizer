import "./styles/main.scss";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

//gltfjsx
function Model(props) {
  const { nodes, materials } = useGLTF("/gltf/shoe.gltf");
  return (
    <group {...props} dispose={null} scale={2.8}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={'red'} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  );
}

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
