import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./wom/scene.gltf");

  if (!scene) return <div>Loading 3D Model...</div>;

  return (
    <mesh>
      <ambientLight intensity={0.5} color={"#ffffff"} />
      <directionalLight position={[5, 10, 5]} intensity={2} castShadow shadow-mapSize={1024} />
      <spotLight position={[-10, 20, 10]} angle={0.3} penumbra={1} intensity={7} color={"#ff69b4"} castShadow />
      <spotLight position={[15, 20, -10]} angle={0.3} penumbra={1} intensity={2} color={"#6a5acd"} castShadow />
      <pointLight position={[0, 8, 5]} intensity={2} color={"#ffffff"} />
      <primitive
        object={scene}
        scale={isMobile ? 2.25 : 3.5}
        position={isMobile ? [0, -5, -0.75] : [0, -7.5, -1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
      className="z-10"
    >
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <Computers isMobile={isMobile} />
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
