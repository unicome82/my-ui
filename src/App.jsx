import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ padding: 32 }}>
        <h1>UI 패키지 사이트</h1>
        <p>React 시작용 예제</p>
        <button onClick={() => setCount(c => c + 1)}>클릭 {count}</button>
      </div>
    </>
  )
}

export default App
