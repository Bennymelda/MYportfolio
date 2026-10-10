import * as THREE from 'three'
import { Float, Html, OrbitControls, Preload, useGLTF, useProgress, useTexture } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Suspense, useEffect, useMemo, useRef } from "react"

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
  texture: string
  position: [number, number, number]
  scale: number
  floatSpeed?: number
}

function TechIcon({
  texture,
  position,
  scale,
  floatSpeed = 2,
}: TechIconProps) {
  const textureMap = useTexture(texture)
  const groupRef = useRef<THREE.Group>(null)

  const aspect = useMemo(() => {
    const image = (
      textureMap as THREE.Texture & {
        image?: { width?: number; height?: number }
      }
    ).image

    if (image?.width && image?.height) {
      return image.width / image.height
    }

    return 1
  }, [textureMap])

  const iconWidth = scale * (aspect >= 1 ? 1 : aspect)
  const iconHeight = scale * (aspect >= 1 ? 1 / aspect : 1)

  useFrame(({ camera }) => {
    if (groupRef.current) {
      groupRef.current.quaternion.copy(camera.quaternion)
    }
  })

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
          <edgesGeometry args={[new THREE.PlaneGeometry(1, 1, 1, 1)]} />
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
  )
}

function TechIconsGroup() {
  const groupRef = useRef<THREE.Group>(null)
  const { size } = useThree()

  const isMobile = size.width < 640
  const isTablet = size.width >= 640 && size.width < 1024
  const radius = isMobile ? 1.85 : isTablet ? 2.15 : 2.4
  const iconScale = isMobile ? 0.32 : isTablet ? 0.42 : 0.5

  const icons = [
    { texture: "/javascript.svg" },
    { texture: "/typescript.svg" },
    { texture: "/react.svg" },
    { texture: "/css.svg" },
    { texture: "/tailwind.svg" },
  ]

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {icons.map((icon, index) => {
        const angle = (index / icons.length) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = Math.sin(angle * 2) * 0.18

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

// Generate rounded rectangle geometry matching the iPhone 16 Pro Max curved display
function createIphoneScreenGeometry(width: number, height: number, radius: number): THREE.ShapeGeometry {
  const shape = new THREE.Shape()
  const x = -width / 2
  const y = -height / 2

  shape.moveTo(x + radius, y)
  shape.lineTo(x + width - radius, y)
  shape.quadraticCurveTo(x + width, y, x + width, y + radius)
  shape.lineTo(x + width, y + height - radius)
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  shape.lineTo(x + radius, y + height)
  shape.quadraticCurveTo(x, y + height, x, y + height - radius)
  shape.lineTo(x, y + radius)
  shape.quadraticCurveTo(x, y, x + radius, y)

  const geometry = new THREE.ShapeGeometry(shape, 24)

  // Map normalized [0, 1] UVs across the plane
  const pos = geometry.attributes.position
  const uvs = new Float32Array(pos.count * 2)
  for (let i = 0; i < pos.count; i++) {
    const px = pos.getX(i)
    const py = pos.getY(i)
    uvs[i * 2] = (px - x) / width
    uvs[i * 2 + 1] = (py - y) / height
  }
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
  geometry.computeVertexNormals()

  return geometry
}

function CenteredModel() {
  const { scene, materials } = useGLTF("/scene.gltf")
  const { viewport, size } = useThree()
  const websiteTexture = useTexture("/portfolio1.png")

  // 1. Reset original iPhone chassis mesh & materials so the 3D titanium body & camera bump remain intact
  useEffect(() => {
    const chassisMesh = scene.getObjectByName("Object_4") as THREE.Mesh | undefined
    if (chassisMesh) {
      chassisMesh.scale.set(1, 1, 1)
      chassisMesh.position.set(0, 0, 0)
      chassisMesh.rotation.set(0, 0, 0)
      if (materials && materials["ASSET_MAT_MR.002"]) {
        chassisMesh.material = materials["ASSET_MAT_MR.002"]
      }
    }
  }, [scene, materials])

  // 2. Generate an authentic, pixel-perfect mobile screen canvas texture with Dynamic Island & iOS Status Bar
  const screenTexture = useMemo(() => {
    const img = (websiteTexture as THREE.Texture).image as HTMLImageElement | undefined
    if (!img || !img.width || !img.height) {
      return websiteTexture
    }

    const canvas = document.createElement("canvas")
    // Native high-DPI aspect ratio for iPhone display (~19.5:9)
    canvas.width = 1170
    canvas.height = 2516
    const ctx = canvas.getContext("2d")
    if (!ctx) return websiteTexture

    // OLED black background
    ctx.fillStyle = "#0c0d0e"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Fit screenshot proportionally across the screen width (no half-cut or stretched UI)
    const targetW = canvas.width
    const isOriginalPortfolio = img.width === 487 && img.height === 608
    const srcH = isOriginalPortfolio ? 545 : img.height // Cleanly trims accidental desktop watermark if present
    const targetH = targetW * (srcH / img.width)

    // Position screenshot directly below the iOS status bar
    const startY = 85
    ctx.drawImage(img, 0, 0, img.width, srcH, 0, startY, targetW, targetH)

    // Authentic Dynamic Island pill
    const pillW = 270
    const pillH = 74
    const pillX = (canvas.width - pillW) / 2
    const pillY = 32
    ctx.fillStyle = "#000000"
    ctx.beginPath()
    ctx.roundRect(pillX, pillY, pillW, pillH, pillH / 2)
    ctx.fill()

    // Dynamic Island camera sensor dot
    ctx.fillStyle = "#0d1b2a"
    ctx.beginPath()
    ctx.arc(pillX + pillW - 48, pillY + pillH / 2, 16, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = "#1e3a5f"
    ctx.beginPath()
    ctx.arc(pillX + pillW - 48, pillY + pillH / 2, 8, 0, Math.PI * 2)
    ctx.fill()

    // iOS Status Bar - Time (9:41)
    ctx.font = '600 36px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
    ctx.fillStyle = "#ffffff"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("9:41", 160, 68)

    // iOS Status Bar - Battery Outline & Level
    const batX = canvas.width - 190
    const batY = 54
    const batW = 56
    const batH = 28
    ctx.strokeStyle = "#ffffff"
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.roundRect(batX, batY, batW, batH, 7)
    ctx.stroke()
    ctx.fillStyle = "#ffffff"
    ctx.beginPath()
    ctx.roundRect(batX + 4, batY + 4, batW - 8, batH - 8, 4)
    ctx.fill()
    ctx.fillRect(batX + batW + 2, batY + 8, 4, 12)

    // iOS Status Bar - Cellular signal bars
    for (let i = 0; i < 4; i++) {
      const barH = 8 + i * 5
      ctx.fillRect(batX - 70 + i * 7, batY + batH - barH - 2, 4, barH)
    }

    // iOS Home Indicator bar at the bottom
    const homeW = 340
    const homeH = 10
    const homeX = (canvas.width - homeW) / 2
    const homeY = canvas.height - 40
    ctx.fillStyle = "rgba(255, 255, 255, 0.45)"
    ctx.beginPath()
    ctx.roundRect(homeX, homeY, homeW, homeH, 5)
    ctx.fill()

    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.needsUpdate = true
    return texture
  }, [websiteTexture])

  // 3. Attach dedicated screen display mesh to the iPhone scene graph
  useEffect(() => {
    const parentNode = scene.getObjectByName("ASSET.002_0") || scene

    // Avoid duplicate meshes during hot reloads
    const existing = scene.getObjectByName("IphoneScreenMesh")
    if (existing) {
      parentNode.remove(existing)
    }

    // Rounded screen geometry matching iPhone display area (width: 0.073, height: 0.157, radius: 0.0075)
    const screenGeometry = createIphoneScreenGeometry(0.073, 0.157, 0.0075)

    const screenMaterial = new THREE.MeshStandardMaterial({
      map: screenTexture,
      roughness: 0.18,
      metalness: 0.05,
      toneMapped: false,
      side: THREE.FrontSide,
    })

    const screenMesh = new THREE.Mesh(screenGeometry, screenMaterial)
    screenMesh.name = "IphoneScreenMesh"
    // Positioned directly on the front display surface (z = 0.00353)
    screenMesh.position.set(0, 0.0815, 0.00353)

    parentNode.add(screenMesh)

    return () => {
      parentNode.remove(screenMesh)
      screenGeometry.dispose()
      screenMaterial.dispose()
    }
  }, [scene, screenTexture])

  // 4. Auto-center 3D model bounding box at (0, 0, 0)
  useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.sub(center)
  }, [scene])

  // 5. Responsive scaling calculation to ensure prominent, balanced display on all screens
  const phoneModelHeight = 0.163
  const phoneModelWidth = 0.0788
  const phoneAspect = phoneModelWidth / phoneModelHeight

  const isMobile = size.width < 640
  const isTablet = size.width >= 640 && size.width < 1024

  const maxHFromHeight = viewport.height * (isMobile ? 0.65 : isTablet ? 0.70 : 0.72)
  const maxHFromWidth = (viewport.width * (isMobile ? 0.52 : 0.60)) / phoneAspect
  const targetHeight = Math.min(maxHFromHeight, maxHFromWidth)
  const responsiveScale = targetHeight / phoneModelHeight

  return (
    <group position={[0, 0, 0]}>
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
          enableDamping={true}
          dampingFactor={0.05}
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