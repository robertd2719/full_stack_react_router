import {useState} from 'react';


export default function Home() {
    const [now,updateDate] = useState(new Date())
    const [state,updateState] = useState({count: 1})

    function increment(){
        updateState({count:state.count+1})
    }
    function decrement(){
        updateState({count:state.count-1})
    }
    return (
        <div>
        <h3>{JSON.stringify(now)}</h3>
        <h2>{state.count}</h2>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement} >Decrement</button>
        </div>
    )
}
