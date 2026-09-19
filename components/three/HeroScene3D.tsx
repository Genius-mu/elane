"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingPlane({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotX = useRef(0);
  const targetRotY = useRef(0);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    targetRotX.current = THREE.MathUtils.lerp(targetRotX.current, -mouse.y * 0.05, delta * 2);
    targetRotY.current = THREE.MathUtils.lerp(targetRotY.current, mouse.x * 0.05, delta * 2);

    meshRef.current.rotation.x = targetRotX.current;
    meshRef.current.rotation.y = targetRotY.current;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1]}>
      <planeGeometry args={[14, 8, 32, 32]} />
      <meshBasicMaterial
        transparent
        opacity={0.15}
        wireframe
        color="#7C6A4E"
      />
    </mesh>
  );
}

function AmbientParticles({ count = 35 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  });

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime() * 0.08;
    pointsRef.current.rotation.y = time;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#A89574"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroScene3D() {
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-60">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <FloatingPlane mouse={mouse} />
        <AmbientParticles />
      </Canvas>
    </div>
  );
}
