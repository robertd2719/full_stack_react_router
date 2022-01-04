import React from 'react'
import {useState, useEffect} from 'react';

export default function useTimer(currentDate) {
    // Here we are passing values into the original state for the values
    const [date,setDate] = useState(currentDate);

    useEffect(()=>{
        let clock = setInterval(()=> pulse(), 1000);
        return function after(){
            clearInterval(clock);
        };
    });

    function pulse(){
        setDate(new Date())
    }

    return date;
  
}
