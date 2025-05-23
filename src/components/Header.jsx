import reactImg from '../assets/images/react-core-concepts.png'

const buzzWords = ['Fundamental', 'Core', 'Crucial']

function randomBuzz(max) {
  const word = Math.floor(Math.random() * (max + 1))
  return word
}


function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {buzzWords[randomBuzz(buzzWords.length)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header> 
  )
}

export default Header
