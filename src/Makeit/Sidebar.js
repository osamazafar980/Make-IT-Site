import { Avatar } from "@material-ui/core";
import React , {useEffect,useState} from "react";
import "./Sidebar.css";
import { db } from "./firebase";
import {
  getFirestore, query,
  getDocs, collection,
  where, addDoc 
}from "firebase/firestore";
function Sidebar(props) {
  const [userData,setUserData] = useState({})
useEffect(()=>{
  db.collection("users")
              .get()
              .then(async function(querySnapshot) {
                var temp ="" 
                await querySnapshot.forEach(function(doc) {
                  if(doc.id==props.id){
                    temp=doc.data()
                  }  
                      
                  });
                  setUserData(temp)
                });
},[])
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1519817650390-64a93db51149?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80"
          alt=""
        />
        <Avatar src="" className="sidebar_top_Avatar"></Avatar>
        <h2>{userData.name}</h2>
        <h4>{userData.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p> Who Viewed You</p>
          <p className="number"> 2183</p>
        </div>
        <div className="sidebar_stat">
          <p> Views On Post</p>
          <p className="number"> 12383</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
