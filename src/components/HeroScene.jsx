import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField() {
  const ref = useRef()
  const count = 3000

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.03
    ref.current.rotation.y = state.clock.elapsedTime * 0.05
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#39FF14" size={0.018} sizeAttenuation depthWrite={false} opacity={0.6} />
    </Points>
  )
}

function FloatingRing() {
  const ref = useRef()

  useFrame((state) => {
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.3
    ref.current.rotation.z = state.clock.elapsedTime * 0.15
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.2
  })

  return (
    <mesh ref={ref} position={[2.5, 0, -2]}>
      <torusGeometry args={[1.2, 0.02, 16, 100]} />
      <meshBasicMaterial color="#39FF14" transparent opacity={0.25} />
    </mesh>
  )
}

function FloatingRing2() {
  const ref = useRef()

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.2
    ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.4
    ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.5) * 0.3
  })

  return (
    <mesh ref={ref} position={[-2.5, 0.5, -3]}>
      <torusGeometry args={[0.8, 0.015, 16, 80]} />
      <meshBasicMaterial color="#39FF14" transparent opacity={0.15} />
    </mesh>
  )
}

function GlowSphere() {
  const ref = useRef()

  useFrame((state) => {
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15
    ref.current.position.x = Math.cos(state.clock.elapsedTime * 0.5) * 0.1
  })

  return (
    <mesh ref={ref} position={[0, 0, -5]}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshBasicMaterial color="#39FF14" transparent opacity={0.04} wireframe />
    </mesh>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <StarField />
        <FloatingRing />
        <FloatingRing2 />
        <GlowSphere />
      </Canvas>
    </div>
  )
}
