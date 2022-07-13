import React from "react"

export const Heading = ({ title }) => {
  return (
    <>
      <h2 className='heading' data-aos='zoom-in-down'>
        {title}
      </h2>
    </>
  )
}
