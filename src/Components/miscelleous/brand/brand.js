import React from 'react';
import './brand.css';
import logo from '../../../Assests/icons/cu4dinner.png';

const brand=(props)=>{
    let vclass=" ";
    if(props.show){
        vclass="show";
    }
    let all_class=["brand"];
    all_class.push(vclass);
    return(
        <div className={all_class.join(" ")}>
            <p className="brandnum">CU4</p>
            <p className="name">Dinner</p>
            <div className="image-container">
            <img src={logo} alt="Company Logo"/>
            </div>
            <p className="lastTitle">Prepared Meals</p>
        </div>

    );
}

export default brand;
