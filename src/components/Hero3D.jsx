import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const Hero3D = () => (
  <div className="w-full h-64 md:h-96 bg-base-200 rounded-xl flex items-center justify-center">
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <Sphere args={[1, 64, 64]}>
        <meshStandardMaterial color="#2563eb" wireframe={false} />
      </Sphere>
      <OrbitControls enableZoom={false} />
    </Canvas>
  </div>
);

export default Hero3D;
