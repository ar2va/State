import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from './Loading';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => setData(response.data));
    }, [data]);

    return (
        <div>
            <div>
                {data.length ? (
                    data.map((item) => <h3 key={item.id}>{item.name}</h3>)
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    );
};

export default App;
