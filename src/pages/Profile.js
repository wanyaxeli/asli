import React,{useContext,useState} from "react";
import { mycontext } from "../App";
const Profile = ()=>{
    const data = useContext(mycontext)
    const [active,setActive]=useState('tab1')
    const handleActive=()=>{
        setActive('tab1')
    }
    const handleActive1=()=>{
        setActive('tab2')
    }
    const handleActive2=()=>{
        setActive('tab3')
    }
    return(
        <section className="designer-wrapper">
           <div className="banner-wrapper">
               <div className="banner d-flex flex-row mb-3  justify-content-between align-items-center">
                 <div className="banner-img">
                    <img src="/images/chimzi.png" alt="photo"/>
                 </div>
                 <div className="banner-details">
                      <h3>Chimzi Okelo</h3>
                      <h5>Custom made design</h5>
                      <h6>CEO of Zalondo Africa</h6>
                 </div>
                 <div className="banner-media">
                    <ul>
                        <li><i className="fa fa-instagram" aria-hidden="true"></i> Chimzi_Okelo</li>
                        <li><i className="fa fa-twitter" aria-hidden="true"></i> Chimzi_Okelo</li>
                        <li><i className="fa fa-linkedin-square" aria-hidden="true"></i> Chimzi_Okelo</li>
                        <li><i className="fa fa-map-marker" aria-hidden="true"></i> Chimzi_Okelo</li>
                        <li><i className="fa fa-phone" aria-hidden="true"></i> Chimzi_Okelo</li>
                    </ul>
                 </div>
               </div>
           </div>
        <h4 className="chimzi-text">Chimzi's Popular design</h4>  
        <i  className="fa fa-angle-left dir" aria-hidden="true"></i>    
        <i className="fa fa-angle-right dir" aria-hidden="true"></i>
        <div className="profile-data d-flex flex-row mb-3  justify-content-between align-items-center">
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
        <h6 className="chimzi-text">Other Designs</h6>
        <div className="btn-wrapper">
                    <button onClick={handleActive} className={active==='tab1'?'active-btn':''}>Men</button>
                    <button onClick={handleActive1} className={active==='tab2'?'active-btn':''}>Woman</button>
                    <button onClick={handleActive2} className={active==='tab3'?'active-btn':''}>Kids</button>
        </div>
        <div className="profile-data other-design d-flex flex-row mb-3  justify-content-between align-items-center">
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
            <button className="fixed-btn">Fitting room</button>
        </section>
    )
}
export default Profile