
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

const CarModel = () => {
  const carRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (carRef.current) {
      carRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      carRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={carRef}>
      {/* Car Body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[4, 1, 2]} />
        <meshStandardMaterial color="#DC143C" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Car Roof */}
      <mesh position={[0, 1.4, 0]}>
        <boxGeometry args={[2.5, 0.8, 1.8]} />
        <meshStandardMaterial color="#8B0000" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Wheels */}
      <mesh position={[-1.3, -0.2, -0.8]}>
        <sphereGeometry args={[0.4]} />
        <meshStandardMaterial color="#2C2C2C" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[1.3, -0.2, -0.8]}>
        <sphereGeometry args={[0.4]} />
        <meshStandardMaterial color="#2C2C2C" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-1.3, -0.2, 0.8]}>
        <sphereGeometry args={[0.4]} />
        <meshStandardMaterial color="#2C2C2C" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[1.3, -0.2, 0.8]}>
        <sphereGeometry args={[0.4]} />
        <meshStandardMaterial color="#2C2C2C" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Headlights */}
      <mesh position={[2, 0.3, -0.6]}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[2, 0.3, 0.6]}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

const Car3D = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full h-[400px] md:h-[600px]"
    >
      <Canvas
        camera={{ position: [8, 4, 8], fov: 50 }}
        shadows
        className="bg-transparent"
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          shadow-mapSize={[2048, 2048]}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#DC143C" />
        <CarModel />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={2}
        />
      </Canvas>
    </motion.div>
  );
};

export default Car3D;
