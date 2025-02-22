import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Container } from "./styles/Container.styled"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
