import React from 'react'

const Displaysec = () => {
  return (
    <div className='grid grid-cols-2 items-center sm:grid-cols-1 sm:mb-7'>
      <div className="dis-img h-[400px]">
        <dotlottie-player src="https://lottie.host/24590414-81cb-4e76-9ff9-154aa1cca69d/sUoD2tUtFl.json" background="transparent" speed="1" loop autoplay></ dotlottie-player>

      </div>
      <div className="dis-info space-y-2 sm: text-center sm:px-4">
        <h1 className='text-2xl font-bold'>Hi, I am John</h1>
        <p className='text-pink-700 italic'>some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>

      </div>
    </div>
  )
}

export default Displaysec
