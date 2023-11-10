import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export const Login = () => {
  return (
    <>
      <div className={css(styles.marginLogin)} data-testid='app-body'>
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

const styles = StyleSheet.create({
  marginLogin: {
    margin: '30px',
  },
})
