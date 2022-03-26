import './App.css';
import { useEffect, useState } from 'react';
import { Table } from './components/table/Table';
import useShazamService from "./hooks/services/useShazamService";

function App() {

    const { getTracks } = useShazamService();
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = () => {
        getTracks()
            .then(onRequestLoaded)
    }

    const onRequestLoaded = (tracks) => {
        setTracks(tracks);
    }
    return (
        <div className="container">
            <Table tracks={tracks}/>
        </div>
    );
}

export default App;
