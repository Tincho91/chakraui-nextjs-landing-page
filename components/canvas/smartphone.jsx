import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './loader'


const Smartphone = () => {
  const smartphone = useGLTF("/3dmodels/smartphone1/scene.gltf")

  return (
    <primitive 
      object={smartphone.scene}
      scale={35}
      position-y={0}
      rotation-y={0}
    />
  )
}

const SmartphoneCanvas = () => {

  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60, // Increase the field of view
        near: 0.1,
        far: 200,
        position: [-5, 2.5, 7], // Move the camera further away
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI /2}
        />
        <Smartphone />
      </Suspense>
    </Canvas>
  )
}

export default SmartphoneCanvas