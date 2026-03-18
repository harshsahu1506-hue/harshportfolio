import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NetworkParticles() {
  const ref = useRef<THREE.Points>(null!);
  
  const particleCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.mouse;
    
    if (ref.current) {
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, time * 0.05 + y * 0.2, 0.1);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, time * 0.075 + x * 0.2, 0.1);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f2ff"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-clay-bg opacity-80" />
      <Canvas camera={{ position: [0, 0, 1] }}>
        <NetworkParticles />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05)_0%,transparent_70%)]" />
    </div>
  );
};
