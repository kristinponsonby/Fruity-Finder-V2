import React from "react";
import axios from "axios";
import FruitCard from './FruitCard';
import { useEffect } from 'react';
import { useState } from 'react';


const FruitIndex = () => {

    const [loading, setLoading] = useState(true)
    const [apiData, setApiData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')


    const getFruits = () => {
       return axios.get("/fruits")
            .then((response) => response.data)
            .then((data) => {
                setApiData(fruit => [...fruit, ...data])
                setLoading(false)
      });
    }

        useEffect(() => {
            getFruits();
          }, []);

      

        return (
            <div className="fruit-container"> 
            
            <input className="search" type="text" placeholder="Search by name"  onChange={ event => { setSearchTerm(event.target.value) } } />

                { apiData.filter((fruit) => {
                    if (searchTerm === '') {
                        return  <FruitCard   
                                genus={fruit.genus}
                                name={fruit.name}
                                family={fruit.family}
                                order={fruit.order}
                                nutrition={fruit.nutritions}
                                />
                  } else if (fruit.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return fruit
                    }

                  }).map((fruit,i) => {
                        return (

                  <div className="fruit" key={i}>
                          <FruitCard   
                          genus={fruit.genus}
                          name={fruit.name}
                          family={fruit.family}
                          order={fruit.order}
                          nutrition={fruit.nutritions}
                          key={i}
                          />
                  </div>

                              );
                           })}

            { loading ? <div className="loading"> Loading...  </div> : null }
           
            </div>
        );
    }


 export default FruitIndex;