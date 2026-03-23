"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

function Plane() {
  const { scene } = useGLTF("/models/plane_a340/scene.glb");
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Base Y object used for the vertical flight + gentle hover offset
    const base = { y: 8 };

    // Start high above the scene
    ref.current.position.set(0, base.y, 0);
    ref.current.rotation.set(0, -Math.PI / 2, 0);

    // Animate horizontal approach (x/z) while we animate base.y separately
    gsap.to(ref.current.position, {
      x: 0,
      z: 0,
      duration: 2.5,
      ease: "power3.out",
      delay: 0.5,
    });

    // Animate the descent from above into final base Y
    gsap.to(base, {
      y: 0.3,
      duration: 2.5,
      ease: "power3.out",
      delay: 0.5,
      onUpdate: () => {
        if (ref.current) ref.current.position.y = base.y;
      },
    });

    // Slight rotation to settle the plane after approach
    gsap.to(ref.current.rotation, {
      y: -Math.PI / 6,
      duration: 2.5,
      ease: "power3.out",
      delay: 0.5,
    });

    // Dispose scene on unmount to free memory
    return () => {
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry.dispose();
          if (obj.material.map) obj.material.map.dispose();
          if (obj.material.dispose) obj.material.dispose();
        }
      });
    };
  }, [scene]);

  // Gentle hovering animation
  // Gentle hovering animation that builds on the animated base.y value
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    // Read the current base Y (set by the gsap onUpdate or initial value)
    const baseY = ref.current.position.y;
    ref.current.position.y = baseY + Math.sin(t * 0.8) * 0.15;
    ref.current.rotation.z = Math.sin(t * 0.5) * 0.02;
  });

  return (
    <group ref={ref} scale={[0.004, 0.004, 0.004]}>
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
