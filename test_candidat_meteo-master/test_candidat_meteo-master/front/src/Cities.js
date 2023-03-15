import React, { useEffect,useState } from 'react';
import axios from "axios";


const Cities = () => {
    const [listOfCities, setListOfCities]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3006/cities").then((response)=> {
            setListOfCities(response.data);
        });
    },[])



    return (
        <div className='cities'>
            <table>
                
                    <tr id='tableHeader'>
                        <th>Code base</th>
                        <th>City</th>
                        <th>Population</th>

                    </tr>
                    {
                        listOfCities.map((value,key)=>{
                            return (
                                <tr key={value.id}>
                                    <td>{value.insee}</td>
                                    <td>{value.name}</td>
                                    <td>{value.population}</td>
                                </tr> 
                            )
                        })

                    }
            
            </table>
        </div>
    );
};

export default Cities;