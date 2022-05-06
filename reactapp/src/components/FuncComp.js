import { useEffect, useState } from "react"

const FuncComp = () => {
    
    const [count,setCount] = useState(10);
    const [name,setName] = useState("");
    const [display,setDisplay] = useState(true);


    useEffect(()=>{
        console.log('Functional Comp worked')
    },[])


    const IncreaseHandler = () => {
        setCount(count+1)
    }

    const ChangeHandler = (e) => {
        setName(e.target.value)
       
    }

    const ToggleHandler = () => {
        setDisplay(!display)
    }

  return (
    <div className="text-center FuncComponent col-6">
        <h3>{count}</h3>
        <button onClick={IncreaseHandler}>Click</button>
        <button onClick={ToggleHandler}>Toggle</button>
        <input style={display ? {display:"block"} : {display:"none"}} onChange={ChangeHandler} type="text" className="form-control mt-4" />
        <h4>Username: {name}</h4>
    </div>
  )
}
export default FuncComp