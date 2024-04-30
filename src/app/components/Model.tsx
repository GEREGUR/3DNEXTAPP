import {useGLTF} from '@react-three/drei'
import { useRef } from 'react'

useGLTF.preload('/porsche_930_rwb_mekkatrance_35.glb')

export default function Model() {
    const group= useRef(null)
    const {nodes, materials, animations, scene} = useGLTF('/porsche_930_rwb_mekkatrance_35.glb')
    return (
        <group ref={group}>
        <primitive object={scene}/>
    </group>
    )
    
}