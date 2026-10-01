"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Bot, Sparkles } from "lucide-react";

export default function ChatbotCharacter({ className = "" }) {
  const mountRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      sender: "bot",
      text: "Hello! How can ATRIBS accelerate your cloud infrastructure?",
    },
  ]);

  const mouseNorm = useRef({ x: 0, y: 0 });
  const blinkVal = useRef(1);

  // Corrected Cursor Tracking Math
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mountRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Inverted Y: screen Y increases downward, Three.js Y increases upward
      const deltaX = (e.clientX - centerX) / (window.innerWidth * 0.5);
      const deltaY = -(e.clientY - centerY) / (window.innerHeight * 0.5);

      mouseNorm.current = {
        x: Math.max(-1, Math.min(1, deltaX)),
        y: Math.max(-1, Math.min(1, deltaY)),
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Periodic Natural Blink
  useEffect(() => {
    const interval = setInterval(() => {
      blinkVal.current = 0.08;
      setTimeout(() => {
        blinkVal.current = 1;
      }, 130);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  // Three.js 3D Bot Scene Setup
  useEffect(() => {
    if (!mountRef.current) return;

    // Compact viewport dimensions
    const width = 140;
    const height = 140;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 50);
    camera.position.set(0, 0, 5.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    mountRef.current.replaceChildren(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 3.2);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xdf2027, 0.8);
    fillLight.position.set(0, -4, 2);
    scene.add(fillLight);

    const botRoot = new THREE.Group();
    scene.add(botRoot);

    // 1. Ceramic Shell Head
    const bodyGeom = new THREE.SphereGeometry(1.25, 48, 48);
    bodyGeom.scale(1.08, 0.96, 0.95);
    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.18,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
    });
    const bodyMesh = new THREE.Mesh(bodyGeom, bodyMat);
    botRoot.add(bodyMesh);

    // 2. Dark Acrylic Visor
    const visorGeom = new THREE.SphereGeometry(1.12, 36, 36);
    visorGeom.scale(0.88, 0.72, 0.38);
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x09090b,
      roughness: 0.1,
      metalness: 0.9,
    });
    const visor = new THREE.Mesh(visorGeom, visorMat);
    visor.position.set(0, 0.05, 0.82);
    botRoot.add(visor);

    // 3. Glowing LED Capsule Eyes
    const eyeGroup = new THREE.Group();
    visor.add(eyeGroup);

    const eyeGeom = new THREE.CapsuleGeometry(0.12, 0.28, 16, 16);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    const leftEye = new THREE.Mesh(eyeGeom, eyeMat);
    leftEye.position.set(-0.35, 0.02, 0.45);
    eyeGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeom, eyeMat);
    rightEye.position.set(0.35, 0.02, 0.45);
    eyeGroup.add(rightEye);

    // 4. Side Audio Earpieces
    const earGeom = new THREE.CylinderGeometry(0.35, 0.35, 0.2, 32);
    earGeom.rotateZ(Math.PI / 2);
    const earMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.7,
      roughness: 0.3,
    });

    const leftEar = new THREE.Mesh(earGeom, earMat);
    leftEar.position.set(-1.3, 0, 0);
    botRoot.add(leftEar);

    const rightEar = new THREE.Mesh(earGeom, earMat);
    rightEar.position.set(1.3, 0, 0);
    botRoot.add(rightEar);

    // Red Brand Accent Rings
    const ringGeom = new THREE.TorusGeometry(0.24, 0.03, 16, 32);
    ringGeom.rotateY(Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xdf2027 });

    const leftRing = new THREE.Mesh(ringGeom, ringMat);
    leftRing.position.set(-1.41, 0, 0);
    botRoot.add(leftRing);

    const rightRing = new THREE.Mesh(ringGeom, ringMat);
    rightRing.position.set(1.41, 0, 0);
    botRoot.add(rightRing);

    let animationId;
    const startTime = performance.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) / 1000;

      // Subtle breathing float
      botRoot.position.y = Math.sin(elapsedTime * 2.2) * 0.06;

      // Realistic 3D head pitch & yaw matching cursor direction
      const targetRotY = mouseNorm.current.x * 0.45;
      const targetRotX = -mouseNorm.current.y * 0.35;
      const targetTiltZ = -mouseNorm.current.x * 0.08;

      botRoot.rotation.y += (targetRotY - botRoot.rotation.y) * 0.1;
      botRoot.rotation.x += (targetRotX - botRoot.rotation.x) * 0.1;
      botRoot.rotation.z += (targetTiltZ - botRoot.rotation.z) * 0.1;

      // Pupil gaze shift (eyes shift toward cursor inside the visor)
      const targetEyeX = mouseNorm.current.x * 0.08;
      const targetEyeY = mouseNorm.current.y * 0.06;
      eyeGroup.position.x += (targetEyeX - eyeGroup.position.x) * 0.18;
      eyeGroup.position.y += (targetEyeY - eyeGroup.position.y) * 0.18;

      // Blinking squash
      leftEye.scale.y = blinkVal.current;
      rightEye.scale.y = blinkVal.current;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      bodyGeom.dispose();
      bodyMat.dispose();
      visorGeom.dispose();
      visorMat.dispose();
      eyeGeom.dispose();
      eyeMat.dispose();
      earGeom.dispose();
      earMat.dispose();
      ringGeom.dispose();
      ringMat.dispose();
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setChatLog((prev) => [...prev, { sender: "user", text: inputMessage }]);
    setInputMessage("");

    setTimeout(() => {
      setChatLog((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "I can coordinate a technical demo with an ATRIBS architect or detail our high-throughput modules. What do you need?",
        },
      ]);
    }, 600);
  };

  return (
    <div
      className={`fixed right-6 bottom-6 z-50 flex flex-col items-end select-none pointer-events-auto ${className}`}
    >
      {/* Mini Clickable Mascot Head */}
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-[140px] w-[140px] cursor-pointer items-center justify-center filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
      >
        {/* Floating Greeting Pill */}
        {!isOpen && (
          <motion.div
            animate={{
              y: isHovered ? -4 : 0,
              scale: isHovered ? 1.04 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="absolute -top-3 right-2 z-20 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-neutral-200/90 bg-white/95 px-3 py-1 shadow-md backdrop-blur-md"
          >
            <Sparkles className="h-3 w-3 text-[#df2027]" />
            <span className="text-[11px] font-semibold text-neutral-800">
              Chat with AI
            </span>
            <div className="absolute -bottom-1 right-6 h-2 w-2 rotate-45 border-b border-r border-neutral-200/90 bg-white" />
          </motion.div>
        )}

        {/* Scaled 3D WebGL Canvas */}
        <div ref={mountRef} className="h-[140px] w-[140px]" />
      </motion.div>

      {/* Slide-Up Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="absolute right-0 bottom-36 flex h-[460px] w-[350px] flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white/95 shadow-2xl backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 bg-white/70 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#df2027]/10 text-[#df2027]">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">
                    ATRIBS Core AI
                  </h4>
                  <p className="flex items-center gap-1.5 text-[10px] text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online • Sub-2ms Latency
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages Stream */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {chatLog.map((chat, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    chat.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                      chat.sender === "user"
                        ? "bg-neutral-950 text-white shadow-sm"
                        : "border border-neutral-200/70 bg-white text-neutral-800"
                    }`}
                  >
                    {chat.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form
              onSubmit={handleSendMessage}
              className="border-t border-neutral-100 p-3 bg-white/70"
            >
              <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 focus-within:border-neutral-400 focus-within:bg-white">
                <input
                  type="text"
                  placeholder="Ask about ATRIBS platforms..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1 bg-transparent text-xs text-neutral-800 outline-none placeholder:text-neutral-400"
                />
                <button
                  type="submit"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#df2027] text-white transition-transform hover:scale-105"
                >
                  <Send className="h-3 w-3" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
