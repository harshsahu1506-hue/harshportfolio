import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function Node({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.position.y += Math.sin(time + position[0]) * 0.002;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={mesh} position={position} args={[0.2, 32, 32]}>
        <MeshDistortMaterial
          color="#00f2ff"
          speed={3}
          distort={0.4}
          radius={1}
          emissive="#00f2ff"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
}

export const NetworkViz: React.FC = () => {
  return (
    <section className="py-24 px-6 relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Node position={[-2, 1, 0]} />
          <Node position={[2, -1, 0]} />
          <Node position={[0, 0, 0]} />
          <Node position={[-1.5, -1.5, 0]} />
          <Node position={[1.5, 1.5, 0]} />
        </Canvas>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-12 clay-card bg-primary/20 backdrop-blur-xl"
        >
          <h2 className="text-4xl font-bold mb-6">Interactive Network Visualization</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Visualizing the flow of data across secure, scalable IT infrastructures. Each node represents a critical component in the system architecture.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
