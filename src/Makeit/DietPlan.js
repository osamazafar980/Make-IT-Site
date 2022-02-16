import React from 'react';
import './Dietplan.css';
import { useNavigate } from "react-router-dom";
import Header from './Header';

function DietPlan() {
  const navigate = useNavigate();


  return (
    <div>
      <Header />
      <div className="Landing">
        <div className="Landing__banner1">
          <h1 className="Landing__banner__heading">Custom Meal Planner</h1>
          <button className='Plan_b' onClick={() => navigate("/DietPlanCustom")}> Meal Planner</button>

        </div>
        <div className="Landing__banner2">
          <h1 className="Landing__banner__heading">Pre Made Plans</h1>
          <button className='Plan_b' onClick={() => navigate("/Survey")}>View Plans</button>
        </div>
      </div>

    </div>
  )
}




export default DietPlan
