import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'; 

useGLTF.preload('/porsche_930_rwb_mekkatrance_35.glb');

export default function Model(): JSX.Element {
    const group = useRef<THREE.Group>(null); // Specify the type of ref
    const { scene } = useGLTF('/porsche_930_rwb_mekkatrance_35.glb');

    // Use useFrame hook to update rotation on each frame
    useFrame(() => {
        if (group.current) {
            // Update rotation on x-axis
            group.current.rotation.y += 0.01; // Adjust the speed as needed
        }
    });

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    );
}
