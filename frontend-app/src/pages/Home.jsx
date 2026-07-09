import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>Fitnes aplikacija</h1>
            <h2>Prijava</h2>
            <div>Da li se prijavljujete kao:</div>
            <button onClick={() => navigate("/trener-login")}>
                Trener
            </button>
            <button onClick={() => navigate("/sportista-login")}>
                Sportista
            </button>
        </div>
    )

}

export default Home