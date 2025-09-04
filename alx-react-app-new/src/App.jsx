import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile';

// Task 1 component
import WelcomeMessage from './components/WelcomeMessage';

// Task 2 components
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Default Vite + React setup */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Task 1: WelcomeMessage */}
      <WelcomeMessage />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Task 2: Header, MainContent, Footer */}
      <Header />
      <MainContent />
      <Footer />

  {/* Task 3: UserProfile with props */}
  <UserProfile
    name="Alice"
    age="25"
    bio="Loves hiking and photography"
  />
  <Counter />

    </>
  )
}

export default App;
