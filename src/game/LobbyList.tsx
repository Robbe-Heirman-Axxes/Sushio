import axios from "../axios";

function LobbyList() {
    axios.get("/game/get").then(() => console.log("??"))
    return <div>
        <h1>lobby list component</h1>
    </div>
}

export default LobbyList