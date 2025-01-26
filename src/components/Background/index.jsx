import { Canvas } from '@react-three/fiber'
import style from './style.module.scss'
import classNames from 'classnames'
import { Cloud, Stars } from '@react-three/drei'

const Background = () => {

  return (
    <div className={classNames(style.bgspace)}>
      <Canvas resize={{ scroll: false }}>

        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 100]} />
        <color attach="background" args={['#000000']} />
        <Cloud
          seed={0}
          segments={10}
          bounds={[5, 5, 1]}
          scale={[1, 1, 1]}
          concentrate='outside'
          fade={0.1}
          opacity={0.2}
          speed={0.1}
          color={"#8888ff"}
        />
        <Stars radius={50} depth={10} count={500} factor={6} saturation={1} fade />
      </Canvas>
    </div>
  )
}

export default Background