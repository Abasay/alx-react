import React from 'react'
import { BodySection } from './BodySection'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

export const BodySectionWithMarginBottom = ({ ...children }) => {
  return (
    <div className={css(styles.marginBody)}>
      <BodySection {...children} />
    </div>
  )
}

BodySectionWithMarginBottom.propTypes = {
  ...BodySection.propTypes,
}

const styles = StyleSheet.create({
  marginBody: {
    marginBottom: '40px',
  },
})
