import styled from "styled-components"

const backgroundColor = `#f2f8ef`

const primaryColor = `#14b9dc`

export const Wrapper = styled.section`
  padding: 4em;
  background: ${backgroundColor};
`

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? primaryColor : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${primaryColor};
  border-radius: 3px;
  width: 100%;
`

export const GoogleButton = styled(Button)`
  color: white;
  border-color: red;
  background: red;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: #f8f0e3;
  border: none;
  border-radius: 3px;
`
