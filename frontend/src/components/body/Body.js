import React, { useState, useEffect} from 'react'
import './body.css'
import axios from 'axios';

function Body() {
    const [ api, setApi] = useState([]);
     useEffect(() => {
        setApi(fetchData())
       },[])
    const fetchData = () => {
        axios
          .get('http://localhost:8080/test')
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
   
      
  return (
      <div className='body'>
          {
              api.map((publicapi, index) => {
                 return <div key='index'>
                     <h4>{publicapi.API}</h4>
                     <p>{publicapi.Description}</p>
                     <p>{publicapi.Link}</p>
                     <p>{publicapi.Catagory}</p>
                 </div>
              })
          }
      </div>
  )
  }
export default Body