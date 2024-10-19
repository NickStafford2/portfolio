import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import React, { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import './Three.css'

/*
function Box(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
    </mesh>
  )
}

export default function MyThree() {
  return (
    <Canvas className="">
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  )
}
*/

const BasicParticles = () => {
  // This reference gives us direct access to our points
  const points = useRef()
  const count = 8000

  const particlesPosition = useMemo(() => {
    // Create a Float32Array of count*3 length
    // -> we are going to generate the x, y, and z values for 2000 particles
    // -> thus we need 6000 items in this array
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      // Generate random values for x, y, and z on every loop
      const x = ((Math.random() - 0.5) * 2 * i) / count
      const y = ((Math.random() - 0.5) * 2 * i) / count
      const z = ((Math.random() - 0.5) * 2 * i) / count

      // We add the 3 values to the attribute array for every loop
      positions.set([x, y, z], i * 3)
    }

    return positions
  }, [count])

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
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
      <pointsMaterial
        size={0.015}
        color="#5786F5"
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

const CustomGeometryParticles = (props) => {
  const { count, shape } = props

  // This reference gives us direct access to our points
  const points = useRef()

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)

    if (shape === 'box') {
      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 2
        const y = (Math.random() - 0.5) * 2
        const z = (Math.random() - 0.5) * 2

        positions.set([x, y, z], i * 3)
      }
    }

    if (shape === 'sphere') {
      const distance = 1

      for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360)
        const phi = THREE.MathUtils.randFloatSpread(360)

        const x = distance * Math.sin(theta) * Math.cos(phi)
        const y = distance * Math.sin(theta) * Math.sin(phi)
        const z = distance * Math.cos(theta)

        positions.set([x, y, z], i * 3)
      }
    }

    return positions
  }, [count, shape])

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
      <pointsMaterial
        size={0.015}
        color="#5786F5"
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

const CustomGeometryParticles2 = (props) => {
  const { count } = props

  // This reference gives us direct access to our points
  const points = useRef()

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const distance = 1

    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)

      const x = distance * Math.sin(theta) * Math.cos(phi)
      const y = distance * Math.sin(theta) * Math.sin(phi)
      const z = distance * Math.cos(theta)

      positions.set([x, y, z], i * 3)
    }

    return positions
  }, [count])

  useFrame((state) => {
    const { clock } = state

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      points.current.geometry.attributes.position.array[i3] +=
        Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01
      points.current.geometry.attributes.position.array[i3 + 1] +=
        Math.cos(clock.elapsedTime + Math.random() * 10) * 0.01
      points.current.geometry.attributes.position.array[i3 + 2] +=
        Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01
    }

    points.current.geometry.attributes.position.needsUpdate = true
  })

const CustomGeometryParticles = (props) => {
  const { count } = props;
  const points = useRef();

  const particlesPosition = useMemo(() => ({
    // We set out positions here as we did before
  )}, [])

  const uniforms = useMemo(() => ({
    uTime: {
      value: 0.0
    },
    // Add any other attributes here
  }), [])

  useFrame((state) => {
    const { clock } = state;

    points.current.material.uniforms.uTime.value = clock.elapsedTime;
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

      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
      {/* <pointsMaterial */}
      {/*   size={0.012} */}
      {/*   color="#5786F5" */}
      {/*   sizeAttenuation */}
      {/*   depthWrite={false} */}
      {/* /> */}
    </points>
  )
}
const Scene = () => {
  return (
    <div className="h-svh w-svw bg-gray-950">
      <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
        <ambientLight intensity={0.5} />
        {/* <BasicParticles /> */}
        {/* <CustomGeometryParticles count={4000} shape="sphere" /> */}
        <CustomGeometryParticles2 count={2000} />
        <OrbitControls autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  )
}

export default Scene
