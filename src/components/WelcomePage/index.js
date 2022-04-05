function WelcomePage ({ user, setIsLoggedIn }){

    const handleLogout = () =>{

        setIsLoggedIn(false)

    }

    return(

        <div>
            <h1>{user}</h1>
            <button onClick={handleLogout}> sair </button>
        </div>

    )

}

export default WelcomePage