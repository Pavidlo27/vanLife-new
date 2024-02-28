import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import GoToTop from './GoToTop'

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col font-body'>
      <Header />
      <main className='mb-20'>
        <Outlet />
      </main>
      <Footer />
      <GoToTop />
    </div>
  )
}

export default Layout