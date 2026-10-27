import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    username: "Samata",
    age : 20
  }

  return (
    <>
      <h3 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h3>
      <Card username="Sammy" type="Limited Edition"/>
      <Card username="Samata" type="Normal User" />
    </>
  )
}

export default App