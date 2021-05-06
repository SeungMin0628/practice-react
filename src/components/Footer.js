import React from 'react'
import styled from 'styled-components'

const SFooter = styled.footer`
  color: white;
  width: calc(100vw - 40px);
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid white;
  margin: 0 20px;
`;

const Label = styled.span``

const Link = styled.a`
  color: #3498db;
  font-weight: bold;

  &:hover {
    filter: brightness(1.3);
  }
`

const Footer = () =>
  <SFooter>
    <Label>
      Created by{" "}
      <Link href="https://github.com/SeungMin0628/practice-react" target="_target">
        seungmin
      </Link>
    </Label>
  </SFooter>

export default Footer
