import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group } from "three";

useGLTF.preload("/robot_playground.glb");

export default function Model() {
    const group = useRef(null);
    const { nodes, materials, animations, scene } = useGLTF("/robot_playground.glb");
    const { actions } = useAnimations(animations, scene);
    const [animationTime, setAnimationTime] = useState(0); 

    useEffect(() => {
        if (actions && actions["Experiment"]) {
            actions["Experiment"].play(); 
        }
    }, [actions]);

    useFrame(() => {
        if (actions && actions["Experiment"]) {
            const startTime = 2; 
            const endTime = 4; 
            const duration = actions["Experiment"].getClip().duration; 

            let currentTime = animationTime + 0.01; 
            if (currentTime > endTime) {
                currentTime = startTime;
            }
            actions["Experiment"].time = Math.max(startTime, Math.min(currentTime, endTime));
            setAnimationTime(currentTime);
        }
    });

    return (
        <group ref={group} scale={[2, 2, 2]} position={[0, -1.5, 0]}>
            <primitive object={scene} />
        </group>
    );
}
