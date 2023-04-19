import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './loader'


const Smartphone = (props) => {
  const smartphone = useGLTF("/3dmodels/smartphone1/scene.gltf");

  return (
    <primitive
      object={smartphone.scene}
      scale={55}
      position-y={0}
      rotation-y={props.rotation}
    />
  );
};

const SmartphoneCanvas = () => {
  const [rotation, setRotation] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => {
        if (prevRotation >= Math.PI / 6) {
          setDirection(-1);
        } else if (prevRotation <= -Math.PI / 2) {
          setDirection(1);
        }
        return prevRotation + direction * 0.01;
      });
    }, 16); // update every 16ms for smoother animation

    return () => {
      clearInterval(intervalId);
    };
  }, [direction]);

  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60,
        near: 0.1,
        far: 200,
        position: [-5, 2.5, 7],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enabled={false}
        />
        <Smartphone rotation={rotation} />
      </Suspense>
    </Canvas>
  );
};

export default SmartphoneCanvas;