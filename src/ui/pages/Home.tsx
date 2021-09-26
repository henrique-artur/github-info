import { IoMdExit } from 'react-icons/io'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import '../styles/pages/Home.css'

function Home(): JSX.Element {
  return (
    <div className="container">
      <div className="header">
        <strong>NOME DO CARA</strong>
        <div className="exit">
          <p>Sair</p>
          <IoMdExit size={23}/>
        </div>
      </div>
      <div className="imgProfile">
        <img src="https://avatars.githubusercontent.com/u/61638364?s=400&u=e99bcba64712547823c043d4d3c9b74ca264dd66&v=4" alt="foto de perfil" />
      </div>

      <Subtitle label="Nome do Cara"/>
      <Text label="henrique-artur@hotmail.com"/>
      <Text label="Arapiraca/AL"/>
    </div>
  )
}

export default Home
