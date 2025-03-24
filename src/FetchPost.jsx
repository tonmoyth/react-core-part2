import { use } from "react"

export default function FetchPost({PostData}){
    const data = use(PostData);
    
    return(
        <div className="card">
            <h1>Post: {data.length}</h1>
        </div>
    )
}