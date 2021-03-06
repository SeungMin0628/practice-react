import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const Text = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.color};
`

const Message = ({ color, text }) =>
  <Container>
    <Text color={color}>
      {text}
    </Text>
  </Container>

Message.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Message
