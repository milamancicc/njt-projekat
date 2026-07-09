import { useState } from "react";

function SportistaLogin(){
    const [korisnickoIme, setKorisnickoIme] = useState("");
    const [sifra, setSifra] = useState("");
    
    function handleKorisnickoIme(e){
        setKorisnickoIme(e.target.value);
    }

    function handleSifra(e){
        setSifra(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        alert(korisnickoIme + " " + sifra);
        //backend ovde posle
    }

    return(
        <div>
            <h1>Login za sportiste</h1>
            <form onSubmit={handleSubmit}>
                <label>Korisnicko ime:</label>
                <input type="text" value={korisnickoIme} onChange={handleKorisnickoIme}></input>
                <label>Sifra:</label>
                <input type="password" value={sifra} onChange={handleSifra}></input>
                <input type="submit" value="Log in"/>
            </form>
        </div>
    )
}

export default SportistaLogin;