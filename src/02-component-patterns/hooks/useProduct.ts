import { useState } from "react"



export const useProduct = () => {
    const [counter, setCounter] = useState(0)

    const increaseBy = (v:number)=>{
       setCounter(prev => Math.max(prev + v, 0))
    }

    return{
        counter,
        increaseBy
    }
}
