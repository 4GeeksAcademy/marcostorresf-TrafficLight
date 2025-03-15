import React, {useState} from "react";

//create your first component
const Home = () => {
const[glow,setGlow] = useState("red")
	return (
	   <div className="trafficlight">
          <div className="stick"></div>
               <div className="lightgroup">
				    <div 
					  className={glow == "red" ? "red light glow":"red light"}
						onClick={()=>setGlow("red")}>
					</div>
					<div className={glow == "yellow" ? "yellow light glow":"yellow light"}
						onClick={()=>setGlow("yellow")}>
					</div>
					<div className={glow == "green" ? "green light glow":"green light"}
						onClick={()=>setGlow("green")}>
				    </div>
			</div>
     </div>
    
	);
};

export default Home;