import React from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei'

function App() {
  return (
    <div className="h-screen w-full bg-slate-900 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">
        PORTFOLIO <span className="text-blue-500">3D</span>
      </h1>
      
      <div className="h-[500px] w-full max-w-2xl cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} />
          
          <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
              color="#3b82f6"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
          
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <p className="text-slate-400 font-medium animate-pulse">
        Touchez la sphère pour interagir
      </p>
    </div>
  )
}

export default App