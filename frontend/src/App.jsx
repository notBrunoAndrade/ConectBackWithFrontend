
import { useState, useEffect, useRef } from 'react';
import './css/app.css'
import { SlBan } from "react-icons/sl";
import api from '../src/services/api'

// react hooks

function App() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    try {
      const usersFromAPI = await api.get('/')     // Coletar dados de API e setar no users atraves do
      setUsers(usersFromAPI.data)                 // setUsers
    } catch (error) {
      console.log('error')
    }
  }

  async function createUsers() {
    try {
      await api.post('/', {
        name: inputName.current.value,
        age: inputAge.current.value,             // criar usuarios Axios
        email: inputEmail.current.value
      }
      )
      getUsers()
    } catch (error) {
      console.log('error')
    }
  }


  async function deleteUsers(id) {
    try {
      await api.delete(`/${id}`)
      getUsers()                            // deletar 
    } catch (error) {
      console.log('error')
    }
  }

  useEffect(() => {
    getUsers()     // atualiza pagina automaticamente com as mudanças no banco de dados
  }, [])


  return (
    <div className="container-page">

      <form className="container-register">
        <h1>Cadastro de Usuários</h1>
        <input type="text" placeholder="Nome" ref={inputName} />
        <input type="number" placeholder="Idade" ref={inputAge} />
        <input type="email" placeholder="E-mail" ref={inputEmail} />

        <button className='send-button' onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user => (

        <div key={user.id} className="container-informations">
          <div className="text-div">
            <p name="name">Nome : {user.name}</p>
            <p name="age">Idade: {user.age}</p>
            <p name="email">E-mail: {user.email}</p>
          </div>
          <div className="icons-div">
            <button className='delete-button' onClick={() => deleteUsers(user.id)}><SlBan className='icon' /></button>
          </div>
        </div>
      ))}



    </div>
  )
}

export default App
