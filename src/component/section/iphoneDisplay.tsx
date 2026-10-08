import * as THREE from 'three'
import { Float, Html, OrbitControls, Preload, useGLTF, useProgress, useTexture } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Suspense, useMemo, useRef } from "react"

function CanvasLoader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-neutral-400 border-t-amber-500 rounded-full animate-spin"></div>
        <p className="mt-2 text-xs font-semibold text-neutral-400 font-mono">
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  )
}

interface TechIconProps {
  texture: string;
  position: [number, number, number];
  scale: number;
  floatSpeed?: number;
}

function TechIcon({
  texture,
  position,
  scale,
  floatSpeed = 2,
}: TechIconProps) {
  const textureMap = useTexture(texture);
  const groupRef = useRef<THREE.Group>(null);

  const aspect = useMemo(() => {
    if (
      textureMap.image &&
      textureMap.image.width &&
      textureMap.image.height
    ) {
      return textureMap.image.width / textureMap.image.height;
    }

    return 1;
  }, [textureMap]);

  const iconWidth = scale * (aspect >= 1 ? 1 : aspect);
  const iconHeight = scale * (aspect >= 1 ? 1 / aspect : 1);

  useFrame(({ camera }) => {
    if (groupRef.current) {
      groupRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <Float
      speed={floatSpeed}
      rotationIntensity={0.15}
      floatIntensity={0.2}
    >
      <group ref={groupRef} position={position}>

        {/* GLASS CARD */}
        <mesh>
          <planeGeometry args={[scale * 1.8, scale * 1.8]} />

          <meshPhysicalMaterial
            color="#ffffff"
            transparent
            opacity={0.08}
            roughness={0.15}
            metalness={0.2}
            transmission={0.1}
            thickness={0.2}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>

        {/* CARD BORDER */}
        <lineSegments scale={scale * 1.8}>
          <edgesGeometry
            args={[new THREE.PlaneGeometry(1, 1, 1, 1)]}
          />
          <lineBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.18}
          />
        </lineSegments>

        {/* SVG ICON */}
        <mesh position={[0, 0, 0.02]}>
          <planeGeometry args={[iconWidth, iconHeight]} />

          <meshBasicMaterial
            map={textureMap}
            transparent
            alphaTest={0.1}
            depthTest
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>

      </group>
    </Float>
  );
}


function TechIconsGroup() {
  const groupRef = useRef<THREE.Group>(null)
  const { size } = useThree()

  // Adjust orbital radius and scale relative to screen size
  const isMobile = size.width < 640
  const isTablet = size.width >= 640 && size.width < 1024

 const radius = isMobile ? 1.2 : isTablet ? 2.4 : 2.5
  const iconScale = isMobile ? 0.35 : isTablet ? 0.45 : 0.55

  const icons = [
    { texture: "/javascript.svg" },
    { texture: "/typescript.svg" },
    { texture: "/react.svg" },
    { texture: "/css.svg" },
    { texture: "/tailwind.svg" },
  ]

  // Continuous Y-axis orbit rotation around origin (0, 0, 0)
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.6
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {icons.map((icon, index) => {
        const angle = (index / icons.length) * Math.PI * 2

        // 3D Orbit coordinates around origin
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = Math.sin(angle * 2) * 0.15 // Gentle wave movement in vertical axis

        return (
          <TechIcon
            key={index}
            texture={icon.texture}
            position={[x, y, z]}
            scale={iconScale}
          />
        )
      })}
    </group>
  )
}

function CenteredModel() {
  const { scene } = useGLTF("/scene.gltf")
  const { viewport, size } = useThree()

  const screen = scene.getObjectByName("Object_4")
  const websiteTexture = useTexture("/portfolio1.png")
 const screenTexture = websiteTexture.clone()
screenTexture.flipY = false
screenTexture.needsUpdate = true
console.log("SCREEN:", screen)
console.log("SCREEN GEOMETRY:", screen?.geometry)
console.log("SCREEN UV:", screen?.geometry.attributes.uv)


if (screen && screen instanceof THREE.Mesh) {
  screen.material = new THREE.MeshBasicMaterial({
    map: websiteTexture,
  })
}
  // Auto-center the loaded GLTF model's bounding box at (0, 0, 0)
  useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.sub(center)
  }, [scene])

  const isMobile = size.width < 640
  const isTablet = size.width >= 640 && size.width < 1024


  
 const responsiveScale = isMobile
  ? Math.max(viewport.width * 1.8, 1.8)
  : isTablet
  ? viewport.width * 1.9
  : viewport.width * 2.2;
    const modelY = isMobile
  ? 0
  : isTablet
  ? -0.2
  : -0.9

  return (
    <group position={[0, modelY, 0]}>
      <hemisphereLight intensity={2} groundColor="white" />
      <pointLight intensity={6} position={[10, 10, 10]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow
      />
      <primitive
        object={scene}
        scale={responsiveScale}
      />
    </group>
  )
}

useGLTF.preload("/scene.gltf")

export default function ComputerCanvas() {
  return (
    <div className="w-full h-full min-h-[350px] relative select-none">
      <Canvas
        shadows
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
        dpr={[1, 2]}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />

        <Suspense fallback={<CanvasLoader />}>
          <CenteredModel />
          <TechIconsGroup />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}