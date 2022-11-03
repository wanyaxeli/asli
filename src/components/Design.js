import React,{useContext} from "react";
import { mycontext } from "../App";
const Design=()=>{
    const data = useContext(mycontext)
   const handleClick =(id)=>{
    let item=data.find(itm=>{return itm.id === id })
     if (item){
        window.location.href='/profile'
     }
   }
 return (
    <section className=" design-wrapper">
          <h4 className="select-text">Select the design type</h4>
         <div className="d-flex flex-row mb-3  justify-content-between align-items-center design-container">
                {data.map(item=>{
                    return(
                <div  key={item.id} className="card-wrapper design-card-wrapper">
                        <div onClick={()=>handleClick(item.id)} className="card-image pointer">
                        <img width='200px' height='300px' src={item.image} alt="images"/>
                        </div>
                        <div className="card-text text-center">
                            <h6 className="text-white text design-text">{item.worn}</h6>
                        </div>
                </div>
                    )
                })}
         </div>
    </section>
 )
}
export default Design