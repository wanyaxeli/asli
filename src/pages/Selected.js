import React,{useContext, useState} from "react";
import { mycontext } from "../App";
const Selected =()=>{
    const data = useContext(mycontext)
    return(
        <section className="selected-page-wrapper">
            <div className="selected-page-container">
                <div className="tabs d-flex flex-row mb-3  justify-content-between align-items-center">
                  {
                    data.map(item=>{
                        return(
                    <div  key={item.id} className="card-wrapper design-card-wrapper">
                            <div className="card-image">
                            <img width='200px' height='300px' src={item.image} alt="images"/>
                            </div>
                            <div className="card-text text-center">
                               <div className="d-flex flex-row mb-3  justify-content-between align-items-center price-wrapper">
                                  <h6 className=" design-text">{item.worn}</h6>
                                  <h6>@{item.price}</h6>
                               </div>
                               <p className="text designer">By:{item.designer}</p>
                            </div>
                            <button className="try-btn">Try on</button>
                    </div>
                        )
                    })
                  }
                </div>
                <div className="tabs d-flex flex-row mb-3  justify-content-between align-items-center">
                  {
                    data.map(item=>{
                        return(
                    <div  key={item.id} className="card-wrapper design-card-wrapper">
                            <div className="card-image">
                            <img width='200px' height='300px' src={item.image} alt="images"/>
                            </div>
                            <div className="card-text text-center">
                               <div className="d-flex flex-row mb-3  justify-content-between align-items-center price-wrapper">
                                  <h6 className=" design-text">{item.worn}</h6>
                                  <h6>@{item.price}</h6>
                               </div>
                               <p className="text designer">By:{item.designer}</p>
                            </div>
                            <button className="try-btn">Try on</button>
                    </div>
                        )
                    })
                  }
                </div>
            </div>
            <button className="fixed-btn">Fitting room</button>
        </section>
    )
}
export default Selected