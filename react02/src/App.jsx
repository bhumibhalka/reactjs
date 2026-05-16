import { lazy, Suspense, useEffect, useState } from 'react'
import './App.css'
import { Minus, Plus } from 'lucide-react/dist/lucide-react'
// import Lazy from './Lazy'

const Lazy = lazy(()=> import('./Lazy'))

function App() {
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count")
    return saved !== null ? Number(saved) : 0
  })

  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])

  return (

    <>
   
   <button onClick={()=> setLoading(true)}>Click</button>
 {
  loading && (
       <Suspense  fallback={<h3>Loading...</h3>}>
   <Lazy />
   </Suspense>
  )
 }

    <div>
      <button onClick={() => setCount(count + 1)}>
        <Plus />
      </button>

      <p>{count}</p>

      <button onClick={() => {
        if (count > 0) setCount(count - 1)
      }}>
        <Minus />
      </button>
    </div>
    </>
  )
}

export default App

