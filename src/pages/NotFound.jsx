import React from 'react'

function NotFound() {

    function goToHome() {
        window.location.href = "/home"
    }
    return (
        <div>
            <h1>Nessuna pagina trovata</h1>
            <button className='btn btn-primary' onClick={goToHome}>Cliccami</button> per tornare indietro
        </div>
    )
}

export default NotFound
