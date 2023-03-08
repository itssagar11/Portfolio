import {Suspense,useEffect,useState} from 'react'
import { Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF} from '@react-three/drei';
// import CanvasLoader from '../Loader';

const computer =useGLTF('./desktop_pc/scene.gltf');

const Computers = () => {
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor='black'></hemisphereLight>
      <pointLight intensity={1}/>
      <primitive
      object={computer.scene}
      />
    </mesh>
  )
}
const ComputersCanvas=()=>{
  return(
    <Canvas
    frameLoop='demand'
    shadows
    camera={{position:[20, 3, 5],fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
<Suspense fallback={<CanvasLoader />}>
  <OrbitControls enableZoom={true}  maxPolarAngle={Math.Pi / 2}  minPolarAngle={Math.PI / 2}/>
  <Computers />
</Suspense>
<Preload all />
    </Canvas>
  )
}
export default ComputersCanvas