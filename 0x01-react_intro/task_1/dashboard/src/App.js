import logo from './holberton_logo.jpg'
import './App.css'
import { getFooterCopy, getFullYear } from './utils'

function App() {
  return (
    <>
      <div className='App-header'>
        <img src={logo} alt='holberton logo' width={250} height={250} />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label for='email'>
          Email: <input type='email' name='email' />
        </label>{' '}
        <label for='password'>
          Password: <input type='password' name='password' />
        </label>{' '}
        <button>OK</button>
      </div>
      <div className='App-footer'>
        <p>
          <em>
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </em>
        </p>
      </div>
    </>
  )
}

export default App
