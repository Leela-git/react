import React from 'react'
import { DiAndroid, DiCss3, DiHtml5, DiJava, DiJavascript, DiNodejs, DiPython, DiReact } from 'react-icons/di'

const Tech = () => {
  return (
    <div className='space-y-5'>
      <h1 className='text-4xl font-bold text-center'>Technologies I use</h1>
      <div className="dev-icons  grid grid-cols-4 justify-items-center gap-y-4 ">

        <DiAndroid size={150} />
        <DiPython size={150} />
        <DiCss3 size={150} />
        <DiReact size={150} className='animate-bounce hover:text-red-800' />
        <DiHtml5 size={150} />
        <DiJava size={150} />
        <DiJavascript size={150} className='animate-pulse hover:text-yellow-700' />
        <DiNodejs size={150} className='hover:scale-110 hover:text-pink-700 transition-all' />

      </div>
    </div>
  )
}

export default Tech
