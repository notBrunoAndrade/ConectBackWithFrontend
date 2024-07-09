import './css/app.css'
import { SlBan } from "react-icons/sl";


function App() {


  return (
    <div className="container-page">

      <div className="container-register">
          <h1>Cadastro de Usuários</h1>
          <input type="text" placeholder="Nome" />
          <input type="number" placeholder="Idade" />
          <input type="email" placeholder="E-mail" />

          <button>Cadastrar</button>
      </div>

      <div className="container-informations">
        <p className="name-text">Nome: Joaquim</p>
        <p className="age-text">Idade: 17</p>
        <p className="email-text">E-mail: Paulo@hotmail.com</p>
        <SlBan className='icon'/>
      </div>

    </div>
  )
}

export default App
