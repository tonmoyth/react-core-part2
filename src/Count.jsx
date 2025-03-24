import { useState } from "react"

export default function Count(){
    const [CountSingle,setCountSingle] = useState(0);
    const [CountFour,setCountFour] = useState(0);
    const [CountSix, setCountSix] = useState(0);
    const [CountTotal, setCountTotal] = useState(0);

    const Single = () => {
        const newCount = CountSingle + 1;
        setCountSingle(newCount);
        total(newCount);
    }
    const Four = () => {
        const newCount = CountFour + 4;
        setCountFour(newCount);
        total(newCount);
    }

    const six = () => {
        const newCount = CountSix + 6;
        setCountSix(newCount);
        total(newCount);
    }

    const total = (num) =>{
        const totalCount = CountTotal + num;
        setCountTotal(totalCount)
    }
    return(
       <div>
         <h2>Single: {CountSingle}</h2>
         <h2>Four: {CountFour}</h2>
         <h2>Six: {CountSix}</h2>
         <p>total: {CountTotal}</p>
         {
            CountTotal >= 100 && <p>Congress you are get hattique</p>
         }
         <button onClick={Single}>Sigle</button>
         <button onClick={Four}>Four</button>
         <button onClick={six}>Six</button>
       </div>
    )
}