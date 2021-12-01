import styled from "styled-components"

const backgroundColor = `#7e95a0`

const primaryColor = `#14b9dc`

export const Wrapper = styled.section`
  padding: 4em;
  background: ${backgroundColor};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.inputColor || "palevioletred"};
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

  @media (min-width: 768px) {
    width: 250px;
    align-self: center;
  }
  &:hover {
    opacity: 0.9;
  }
`

export const ErrorMessage = styled.h6`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export const GoogleButton = styled(Button)`
  color: white;
  border-color: red;
  background: red;
`

export const LogoutButton = styled(GoogleButton)`
  width: 100%;
  margin: 0;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: #f8f0e3;
  border: none;
  border-radius: 3px;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 500px;
  }
`

export const ModalForm = styled(Form)`
  z-index: 100;
  background: ${backgroundColor};
  width: 50%;
  padding: 2em;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`

export const FullScreen = styled.div`
  width: 100%;
  height: 100vh;
`

export const DashBoardWrapper = styled.div`
  width: 100%;
  padding: 2em;
  background-color: ${backgroundColor};
  height: 100vh;
`
export const Navigation = styled.div`
  width: 100%;
`

export const Modal = styled.div`
  width: 80%;
  z-index: 10;
  position: absolute;
`
