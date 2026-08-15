import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Zap, ArrowDown, Activity, Play, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

interface SalesFunnel3DProps {
  className?: string;
}

interface FunnelStage {
  id: number;
  name: string;
  shortName: string;
  visitors: string;
  rate: string;
  desc: string;
  color: number;
  colorHex: string;
  yTop: number;
  yBottom: number;
  rTop: number;
  rBottom: number;
}

const FUNNEL_STAGES: FunnelStage[] = [
  {
    id: 1,
    name: 'Top-of-Funnel Traffic & Ads',
    shortName: 'Traffic & Meta Ads',
    visitors: '150,000 / mo',
    rate: '100%',
    desc: 'High-intent organic SEO, targeted Meta/Google PPC campaigns, and viral social reach.',
    color: 0xFF2E9A,
    colorHex: '#FF2E9A',
    yTop: 2.2,
    yBottom: 1.1,
    rTop: 2.5,
    rBottom: 1.85,
  },
  {
    id: 2,
    name: 'Interactive 3D Lead Capture',
    shortName: '3D Lead Ingestion',
    visitors: '24,600 Leads',
    rate: '16.4%',
    desc: 'High-converting 3D WebGL landing pages with zero-friction capture and instant lead scoring.',
    color: 0xB026FF,
    colorHex: '#B026FF',
    yTop: 1.0,
    yBottom: -0.1,
    rTop: 1.75,
    rBottom: 1.25,
  },
  {
    id: 3,
    name: 'Autonomous WhatsApp & AI Nurture',
    shortName: 'Automated Nurture',
    visitors: '6,800 Qualified',
    rate: '27.6%',
    desc: 'Instant zero-second WhatsApp Cloud API bot replies, CRM webhooks, and qualification triggers.',
    color: 0xFF7AC6,
    colorHex: '#FF7AC6',
    yTop: -0.2,
    yBottom: -1.2,
    rTop: 1.15,
    rBottom: 0.75,
  },
  {
    id: 4,
    name: 'Closed High-Value Revenue',
    shortName: 'Deals & Revenue',
    visitors: '1,420+ Deals (₹4.8Cr)',
    rate: '20.8%',
    desc: 'Automated appointment bookings, automated checkout funnels, and enterprise deal closing.',
    color: 0x38bdf8,
    colorHex: '#38BDF8',
    yTop: -1.3,
    yBottom: -2.3,
    rTop: 0.68,
    rBottom: 0.35,
  },
];

export const SalesFunnel3D: React.FC<SalesFunnel3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedStage, setSelectedStage] = useState<number>(1);
  const [flowSpeed, setFlowSpeed] = useState<'normal' | 'turbo'>('normal');
  const [isHovered, setIsHovered] = useState(false);
  const [leadBurstCount, setLeadBurstCount] = useState(0);

  const sceneState = useRef<{
    renderer: THREE.WebGLRenderer | null;
    scene: THREE.Scene | null;
    camera: THREE.PerspectiveCamera | null;
    funnelGroup: THREE.Group | null;
    particleSystem: THREE.Points | null;
    particleData: {
      positions: Float32Array;
      velocities: Float32Array;
      stages: Float32Array;
      count: number;
    } | null;
    rings: THREE.Mesh[];
    mouseX: number;
    mouseY: number;
    targetRotationY: number;
    targetRotationX: number;
    speedMultiplier: number;
  }>({
    renderer: null,
    scene: null,
    camera: null,
    funnelGroup: null,
    particleSystem: null,
    particleData: null,
    rings: [],
    mouseX: 0,
    mouseY: 0,
    targetRotationY: 0,
    targetRotationX: 0,
    speedMultiplier: 1.0,
  });

  // Handle flow speed change
  useEffect(() => {
    sceneState.current.speedMultiplier = flowSpeed === 'turbo' ? 2.4 : 1.0;
  }, [flowSpeed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneState.current.scene = scene;

    // 2. Camera Setup
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 550;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0.4, 7.2);
    sceneState.current.camera = camera;

    // 3. Renderer with smooth anti-aliasing & alpha
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.replaceChildren(renderer.domElement);
    sceneState.current.renderer = renderer;

    // 4. Lighting for deep 3D shading
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xf43f5e, 15, 30);
    keyLight.position.set(5, 5, 6);
    scene.add(keyLight);

    const blueRimLight = new THREE.PointLight(0x38bdf8, 12, 30);
    blueRimLight.position.set(-5, -3, 4);
    scene.add(blueRimLight);

    const bottomGlow = new THREE.PointLight(0xfb7185, 8, 15);
    bottomGlow.position.set(0, -3, 2);
    scene.add(bottomGlow);

    // 5. Funnel Mesh Construction (4 Layered Translucent Stages)
    const funnelGroup = new THREE.Group();
    scene.add(funnelGroup);
    sceneState.current.funnelGroup = funnelGroup;

    const ringMeshes: THREE.Mesh[] = [];

    FUNNEL_STAGES.forEach((stage) => {
      const height = stage.yTop - stage.yBottom;
      const midY = (stage.yTop + stage.yBottom) / 2;

      // Truncated Cone Geometry for each stage
      const coneGeom = new THREE.CylinderGeometry(
        stage.rTop,
        stage.rBottom,
        height,
        48,
        1,
        true // open ended
      );

      // Translucent Cyber Glass Material with subtle wire grid
      const coneMat = new THREE.MeshPhysicalMaterial({
        color: stage.color,
        emissive: stage.color,
        emissiveIntensity: 0.18,
        roughness: 0.25,
        metalness: 0.2,
        transmission: 0.85,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const coneMesh = new THREE.Mesh(coneGeom, coneMat);
      coneMesh.position.y = midY;
      funnelGroup.add(coneMesh);

      // Wireframe overlay for futuristic tech feel
      const wireMat = new THREE.MeshBasicMaterial({
        color: stage.color,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      });
      const wireMesh = new THREE.Mesh(coneGeom, wireMat);
      wireMesh.position.y = midY;
      wireMesh.scale.set(1.008, 1.0, 1.008);
      funnelGroup.add(wireMesh);

      // Glowing Stage Boundary Rings
      const ringGeom = new THREE.TorusGeometry(stage.rTop, 0.028, 16, 64);
      const ringMat = new THREE.MeshStandardMaterial({
        color: stage.color,
        emissive: stage.color,
        emissiveIntensity: 1.2,
        roughness: 0.2,
      });
      const topRing = new THREE.Mesh(ringGeom, ringMat);
      topRing.rotation.x = Math.PI / 2;
      topRing.position.y = stage.yTop;
      funnelGroup.add(topRing);
      ringMeshes.push(topRing);

      // Add a bottom ring for the last stage
      if (stage.id === 4) {
        const bottomRingGeom = new THREE.TorusGeometry(stage.rBottom, 0.035, 16, 64);
        const bottomRingMat = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x38bdf8,
          emissiveIntensity: 2.0,
        });
        const bottomRing = new THREE.Mesh(bottomRingGeom, bottomRingMat);
        bottomRing.rotation.x = Math.PI / 2;
        bottomRing.position.y = stage.yBottom;
        funnelGroup.add(bottomRing);
      }
    });

    sceneState.current.rings = ringMeshes;

    // 6. Streaming 3D Neon Lead Particles Flowing Down the Funnel!
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount);
    const stageIds = new Float32Array(particleCount);
    const angles = new Float32Array(particleCount);

    const resetParticle = (i: number, atTop: boolean = false) => {
      const idx = i * 3;
      const angle = Math.random() * Math.PI * 2;
      angles[i] = angle;

      const y = atTop
        ? 2.3 + Math.random() * 0.8
        : -2.3 + Math.random() * 5.4;

      positions[idx + 1] = y;

      // Calculate radius at this Y position based on funnel slope
      // Funnel bounds: yTop=2.2 (r=2.5) to yBottom=-2.3 (r=0.35)
      const t = (2.2 - y) / (2.2 - (-2.3)); // 0 at top, 1 at bottom
      const clampedT = Math.max(0, Math.min(1, t));
      const currentRadius = (2.5 * (1 - clampedT) + 0.35 * clampedT) * (0.85 + Math.random() * 0.25);

      positions[idx] = Math.cos(angle) * currentRadius;
      positions[idx + 2] = Math.sin(angle) * currentRadius;

      velocities[i] = 0.012 + Math.random() * 0.018;

      // Color based on Y position (Hot Pink -> Purple -> Cyan conversion stream)
      if (y > 1.1) {
        // Stage 1: Hot Pink
        colors[idx] = 1.0;
        colors[idx + 1] = 0.18;
        colors[idx + 2] = 0.60;
        stageIds[i] = 1;
      } else if (y > -0.1) {
        // Stage 2: Purple
        colors[idx] = 0.69;
        colors[idx + 1] = 0.15;
        colors[idx + 2] = 1.0;
        stageIds[i] = 2;
      } else if (y > -1.2) {
        // Stage 3: Light Pink
        colors[idx] = 1.0;
        colors[idx + 1] = 0.48;
        colors[idx + 2] = 0.78;
        stageIds[i] = 3;
      } else {
        // Stage 4: Cyan Golden Deal Stream
        colors[idx] = 0.22;
        colors[idx + 1] = 0.74;
        colors[idx + 2] = 0.97;
        stageIds[i] = 4;
      }
    };

    for (let i = 0; i < particleCount; i++) {
      resetParticle(i, false);
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circular glow particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(255, 200, 220, 0.9)');
      grad.addColorStop(0.7, 'rgba(244, 63, 94, 0.4)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);
    sceneState.current.particleSystem = particles;
    sceneState.current.particleData = {
      positions,
      velocities,
      stages: stageIds,
      count: particleCount,
    };

    // 7. Mouse Interaction for smooth 3D tilt
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      sceneState.current.mouseX = x;
      sceneState.current.mouseY = y;
      sceneState.current.targetRotationY = x * 0.45;
      sceneState.current.targetRotationX = -y * 0.25;

      keyLight.position.x = 4 + x * 3;
      keyLight.position.y = 4 + y * 2;
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      sceneState.current.targetRotationX = 0;
      sceneState.current.targetRotationY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // 8. Animation Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();
      const speed = sceneState.current.speedMultiplier;

      // Smooth inertia rotation of Funnel
      if (funnelGroup) {
        funnelGroup.rotation.y += (sceneState.current.targetRotationY + elapsedTime * 0.15 - funnelGroup.rotation.y) * 0.05;
        funnelGroup.rotation.x += (sceneState.current.targetRotationX + 0.12 - funnelGroup.rotation.x) * 0.05;
      }

      // Stream Lead Particles down the funnel
      const posAttr = particleGeom.attributes.position as THREE.BufferAttribute;
      const colAttr = particleGeom.attributes.color as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      const colArray = colAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        let y = posArray[idx + 1];
        const v = velocities[i] * speed;

        y -= v * 1.5;

        // Spiral rotation as it drops
        angles[i] += 0.018 * speed;
        const currentAngle = angles[i];

        if (y < -2.6) {
          // Reached bottom, respawn at top
          y = 2.4 + Math.random() * 0.6;
          resetParticle(i, true);
        }

        posArray[idx + 1] = y;

        // Calculate constricted funnel radius
        const t = (2.2 - y) / (2.2 - (-2.3));
        const clampedT = Math.max(0, Math.min(1, t));
        const baseRadius = 2.5 * (1 - clampedT) + 0.35 * clampedT;
        // Jitter for organic lead flow
        const radius = baseRadius * (0.82 + (Math.sin(elapsedTime * 3 + i) * 0.15 + 0.1));

        posArray[idx] = Math.cos(currentAngle) * radius;
        posArray[idx + 2] = Math.sin(currentAngle) * radius;

        // Dynamic color transition along stages
        if (y > 1.1) {
          colArray[idx] = 1.0;
          colArray[idx + 1] = 0.18;
          colArray[idx + 2] = 0.60;
        } else if (y > -0.1) {
          colArray[idx] = 0.69;
          colArray[idx + 1] = 0.15;
          colArray[idx + 2] = 1.0;
        } else if (y > -1.2) {
          colArray[idx] = 1.0;
          colArray[idx + 1] = 0.48;
          colArray[idx + 2] = 0.78;
        } else {
          // Converted Deal stream: bright glowing Cyan-Gold
          colArray[idx] = 0.22;
          colArray[idx + 1] = 0.74;
          colArray[idx + 2] = 0.97;
        }
      }

      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      // Pulse bottom nozzle
      if (bottomGlow) {
        bottomGlow.intensity = 6 + Math.sin(elapsedTime * 6) * 3;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Observer
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
      particleGeom.dispose();
      particleMat.dispose();
      particleTexture.dispose();
    };
  }, []);

  const triggerLeadBurst = () => {
    setLeadBurstCount((prev) => prev + 1);
    setFlowSpeed('turbo');
    setTimeout(() => {
      setFlowSpeed('normal');
    }, 4500);
  };

  const activeStageData = FUNNEL_STAGES.find((s) => s.id === selectedStage) || FUNNEL_STAGES[0];

  return (
    <div className={`relative w-full flex flex-col items-center ${className}`}>
      {/* Interactive 3D Canvas Container */}
      <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[540px] flex items-center justify-center">
        <div
          ref={containerRef}
          className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
          title="Drag mouse to rotate 3D Sales Pipeline"
        />

        {/* Floating Top Lead Inflow Badge */}
        <div className="absolute top-3 left-4 sm:left-6 z-20 glass-card px-4 py-2 rounded-2xl border border-white/10 shadow-lg flex items-center gap-3 backdrop-blur-md">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-rose-400">Live Inflow</div>
            <div className="text-xs font-black text-white">150,000 High-Intent Visitors</div>
          </div>
        </div>

        {/* Floating Bottom Deals Velocity Badge */}
        <div className="absolute bottom-3 right-4 sm:right-6 z-20 glass-card px-4 py-2 rounded-2xl border border-sky-500/30 shadow-lg flex items-center gap-3 backdrop-blur-md">
          <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
            <TrendingUp size={16} />
          </div>
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400">Revenue Velocity</div>
            <div className="text-xs font-black text-white">1,420+ Deals (₹4.8 Cr)</div>
          </div>
        </div>

        {/* Interactive Boost Flow Trigger */}
        <div className="absolute bottom-3 left-4 sm:left-6 z-20 flex items-center gap-2">
          <button
            onClick={triggerLeadBurst}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-lg ${
              flowSpeed === 'turbo'
                ? 'bg-rose-500 text-white shadow-rose-500/50 scale-105'
                : 'bg-white/10 text-white/90 hover:bg-rose-500/20 hover:text-rose-300 border border-white/15'
            }`}
          >
            <Zap size={13} className={flowSpeed === 'turbo' ? 'animate-bounce text-white' : 'text-rose-400'} />
            <span>{flowSpeed === 'turbo' ? 'Lead Surge Active (2.4x)' : 'Simulate 2x Inflow'}</span>
          </button>
        </div>
      </div>

      {/* Interactive 4-Stage Pipeline Navigation Tabs */}
      <div className="w-full mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 px-2 relative z-20">
        {FUNNEL_STAGES.map((stage) => {
          const isSelected = selectedStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id)}
              className={`p-3 rounded-2xl text-left transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-white/10 border-rose-500/60 shadow-lg shadow-rose-500/15 ring-1 ring-rose-500/40'
                  : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/50">
                  Stage 0{stage.id}
                </span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: stage.colorHex }}
                />
              </div>
              <div className="text-xs font-black text-white truncate">{stage.shortName}</div>
              <div className="text-[11px] font-bold text-rose-400 mt-0.5">{stage.visitors}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Insight Panel */}
      <div className="w-full mt-3 p-4 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="space-y-0.5">
          <div className="font-black text-white uppercase tracking-tight flex items-center gap-2">
            <span className="text-rose-400 font-extrabold">Stage {activeStageData.id}:</span>
            {activeStageData.name}
          </div>
          <p className="text-white/60 text-[11px] leading-relaxed max-w-xl font-normal">
            {activeStageData.desc}
          </p>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10">
          <div>
            <div className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Conversion Efficiency</div>
            <div className="text-sm font-black text-rose-400">{activeStageData.rate}</div>
          </div>
          <div className="h-7 w-px bg-white/10" />
          <div>
            <div className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Output Velocity</div>
            <div className="text-sm font-black text-white">{activeStageData.visitors}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
