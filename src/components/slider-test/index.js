import { useEffect, useState } from "react"



export default function Slider({url}){

    const[data, setData] = useState(null);
    const [image, setImage] = useState(0);
    

    function handleNext(){
        if(image !== 10){
            setImage(image +1);
        }
        else{
            setImage(0);
        }
        
        
    }

    function handlePrev(){
        if(image !== 0){
            setImage(image -1);
        }else{
            setImage(91)
        }
    }

    
    async function fetchData(getUrl){
        try{
            const response = await fetch(getUrl);
            const data = await response.json();
            setData(data);
            console.log(data);
            console.log(data.length)
        }catch(e){
            console.log(e.message)
        }
    }
    useEffect(()=> {fetchData(url)},[url])
    return (
    <div>
        <button onClick={()=>handlePrev()}>prev</button>
        <div>{data && data.length ? <img src={data[image].urls.regular}/>:null}</div>
        <button onClick={()=>handleNext()}>next</button>
    </div>
    )
}