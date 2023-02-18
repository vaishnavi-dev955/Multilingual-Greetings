import {Component} from 'react'
import LanguageButtonItem from './components/LanguageButtonItem'
import ImageItem from './components/ImageItem'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeButtonText: languageGreetingsList[0].buttonText}

  GettingFilteredImage = () => {
    const {activeButtonText} = this.state
    const FilteredImage = languageGreetingsList.filter(
      eachItem => eachItem.buttonText === activeButtonText,
    )
    return FilteredImage
  }

  onClickUpdatingImage = buttonText => {
    this.setState({activeButtonText: buttonText})
  }

  render() {
    const {activeButtonText} = this.state
    const FilteredImageList = this.GettingFilteredImage()
    return (
      <div className="container1">
        <h1>Multilingual Greetings</h1>
        <ul className="buttons-container">
          {languageGreetingsList.map(eachItem => (
            <LanguageButtonItem
              ButtonItemData={eachItem}
              key={eachItem.id}
              onClickUpdatingImage={this.onClickUpdatingImage}
              isActiveButton={eachItem.buttonText === activeButtonText}
            />
          ))}
        </ul>
        <ul className="Images-container">
          {FilteredImageList.map(eachItem => (
            <ImageItem ImageItemData={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
