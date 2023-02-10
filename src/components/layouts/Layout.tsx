import React from 'react'
import Navbar from './Navbar'

function Layout(props : any) {
    

  return (
    <>
        <main>{props.children}</main>
    </>
  )
}

export default Layout