import React from 'react'


export default function Section(props) {
  const { classes } = props
  return (
    <section className={`${classes}`}>
      {props.children}
    </section>
  )
}