import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
{/* <div className="absolute top-28 left-0 right-0 flex items-center">
  Hi 
</div> */}
const Home = () => {
  return (
    <selection className="w-full h-screen relative">
      <Canvas className='w-full h-screen bg-transparent'
      camera={{ near:0.1, far:1000 }}
      >
        <Suspense fallback={<Loader />}>
          
        </Suspense>
      </Canvas>
    </selection>
  )
}

export default Home