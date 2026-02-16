'use client'

import { Canvas } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Stars() {
  const ref = useRef<THREE.Points>(null)
  
  const positions = useMemo(() => {
    const pos = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ff00ff"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

function Grid() {
  return (
    <group position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper args={[30, 30, '#ff00ff', '#00ffff']} />
    </group>
  )
}

function FloatingGeometries() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshBasicMaterial color="#ff00ff" wireframe transparent opacity={0.3} />
    </mesh>
  )
}

export default function Home() {
  return (
    <>
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Stars />
          <Grid />
          <FloatingGeometries />
          <ambientLight intensity={0.5} />
        </Canvas>
      </div>
      
      <div className="content">
        <h1 className="logo">STUFE B</h1>
        <p className="tagline">Synthpop aus dem Erzgebirge</p>
        
        <div className="links">
          <a href="https://open.spotify.com/artist/your-artist-id" target="_blank" rel="noopener noreferrer" className="link-btn">
            🎵 Spotify
          </a>
          <a href="https://youtube.com/@stufeb" target="_blank" rel="noopener noreferrer" className="link-btn secondary">
            ▶ YouTube
          </a>
          <a href="https://instagram.com/stufeb" target="_blank" rel="noopener noreferrer" className="link-btn">
            📷 Instagram
          </a>
        </div>
        
        <div className="socials">
          <a href="https://twitter.com/stufeb" target="_blank" rel="noopener noreferrer" className="social-link">𝕏</a>
          <a href="https://tiktok.com/@stufeb" target="_blank" rel="noopener noreferrer" className="social-link">♪</a>
          <a href="https://discord.gg/stufeb" target="_blank" rel="noopener noreferrer" className="social-link">◈</a>
        </div>
        
        <p className="scroll-indicator">SCROLL DOWN</p>
      </div>

      <section className="lena-section">
        <h2 className="lena-title">Lena</h2>
        <img src="/lena.jpg" alt="Lena from Stufe B" className="lena-image" />
      </section>

      <section className="about-section">
        <h2 className="about-title">Über Uns</h2>
        <p className="about-text">
          STUFE B ist Synthpop/Synthwave aus dem Erzgebirge. 
          Dunkel aber hoffnungsvoll. Elektronisch und emotional.
          <br /><br />
          Seit 2024 begeistern wir unsere Fans mit eingängigen Melodien 
          und neonbeleuchteten Sounds.
        </p>
      </section>
    </>
  )
}
