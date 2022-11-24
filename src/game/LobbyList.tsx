import axios from "../request";
import {useQuery, useQueryClient} from "react-query";
import {Link, Route, Routes} from "react-router-dom";


async function getLobbies() {


    const {data} = await axios.get("/game/get");
    return data
}


function LobbyList() {
    const client = useQueryClient(); // Returns client obj if needed.

    const {data, isLoading, isError} = useQuery({queryKey: ['getLobbies'], queryFn: getLobbies})
    if (isLoading) return <p>Is Loading</p>
    if (isError) return <p>Is error</p>

    return (
        <div>
            {/* Header */}
            <div>
                <Link to={"create"}>Create new lobby</Link>
            </div>

            {/* Body */}
            <div>
                {data.length}
            </div>

            {/* Routes */}
            <Routes>
                <Route path={"lobby/create"}/>
            </Routes>
        </div>
    )

}

export default LobbyList