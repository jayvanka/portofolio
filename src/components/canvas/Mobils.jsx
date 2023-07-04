import {Suspense,useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'



const Mobils = ({ isMobile }) => {
  const mobil = useGLTF('./car/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black"/>
      <pointLight intensity={0.5} />
      <spotLight
      position={[0,0,0]}
      angle={0.2}
      penumbra={0.5}
      intensity={0.5}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive
      object={mobil.scene}
      scale={ isMobile ? 0.2 : 0.4}
      position={ isMobile ? [0, -3, -1] : [0, -95, 0]}
      rotation={[-0.01, 1.6, 0]}
      />
    </mesh>
  )
}
const MobilsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (Event) => {
      setIsMobile(Event.matches);
    }
    mediaQuery.addEventListener("change",handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change",handleMediaQueryChange);
    };
  }, [])
  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{position: [250,3,5], fov: 80}}
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Mobils isMobile={isMobile}  />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default MobilsCanvas