import React,{useContext} from "react";
import { mycontext } from "../App";
const Popular = ()=>{
    const data = useContext(mycontext)
    const handleNext =(id)=>{
     let item=data.find(itm=>{return itm.id === id })
     if (item){
        window.location.href='/selected'
     }
    }
   return(
    <section>
     <h4 className="head">Popular designs</h4>
        <div className="d-flex flex-row mb-3  justify-content-between align-items-center popular-wrapper">
        <i className="fa fa-angle-left" aria-hidden="true"></i>    
        <i className="fa fa-angle-right" aria-hidden="true"></i>
            {data.map(item=>{
                return(
                <div onClick={()=>handleNext(item.id)} key={item.id} className="card-wrapper pointer">
                    <div className="card-image">
                    <img width='200px' height='300px' src={item.image} alt="images"/>
                    </div>
                    <div className="card-text text-center">
                        <h5 className="text">Jonh Kaveke</h5>
                        <h6 className="text">Ankara dress</h6>
                    </div>
              </div>
                )
            })}
        </div>
</section>
   )
}
export default Popular