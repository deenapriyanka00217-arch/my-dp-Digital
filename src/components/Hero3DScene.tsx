import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Layers, RefreshCw } from 'lucide-react';

interface Hero3DSceneProps {
  className?: string;
}

export const Hero3DScene: React.FC<Hero3DSceneProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shapeIndex, setShapeIndex] = useState(0);
  const [isWireframe, setIsWireframe] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sceneRef = useRef<{
    mesh: THREE.Mesh | null;
    wireMesh: THREE.Mesh | null;
    particles: THREE.Points | null;
    satellites: THREE.Group | null;
    renderer: THREE.WebGLRenderer | null;
    scene: THREE.Scene | null;
    camera: THREE.PerspectiveCamera | null;
    pointLight: THREE.PointLight | null;
    mouseX: number;
    mouseY: number;
    targetRotationX: number;
    targetRotationY: number;
  }>({
    mesh: null,
    wireMesh: null,
    particles: null,
    satellites: null,
    renderer: null,
    scene: null,
    camera: null,
    pointLight: null,
    mouseX: 0,
    mouseY: 0,
    targetRotationX: 0,
    targetRotationY: 0,
  });

  const shapes = ['Torus Knot', 'Cyber Icosahedron', 'Quantum Torus', 'Hyper Octahedron'];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current.scene = scene;

    // Camera Setup
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;
    sceneRef.current.camera = camera;

    // Renderer Setup with alpha
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.replaceChildren(renderer.domElement);
    sceneRef.current.renderer = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xff2a85, 1.2);
    scene.add(ambientLight);

    const mainPointLight = new THREE.PointLight(0xff2a85, 40, 20);
    mainPointLight.position.set(4, 4, 5);
    scene.add(mainPointLight);
    sceneRef.current.pointLight = mainPointLight;

    const fillLight = new THREE.PointLight(0xa855f7, 25, 20);
    fillLight.position.set(-4, -3, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2);
    rimLight.position.set(0, 5, -3);
    scene.add(rimLight);

    // Primary 3D Geometry Builder
    const createGeometry = (index: number) => {
      switch (index) {
        case 0:
          return new THREE.TorusKnotGeometry(1.2, 0.38, 140, 32, 2, 3);
        case 1:
          return new THREE.IcosahedronGeometry(1.6, 2);
        case 2:
          return new THREE.TorusGeometry(1.4, 0.45, 30, 100);
        case 3:
          return new THREE.OctahedronGeometry(1.7, 1);
        default:
          return new THREE.TorusKnotGeometry(1.2, 0.38, 140, 32, 2, 3);
      }
    };

    // Material with metallic pink luster
    const mainMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xff1493,
      emissive: 0x4a0028,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      transmission: 0.1,
      wireframe: isWireframe,
    });

    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xff70a6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });

    const geom = createGeometry(shapeIndex);
    const mesh = new THREE.Mesh(geom, mainMaterial);
    const wireMesh = new THREE.Mesh(geom, wireMaterial);
    wireMesh.scale.set(1.03, 1.03, 1.03);

    const mainGroup = new THREE.Group();
    mainGroup.add(mesh);
    mainGroup.add(wireMesh);
    scene.add(mainGroup);

    sceneRef.current.mesh = mesh;
    sceneRef.current.wireMesh = wireMesh;

    // Satellites / Orbiting Energy Orbs
    const satellitesGroup = new THREE.Group();
    const orbGeometry = new THREE.SphereGeometry(0.12, 16, 16);
    const orbColors = [0xff2a85, 0xff70a6, 0xf43f5e, 0xa855f7];

    const orbs: { mesh: THREE.Mesh; angle: number; speed: number; radius: number; yOffset: number }[] = [];

    for (let i = 0; i < 6; i++) {
      const orbMat = new THREE.MeshStandardMaterial({
        color: orbColors[i % orbColors.length],
        emissive: orbColors[i % orbColors.length],
        emissiveIntensity: 2,
        roughness: 0.1,
      });
      const orb = new THREE.Mesh(orbGeometry, orbMat);
      satellitesGroup.add(orb);
      orbs.push({
        mesh: orb,
        angle: (i / 6) * Math.PI * 2,
        speed: 0.015 + (i % 3) * 0.005,
        radius: 2.2 + (i % 2) * 0.4,
        yOffset: Math.sin(i) * 0.8,
      });
    }

    // Outer Glowing Ring in 3D
    const ringGeom = new THREE.RingGeometry(2.3, 2.35, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff2a85,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh = new THREE.Mesh(ringGeom, ringMat);
    ringMesh.rotation.x = Math.PI / 2.5;
    satellitesGroup.add(ringMesh);

    scene.add(satellitesGroup);
    sceneRef.current.satellites = satellitesGroup;

    // Particle Cloud Dust
    const particleCount = 450;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 14;
      particlePositions[i + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10;
      particleScales[i / 3] = Math.random();
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xff5eaa,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    sceneRef.current.particles = particles;

    // Mouse Interaction
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      sceneRef.current.mouseX = x;
      sceneRef.current.mouseY = y;
      sceneRef.current.targetRotationY = x * 0.9;
      sceneRef.current.targetRotationX = -y * 0.9;

      if (sceneRef.current.pointLight) {
        sceneRef.current.pointLight.position.x = x * 4;
        sceneRef.current.pointLight.position.y = y * 4 + 2;
      }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      sceneRef.current.targetRotationX = 0;
      sceneRef.current.targetRotationY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth rotate primary mesh
      if (mainGroup) {
        mainGroup.rotation.x += (sceneRef.current.targetRotationX + Math.sin(elapsedTime * 0.5) * 0.2 - mainGroup.rotation.x) * 0.05;
        mainGroup.rotation.y += (sceneRef.current.targetRotationY + elapsedTime * 0.35 - mainGroup.rotation.y) * 0.05;
        mainGroup.rotation.z = Math.sin(elapsedTime * 0.3) * 0.15;
      }

      // Orbit satellites
      orbs.forEach((orb) => {
        orb.angle += orb.speed;
        orb.mesh.position.x = Math.cos(orb.angle) * orb.radius;
        orb.mesh.position.z = Math.sin(orb.angle) * orb.radius;
        orb.mesh.position.y = orb.yOffset + Math.sin(elapsedTime * 2 + orb.angle) * 0.25;
      });

      if (ringMesh) {
        ringMesh.rotation.z += 0.005;
      }

      // Rotate particle field
      if (particles) {
        particles.rotation.y = elapsedTime * 0.04;
        particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });

    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      renderer.dispose();
      geom.dispose();
      mainMaterial.dispose();
      wireMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      orbGeometry.dispose();
      ringGeom.dispose();
      ringMat.dispose();
    };
  }, [shapeIndex, isWireframe]);

  const cycleShape = () => {
    setShapeIndex((prev) => (prev + 1) % shapes.length);
  };

  return (
    <div className={`relative w-full h-[460px] lg:h-[560px] flex items-center justify-center ${className}`}>
      {/* 3D Canvas Mount Point */}
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
        title="Move mouse to interact with 3D Cyber Core"
      />

      {/* Floating 3D Control Pill */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-2 rounded-full glass-pink border border-[#FF2A85]/30 shadow-lg shadow-[#FF2A85]/10 text-xs font-bold text-white/90">
        <button
          onClick={cycleShape}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF2A85]/20 hover:bg-[#FF2A85] hover:text-black transition-all text-[11px] uppercase tracking-wider"
        >
          <RefreshCw size={12} className="text-[#FF2A85] group-hover:text-black" />
          <span>{shapes[shapeIndex]}</span>
        </button>

        <span className="w-1 h-1 rounded-full bg-white/20" />

        <button
          onClick={() => setIsWireframe(!isWireframe)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all text-[11px] uppercase tracking-wider ${
            isWireframe ? 'bg-[#FF2A85] text-black font-extrabold' : 'bg-white/5 hover:bg-white/15 text-white/70'
          }`}
        >
          <Layers size={12} />
          <span>{isWireframe ? 'Holo Wire' : 'Solid Metal'}</span>
        </button>
      </div>

      {/* Interactive Floating 3D Badges */}
      <div className="hidden sm:flex absolute -top-2 -right-2 z-20 glass-pink p-3.5 rounded-2xl border border-[#FF2A85]/40 shadow-xl shadow-[#FF2A85]/20 floating-card-3d items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF2A85] to-[#FF70A6] flex items-center justify-center text-black font-extrabold text-xs shadow-md shadow-[#FF2A85]/50">
          3D
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#FF70A6]">WebGL Live Engine</div>
          <div className="text-xs font-extrabold text-white">Interactive Cyber Core</div>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-12 -left-4 z-20 glass-pink p-3.5 rounded-2xl border border-[#FF2A85]/40 shadow-xl shadow-[#FF2A85]/20 floating-card-3d items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF2A85] animate-ping" />
        <div>
          <div className="text-[10px] uppercase font-bold tracking-widest text-white/50">Real-time Performance</div>
          <div className="text-xs font-extrabold text-white flex items-center gap-1">
            <span className="text-[#FF2A85]">+350%</span> Conversion Surge
          </div>
        </div>
      </div>
    </div>
  );
};
