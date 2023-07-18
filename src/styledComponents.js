import Styled from 'styled-components'

export const AppContainer = Styled.div`
    background-color: #25262c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BodyContainer = Styled.div`
    background-color: #1b1c22;
  display: flex;
`
export const TextAreaImgContainer = Styled.div`
    display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 45%;
  padding: 20px;
`

export const Heading = Styled.h1`
    margin: 0;
  color: #ffffff;
`

export const TextAreaImg = Styled.img`
    width: 100%;
`
export const TextAreaContainer = Styled.div`
    background-color: #25262c;
  width: 55%;
  margin: 20px;
  border: 1px solid #334155;
  border-radius: 12px;
`

export const TextArea = Styled.textarea`
    color: #ffffff;
    text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
    font-style: ${props => (props.italic ? 'italic' : 'normal')};
  font-size: 16px;
  width: 100%;
  padding: 16px;
  background-color: transparent;
  border: none;
  outline: none;
`

export const CustomButtonContainer = Styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 16px;
    border-bottom: 1px solid #334155;
    display: flex;
`

export const CustomButton = Styled.button`
    color: ${props => (props.activeTab ? '#faff00' : '#f1f5f9')};
    border: none;
    background-color: transparent;
    outline:none;
    cursor:pointer;
    margin-right: 10px;
`
