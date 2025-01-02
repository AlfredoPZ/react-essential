import './App.css'
import { ControlledComponent } from './components/ControlledComponent'
import CounterClass from './components/CounterClass'
import { CounterFunctional } from './components/CounterFunctional'

function App() {

  const handleClicked = () => {
    alert('Button clicked');
  }


  return (
    <>
      <CounterClass title={"Counter from props class components"} />
      <CounterFunctional title={"Counter from props"} initialCounter={50} />
      <ControlledComponent title={"Hello"} onClick={handleClicked}/>
    </>
  )
}

export default App
