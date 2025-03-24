import { use } from "react"

export default function FetchData({FetchData}){
    const data = use(FetchData);
    
    return(
        <div className="card">
            <h2>Fetch Data: {data.length}</h2>
        </div>
    )
}