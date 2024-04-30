'use client'

import {Canvas} from '@react-three/fiber'
import Model from './Model'
import { Suspense } from 'react'
import { useProgress, Html } from '@react-three/drei'


function Loader(){
    const {progress, active} = useProgress()
    return <Html center>{progress.toFixed(1)}%Loaded</Html>

}


export default function Scene() {
    return(
        <Canvas gl={{antialias: true}}
        dpr={[1, 1.5]}
        className='relative h-svh'
        >
            <directionalLight position={[5, 5, 5]} intensity={4} 
           
            />
            <Suspense fallback={<Loader />}>
               <Model />
            </Suspense>
        </Canvas>
    )
}