"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { cn } from "@/lib/utils";

export type Vec3 = [number, number, number];

const defaultVec3: Vec3 = [0, 0, 0];

type Props = {
  width?: number;
  height?: number;
  pov?: number;
  src?: string;

  camPos: Vec3;
  camLook: Vec3;

  isAnimating?: boolean;
  className?: string;
};

export default function Canvas({
  width = 672,
  height = 672,
  pov = 75,
  src = "/mj-office.glb",

  camPos = defaultVec3,
  camLook = defaultVec3,

  isAnimating = true,

  className,
}: Props) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mountRef.current === null) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(pov, width / height, 0.1, 1000);

    const renderer = createRenderer(width, height);
    mountRef.current.appendChild(renderer.domElement);

    addAmbientLight(scene);
    addDirectionalLight(scene);

    camera.position.set(...camPos);
    camera.lookAt(...camLook);

    const animate = loadAnimation(src, camera, renderer, scene, isAnimating);

    animate();
  }, [width, height, src, camPos, camLook, isAnimating, pov]);

  return <div className={cn("aspect-square w-2xl", className)} ref={mountRef} />;
}

function createRenderer(width: number, height: number) {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(0xffffff, 1.0);

  return renderer;
}

function addAmbientLight(scene: THREE.Scene) {
  const light = new THREE.AmbientLight(0xffffff, 1.0);
  scene.add(new THREE.AmbientLight(0xffffff, 1.0));

  return light;
}

function addDirectionalLight(scene: THREE.Scene) {
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 10, 0);
  light.target.position.set(-5, 0, 0);

  scene.add(light);
  scene.add(light.target);

  return light;
}

function loadAnimation(
  src: string,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
  scene: Scene,
  isAnimating: boolean = true,
) {
  const loader = new GLTFLoader();

  let mixer: THREE.AnimationMixer | null = null;
  loader.load(
    src,
    (gltf) => {
      const model = gltf.scene;
      model.position.set(0, -0.1, 0);
      model.scale.set(1, 1, 1);
      scene.add(model);

      if (gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(model);
        const action = mixer.clipAction(gltf.animations[0]);
        action.play();
      }
    },
    undefined,
    (error) => {
      console.error(error);
    },
  );

  const clock = new THREE.Clock();
  let angle = 0;
  const radius = 2;

  const animate = () => {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    mixer?.update(delta);

    if (isAnimating) {
      angle += 0.002;
      camera.position.x = radius * Math.cos(angle);
      camera.position.z = radius * Math.sin(angle);
      camera.lookAt(0.0, 0.0, 0.0);
    }

    renderer.render(scene, camera);
  };

  return animate;
}
