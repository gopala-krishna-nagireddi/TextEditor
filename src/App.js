import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  BodyContainer,
  TextAreaImgContainer,
  Heading,
  TextAreaImg,
  TextAreaContainer,
  CustomButtonContainer,
  CustomButton,
  TextArea,
} from './styledComponents'

import './App.css'

// Replace your code here
class App extends Component {
  state = {bold: false, italic: false, underline: false}

  addBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  addItalic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  addUnderline = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  render() {
    const {bold, italic, underline} = this.state
    return (
      <AppContainer>
        <BodyContainer>
          <TextAreaImgContainer>
            <Heading>Text Editor</Heading>
            <TextAreaImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextAreaImgContainer>
          <TextAreaContainer>
            <CustomButtonContainer>
              <li>
                <CustomButton
                  className="style-btn"
                  type="button"
                  data-testid="bold"
                  activeTab={bold}
                  onClick={this.addBold}
                >
                  <VscBold size={25} />
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  className="style-btn"
                  type="button"
                  data-testid="italic"
                  activeTab={italic}
                  onClick={this.addItalic}
                >
                  <GoItalic size={25} />
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  className="style-btn"
                  type="button"
                  data-testid="underline"
                  activeTab={underline}
                  onClick={this.addUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </CustomButton>
              </li>
            </CustomButtonContainer>
            <TextArea
              className="text-area"
              rows="20"
              bold={bold}
              italic={italic}
              underline={underline}
            />
          </TextAreaContainer>
        </BodyContainer>
      </AppContainer>
    )
  }
}

export default App
