import React from 'react'
import './nav.css'

function Nav() {
  return (
    <div className='nav'>
        <div className='left'>
            <h1>publicapis.</h1>
        </div>
        <div className='right'>
            <form>
            <input className='input' type='search' placeholder='Search...' />
            <input className='button' type='submit' placeholder='Search' />
            </form>
        </div>
    </div>
  )
}

export default Nav