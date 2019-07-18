import React from "react"
import styled from "styled-components"

import Image from "../components/image"

const Container = styled.footer`
  margin-top: 3.45rem;
`

const ImgContainer = styled.div`
  max-width: 300px;
`

const Footer = () => (
  <Container>
    © {new Date().getFullYear()}, provided by
    <a href="https://www.asiance.com/">
      <ImgContainer>
        <Image />
      </ImgContainer>
    </a>
  </Container>
)

export default Footer
