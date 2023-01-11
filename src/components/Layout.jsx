import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar';
import Container from '@mui/material/Container';

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <header>
        <Navbar />
      </header>
      <Container maxWidth="lg">
        <section>
          <main>
            {children}
          </main>
        </section>
      </Container>
    </>
  )
}

export default Layout