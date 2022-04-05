import { useState } from 'react'

function GetUserComponent({ setUser, setIsLoggedIn }){

    const [userInput, setUserInput] = useState('')

    const handleLogin = () =>{

        setUser(userInput)

        setIsLoggedIn(true)

    }

    return(

        <form onSubmit={(event) => handleLogin(event.preventDefault())}>
            <input
            type="text"
            placeholder="Insira seu nome"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)} 
            />
            <button onClick={handleLogin} type="submit">Acessar com o nome</button>
        </form>

    )
}

export default GetUserComponent