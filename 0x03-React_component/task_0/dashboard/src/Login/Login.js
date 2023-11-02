import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <>
      <div className='App-body' data-testid='app-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>
          Email: <input type='email' name='email' />
        </label>{' '}
        <label htmlFor='password'>
          Password: <input type='password' name='password' />
        </label>{' '}
        <button>OK</button>
      </div>
    </>
  )
}
