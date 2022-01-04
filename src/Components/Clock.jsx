import React from 'react'
import useTimer from '../hooks/useTimer'

export default function Clock() {
    const timer = useTimer(new Date());
    return (
        <div>
        <h4>Current Time:</h4>
            <h5>{timer.getHours()}:{timer.getMinutes()}:{timer.getSeconds()}</h5>
        </div>
    )
}
