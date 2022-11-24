import {QueryClient, QueryClientProvider} from 'react-query';
import React from 'react';
import LobbyList from "./game/LobbyList";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";


const queryClient = new QueryClient()

function App() {
    return (
        <Router>
            <QueryClientProvider client={queryClient}>
                <div className="App">
                    <ul>
                        <li><Link to={"/lobby"}>lobby</Link></li>
                    </ul>
                </div>

                <Routes>
                    <Route path={"/lobby"} element={<LobbyList/>}/>
                </Routes>
            </QueryClientProvider>
        </Router>
    )
}

export default App;
