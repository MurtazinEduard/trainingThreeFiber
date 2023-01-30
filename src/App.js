import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import style from './App.module.sass';
import Experience from './components/Experience';

function App() {
  return (
    <div className={style.App}>
      <Canvas >
        <color attach={'background'} args={['#101010']}/>
        <fog attach="fog" args={["#101010", 10, 20]} />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
