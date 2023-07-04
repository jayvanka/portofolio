import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Shadow, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { Camera } from "three";




const Earth = () => {
  const house = useGLTF("./plane/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black"/>
      <pointLight intensity={0.2} />
      <spotLight
      position={[-20,50,10]}
      angle={0.2}
      penumbra={0.5}
      intensity={0.5}
      castShadow
      shadow-mapSize={1024}
      />
    <primitive 
    object={house.scene}
    scale={3.5}
    
    position-y={-2}
    rotation-y={0}
    />
    </mesh>
  )
}
const EarthCanvas = () => {
  return (
    <Canvas
    frameloop='demand'
    shadows
    Camera={{position: [200,3,5], fov: 25}}
    gl={{ preserveDrawingBuffer: true }}
    >
    
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}
export default EarthCanvas;