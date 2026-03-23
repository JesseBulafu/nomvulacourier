"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

function Plane() {
  const { scene } = useGLTF("/models/plane_a340/scene.glb");
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Initial position — off-screen right
    ref.current.position.set(8, 0, 0);
    ref.current.rotation.set(0, -Math.PI / 2, 0);

    // Animate the plane flying in from the right
    gsap.to(ref.current.position, {
      x: 0,
      y: 0.3,
      z: 0,
      duration: 2.5,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.to(ref.current.rotation, {
      y: -Math.PI / 6,
      duration: 2.5,
      ease: "power3.out",
      delay: 0.5,
    });

    // Dispose scene on unmount to free memory
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
              // @ts-ignore - some material types may not have map
              if (m && (m as any).map) (m as any).map.dispose();
              if (m && typeof (m as any).dispose === "function") (m as any).dispose();
            });
          }
        }
      });
    };
  }, [scene]);

  // Gentle hovering animation
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = 0.3 + Math.sin(t * 0.8) * 0.15;
    ref.current.rotation.z = Math.sin(t * 0.5) * 0.02;
  });

  return (
    <group ref={ref} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        color="#ffffff"
      />
      <directionalLight
        position={[-5, 5, -5]}
        intensity={0.4}
        color="#ffa040"
      />
      <pointLight position={[0, -2, 5]} intensity={0.3} color="#60a5fa" />
    </>
  );
}

function CameraRig() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 1.2, 6);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.15) * 0.4;
    camera.position.y = 1.2 + Math.sin(t * 0.25) * 0.1;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function PlaneModel({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <CameraRig />
        <Lights />
        <Plane />
      </Canvas>
    </div>
  );
}

// Preload only once in browser
if (typeof window !== "undefined") {
  useGLTF.preload("/models/plane_a340/scene.glb");
}
