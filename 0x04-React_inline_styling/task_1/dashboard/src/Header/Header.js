import React from 'react'
import logo from '../assets/holberton_logo.jpg'
import { StyleSheet, css } from 'aphrodite'
export const Header = () => {
  return (
    <div className={css(styles.header)}>
      <img src={logo} alt='holberton logo' width={250} height={250} />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: '250px',
    alignItems: 'center',
  },
  h1: {
    color: '#e12948',
  },
})
