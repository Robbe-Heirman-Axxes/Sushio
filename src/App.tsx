import {QueryClient, QueryClientProvider} from 'react-query';
import React from 'react';
import LobbyList from "./game/LobbyList";


const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <LobbyList/>
            </div>
        </QueryClientProvider>
    )
}

export default App;
