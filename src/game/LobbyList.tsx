import axios from "../request";
import {useQuery} from "react-query";


async function getLobbies() {


    const {data} = await axios.get("/game/get");
    return data
}


function LobbyList() {
    const {data, isLoading, isError} = useQuery({queryKey: ['getLobbies'], queryFn: getLobbies})
    if (isLoading) return <p>Is Loading</p>
    if (isError) return  <p>Is error</p>

    return (
        <div>
            <div>
                <a>Create new lobby</a>
            </div>
            {data.length}
        </div>
    )
}

export default LobbyList