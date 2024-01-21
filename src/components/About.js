import React from 'react'
import { useState, useEffect } from 'react';

const About = () => {
  
  let [data, setData] = useState(null);

  let orderedList = data ? data.map((item) => 
    <li key={item.id.toString()}>
      {item.title}
    </li>
  ) : null;

  useEffect(() => {
    let mounted = true;
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
      if (mounted) {
        setData(data)
      };
    }, )

    return () => {
      mounted = false;
    }
  }, []) //set the timing of the fetch




  return (
    <ol>
      {orderedList}
    </ol>
  )
}
export default About