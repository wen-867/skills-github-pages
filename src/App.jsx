
import reactLogo from './assets/react.svg'
import './App.css'
import Quote from './components/Quote'

function App() {

  return (
    <>
      <div>
        <a href="https://zh-hans.react.dev/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Quote />
    </>
  )
}

export default App
