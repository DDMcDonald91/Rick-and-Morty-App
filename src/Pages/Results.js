import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Cards from './Components/Cards';
import axios from 'axios';

export default function Results() {
    const [info, setInfo] = useState(null);
    let params = useParams();

    const getResults = async (name) => {
        try {
           await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
            .then((res) => {
             setInfo(res.data.results[0]);
            })
        } catch(err) {
            console.log(err)
        } 
    };

    useEffect(() => {
        getResults(params.search);
        }, [params.search]);
    console.log(info);
    
  
  if(!info) {
    return(<p>Loading...</p>)
  } else { 
    return (
        <Container className='d-flex align-items-center justify-content-center'>
            <Cards name={info.name} status={info.status} species={info.species} gender={info.gender} img={info.image} />
        </Container>
    )
  }
}
