import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/button.jsx'
import Input from './components/input.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Input type="text" placeholder={"username"} />
      <Input type="password" placeholder={"password"} />
      <Button buttonText="Login"></Button>
    </div>
  )
}

export default App
