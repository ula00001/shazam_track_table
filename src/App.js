import './App.css';
import { useEffect, useState } from 'react';
import { Table } from './components/table/Table';
import useShazamService from './hooks/services/useShazamService';
import ErrorMessage from './errorMessage/ErrorMessage';
import Spinner from './spinner/Spinner'

function App() {

    const { getTracks, loading, error, clearError } = useShazamService();
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = () => {
        if (!tracks) {
            return;
        }
        clearError();
        getTracks()
            .then(onRequestLoaded)
    }

    const onRequestLoaded = (tracks) => {
        setTracks(tracks);
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !tracks) ? (
        <Table tracks={tracks}/>
    ) : null;

    return (
        <div className="container">
            { errorMessage || spinner || content }
        </div>
    );
}

export default App;
