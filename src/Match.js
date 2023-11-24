import { useEffect, useState } from "react";

const Match = (props) => {
    const [winner,setWinner] = useState("");
    const [set1,setset1] = useState(0);
    const [set2,setset2] = useState(0);
    const [set3,setset3] = useState(0);
    const [set4,setset4] = useState(0);
    const [set5,setset5] = useState(0);



    return ( 
        <div className="match-container">
            <div className="match-container">
                <div className="match-content">
                <h3 className="match-code" style={{"margin-top": 0}}>{props.match}</h3>
                <p style={{display: "inline"}}>{props.player1}</p>
                <p style={{margin: 5}}>VS</p>
                <p style={{display: "inline"}}>{props.player2}</p>
                </div>

                <div style={{display:"flex", flexDirection:"column", gap: "35px", marginTop: "40px"}}>
                    <input type="radio" name={"Winner-"+props.match} className="checkbox-input" value="true"/>
                    <input type="radio" name={"Winner-"+props.match} className="checkbox-input" value="false"/>
                </div>


                <div className="score-input-container">
                <label>
                    <p>Set 1</p>
                    <input className={props.match+"-score-input score-input"} type="number" name={props.match+"-set1"}/>
                </label>
                <label>
                    <p>Set 2</p>
                    <input className={props.match+"-score-input score-input"} type="number" name={props.match+"-set2"}/>
                </label>
                <label>
                    <p>Set 3</p>
                    <input className={props.match+"-score-input score-input"} type="number" name={props.match+"-set3"}/> 
                </label>
                <label>
                    <p>Set 4</p>
                    <input className={props.match+"-score-input score-input"} type="number" name={props.match+"-set4"}/>
                </label>
                <label>
                    <p>Set 5</p>
                    <input className={props.match+"-score-input score-input"} type="number" name={props.match+"-set5"}/>
                </label>
                </div>
            </div>
        </div>
     );
}
 
export default Match;