import React from 'react'

const Header = ({category , title}) => {
  return (
    <div className='mt-10'>
      <p className='text-white text-2xl'>
        {category}
      </p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900 mb-10'>
        {title}
      </p>
    </div>
  )
}

export default Header
