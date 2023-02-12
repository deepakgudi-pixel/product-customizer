import { useGLTF } from "@react-three/drei";

//gltfjsx
export default function Model(props) {
    const { nodes, materials } = useGLTF("/gltf/shoe.gltf");
    return (
      <group {...props} dispose={null} scale={2.8}>
        <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={'red'} />
        <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
        <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
        <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
        <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
        <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={'teal'}/>
        <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
        <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
      </group>
    );
  }
  