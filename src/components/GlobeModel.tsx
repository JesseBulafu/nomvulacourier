"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const { scene } = useGLTF("/models/earth_globe/scene.glb");
  const ref = useRef<THREE.Group>(null);

  // Slow continuous rotation
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.15;
  });

  // Dispose scene on unmount (type-safe)
  useEffect(() => {
    return () => {
      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material) {
            const materials = Array.isArray(mesh.material)
              ? mesh.material
              : [mesh.material];
            materials.forEach((m) => {
              // @ts-ignore
              if (m && (m as any).map) (m as any).map.dispose();
              if (m && typeof (m as any).dispose === "function") (m as any).dispose();
            });
          }
        }
      });
    };
  }, [scene]);

  return (
    <group ref={ref} scale={[1, 1, 1]} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <directionalLight
        position={[-3, 2, -4]}
        intensity={0.5}
        color="#f97316"
      />
      <pointLight position={[0, 0, 4]} intensity={0.3} color="#60a5fa" />
    </>
  );
}

export default function GlobeModel({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 2, 5], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <Lights />
        <Globe />
      </Canvas>
    </div>
  );
}

// Preload only once in browser
if (typeof window !== "undefined") {
  useGLTF.preload("/models/earth_globe/scene.glb");
}
