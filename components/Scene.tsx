/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    'https://prod.spline.design/6zQMLAZSE3ep9D6B/scene.splinecode'
  )
  return (
    <>
      <color attach="background" args={['#5d3183']} />
      <group {...props} dispose={null}>
        <group
          name="Hoverboard"
          position={[4.13, -0.09, 1.75]}
          rotation={[-2.87, -0.29, 0.37]}
        >
          <group
            name="BoosterFrontLamp"
            position={[-4.01, 4.71, 74.74]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              name="Lathe 2"
              geometry={nodes['Lathe 2'].geometry}
              material={materials['Lathe 2 Material']}
              castShadow
              receiveShadow
              position={[0.1, -11.19, -0.26]}
              scale={[0.59, 0.34, 0.59]}
            />
            <mesh
              name="Lathe"
              geometry={nodes.Lathe.geometry}
              material={materials['Lathe Material']}
              castShadow
              receiveShadow
              position={[0.1, -11.19, -0.26]}
              scale={[0.59, 0.34, 0.59]}
            />
            <pointLight
              name="BoosterLamp"
              castShadow
              intensity={22}
              decay={5}
              distance={123}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={100}
              shadow-camera-far={2500}
              position={[0, -24.3, -0.13]}
              rotation={[Math.PI, 0, 0]}
            />
          </group>
          <group
            name="BoosterBackLamp"
            position={[-4.01, 4.71, -78.04]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              name="Lathe 21"
              geometry={nodes['Lathe 21'].geometry}
              material={materials['Lathe 21 Material']}
              castShadow
              receiveShadow
              position={[0.1, -11.19, -0.26]}
              scale={[0.59, 0.34, 0.59]}
            />
            <mesh
              name="Lathe1"
              geometry={nodes.Lathe1.geometry}
              material={materials['Lathe1 Material']}
              castShadow
              receiveShadow
              position={[0.1, -11.19, -0.26]}
              scale={[0.59, 0.34, 0.59]}
            />
            <pointLight
              name="BoosterLamp1"
              castShadow
              intensity={22}
              decay={5}
              distance={123}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={100}
              shadow-camera-far={2500}
              position={[0, -24.3, -0.13]}
              rotation={[Math.PI, 0, 0]}
            />
          </group>
          <mesh
            name="BoardGeometry"
            geometry={nodes.BoardGeometry.geometry}
            material={materials['BoardGeometry Material']}
            castShadow
            receiveShadow
            position={[0, -8.83, 0]}
            rotation={[0, 0, Math.PI]}
          />
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={1.1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={1}
          shadow-camera-far={2500}
          shadow-camera-left={-1250}
          shadow-camera-right={1250}
          shadow-camera-top={1250}
          shadow-camera-bottom={-1250}
          color="#f9eefe"
          position={[386.82, 427.41, 241.13]}
        />
        <OrthographicCamera
          name="Personal Camera"
          makeDefault={true}
          zoom={1.85}
          far={100000}
          near={-100000}
          position={[117.96, 1003.08, -25.12]}
          rotation={[-1.57, 0, 0]}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.41}
          color="#a3e1f5"
          position={[0, 1, 0]}
        />
      </group>
    </>
  )
}