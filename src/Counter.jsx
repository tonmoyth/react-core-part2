import { useState } from "react"

export default function Counter(){
    const [Counter,setCounter] = useState(0);

    const add = () =>{
        const newCount = Counter + 1;
        setCounter(newCount);
    }
    const minaise = () =>{
        if(Counter > 0){
            const newMinaise = Counter - 1;
            setCounter(newMinaise);
        }else{
            setCounter(0)
        }
        
    }
    const reset = () =>{
        setCounter(0)
    }

    return(
        <div>
            <h1>Counter: {Counter}</h1>
            <button onClick={add}>add</button>
            <button onClick={minaise}>subsruct</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}