import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, Box, Octahedron, Torus } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, shape = 'sphere' }: { 
  position: [number, number, number]; 
  color: string; 
  shape?: 'sphere' | 'box' | 'octahedron' | 'torus' 
}) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const ShapeComponent = {
    sphere: Sphere,
    box: Box,
    octahedron: Octahedron,
    torus: Torus,
  }[shape];

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <ShapeComponent ref={ref} position={position} args={shape === 'torus' ? [1, 0.3] : [1]}>
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.6} 
          roughness={0.1} 
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </ShapeComponent>
    </Float>
  );
}

function InteractiveOrb() {
  const ref = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, mouse.x * viewport.width / 8, 0.1);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, mouse.y * viewport.height / 8, 0.1);
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Sphere ref={ref} args={[0.8]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#8b5cf6" 
        transparent 
        opacity={0.8} 
        roughness={0} 
        metalness={1}
        emissive="#8b5cf6"
        emissiveIntensity={0.3}
      />
    </Sphere>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05;
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.6} />
    </points>
  );
}

export function Scene3D() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#8b5cf6" intensity={0.5} />
      
      {/* Floating shapes */}
      <FloatingShape position={[-4, 2, -2]} color="#8b5cf6" shape="sphere" />
      <FloatingShape position={[4, -1, -1]} color="#ec4899" shape="box" />
      <FloatingShape position={[2, 3, -3]} color="#06b6d4" shape="octahedron" />
      <FloatingShape position={[-3, -2, -2]} color="#f59e0b" shape="torus" />
      <FloatingShape position={[0, -4, -1]} color="#10b981" shape="sphere" />
      
      {/* Interactive orb that follows mouse */}
      <InteractiveOrb />
      
      {/* Particle field */}
      <Particles />
    </>
  );
}