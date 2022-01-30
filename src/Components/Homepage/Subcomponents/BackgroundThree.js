import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import "./BackgroundThree.css"

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  
  const cursor = {
    x: 0,
    y: 0
  }


  function Model(props){

    const { gl, viewport } = useThree()

    gl.setPixelRatio(window.devicePixelRatio)
    
    const mesh = useRef()

    const simpleKeyLightContainer = useGLTF("./models/simpleKeyLight.gltf")
    const doubleKeyLightContainer = useGLTF("./models/doubleKeyLight.gltf")
    const simpleKeyDarkContainer = useGLTF("./models/simpleKeyDark.gltf")
    const doubleKeyDarkContainer = useGLTF("./models/doubleKeyDark.gltf")
    const heartLightContainer = useGLTF("./models/heartLight.gltf")
    const heartDarkContainer = useGLTF("./models/heartDark.gltf")


    let objectGeometry
    let objectMaterial

    if(props.type===0){
        objectGeometry = doubleKeyLightContainer.nodes.doubleKey.geometry
        objectMaterial = doubleKeyLightContainer.materials.doubleKeyMaterial
      }else if(props.type===1){
        objectGeometry = simpleKeyLightContainer.nodes.simpleKey.geometry
        objectMaterial = simpleKeyLightContainer.materials.simpleKeyMaterial
      }else if(props.type===2){
        objectGeometry = simpleKeyDarkContainer.nodes.simpleKey.geometry
        objectMaterial = simpleKeyDarkContainer.materials.simpleKeyMaterialDark
      }else if(props.type===3){
        objectGeometry = doubleKeyDarkContainer.nodes.doubleKey.geometry
        objectMaterial = doubleKeyDarkContainer.materials.doubleKeyMaterialDark
      }else if(props.type===4){
        objectGeometry = heartLightContainer.nodes.Cube.geometry
        objectMaterial = heartLightContainer.materials.HeartMaterialLight
      }else if(props.type===5){
        objectGeometry = heartDarkContainer.nodes.Cube.geometry
        objectMaterial = heartDarkContainer.materials.HeartMaterialDark
      }

      useFrame(()=>{
        mesh.current.rotation.y+=0.004
        mesh.current.position.z+=0.001 
      })
      
      
      return (
        <group
          {...props}
          dispose={null}
          
        >
            <mesh
               ref={mesh}
               geometry={objectGeometry}
               material={objectMaterial}
               
            />
        </group>
      );
  }

useGLTF.preload("./models/simpleKeyLight.gltf")
useGLTF.preload("./models/doubleKeyLight.gltf")
useGLTF.preload("./models/simpleKeyDark.gltf")
useGLTF.preload("./models/doubleKeyDark.gltf")
useGLTF.preload("./models/heartLight.gltf")
useGLTF.preload("./models/heartDark.gltf")


function Camera(props){
    const camera = useRef()
  
    window.addEventListener("mousemove", (event) => {
      cursor.x = event.clientX / sizes.width - 0.5;
      cursor.y = event.clientY / sizes.height - 0.5;
    })
  
    useFrame(()=>{
      camera.current.lookAt(cursor.x*0.05,-cursor.y*0.05,0)
    })
  
  
    return(
      <PerspectiveCamera
        {...props}
        ref={camera}
        />
    )
  }

  

function BackgroundThree(){

    

    let modelstable = []

    for(let i=0; i<150;i++){
        modelstable[i] = {
          id:i,
          x:(Math.random()-0.5)*30,
          y:(Math.random()-0.63)*14,
          z:(Math.random()-2)*4,
          type:Math.round(Math.random()*6-0.5),
          rotation:{x:Math.random()/4,y:Math.random()*Math.PI*2,z:Math.random()/4},
          scale:Math.random()/4
        }
        
    }

    let modelsMap = modelstable.map(modelTable=>(
        <Model key={modelTable.id} position={[modelTable.x,modelTable.y,modelTable.z]} type={modelTable.type} rotation={[modelTable.rotation.x,modelTable.rotation.y,modelTable.rotation.z]} scale={[modelTable.scale,modelTable.scale, modelTable.scale]}/>
      ))


    return(
        <Canvas>
            <ambientLight color="white" intensity={0.6} />
            <pointLight position={[10, 10, 10]} />
            
            <Camera
                makeDefault
                position={[0,0,5]}
                aspect={sizes.width/sizes.height}
                fov={75}
                near={1}
                far={100}
            />
            <Suspense fallback={null}>
                {modelsMap}
            </Suspense>
        </Canvas>
    )
}

export default BackgroundThree;