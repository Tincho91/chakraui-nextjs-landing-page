import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "./loader";

const ResizeHandler = ({ containerRef }) => {
  const { setSize, camera } = useThree();

  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;

        setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      updateDimensions();
      window.addEventListener("resize", updateDimensions);

      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
  }, [containerRef, setSize, camera]);

  return null;
};

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

const SmartphoneCanvas = ({ containerRef, colorMode }) => {
  const [rotation, setRotation] = useState(0);
  const [direction, setDirection] = useState(1);
  const [dimensions, setDimensions] = useState({ width: 1, height: 1 });

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
    }, 16);

    return () => {
      clearInterval(intervalId);
    };
  }, [direction]);

  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      };

      updateDimensions();
      window.addEventListener("resize", updateDimensions);

      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
  }, [containerRef]);

  return (
    <Canvas
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      camera={{
        fov: 60,
        near: 0.1,
        far: 200,
        position: [-5, 2.5, 7],
      }}
    >
      <ResizeHandler containerRef={containerRef} />
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enabled={false}
        />
        <ambientLight intensity={0.5} />
        <Smartphone rotation={rotation} />
      </Suspense>
    </Canvas>
  );
};

export default SmartphoneCanvas;
