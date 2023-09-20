import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Frontened Developer',
          'Software Engineer',
          'Graphic Designer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
