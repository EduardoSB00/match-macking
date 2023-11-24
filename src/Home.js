import { useState } from "react";
import Blank from "./Blank";
import Match from "./Match";
import Report from "./Report";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import FullBlank from "./FullBlank";

const Home = () => {

  const [playerA, setPlayerA] = useState("");
  const [playerB, setPlayerB] = useState("");
  const [playerC, setPlayerC] = useState("");
  const [playerD, setPlayerD] = useState("");
  const [playerX, setPlayerX] = useState("");
  const [playerY, setPlayerY] = useState("");
  const [playerZ, setPlayerZ] = useState("");
  const [playerW, setPlayerW] = useState("");
  const [doublesA, setdoublesA] = useState("");
  const [doublesB, setdoublesB] = useState("");
  const [doublesX, setdoublesX] = useState("");
  const [doublesY, setdoublesY] = useState("");

  const [playerA2, setPlayerA2] = useState("");
  const [playerB2, setPlayerB2] = useState("");
  const [playerC2, setPlayerC2] = useState("");
  const [playerD2, setPlayerD2] = useState("");
  const [playerX2, setPlayerX2] = useState("");
  const [playerY2, setPlayerY2] = useState("");
  const [playerZ2, setPlayerZ2] = useState("");
  const [playerW2, setPlayerW2] = useState("");
  const [doublesA2, setdoublesA2] = useState("");
  const [doublesB2, setdoublesB2] = useState("");
  const [doublesX2, setdoublesX2] = useState("");
  const [doublesY2, setdoublesY2] = useState("");

  const [teamA, setTeamA] = useState("");
  const [teamX, setTeamX] = useState("");

  const [captainA, setCaptainA] = useState("");
  const [captainX, setCaptainX] = useState("");

  const [category, setcategory] = useState("");
  const [sortVisibilty,setSortVisibility] = useState("none");




  function handlePlayerSort(){
    if(playerA && playerB && playerC && playerD && playerX && playerY && playerZ && playerW && doublesB && doublesA && doublesX && doublesY ){
      setPlayerA2(playerA);
      setPlayerB2(playerB);
      setPlayerC2(playerC);
      setPlayerD2(playerD);
      setPlayerX2(playerX);
      setPlayerY2(playerY);
      setPlayerZ2(playerZ);
      setPlayerW2(playerW);
      setdoublesA2(doublesA);
      setdoublesB2(doublesB);
      setdoublesX2(doublesX);
      setdoublesY2(doublesY);


      setSortVisibility("block")
    }else{
      alert("Porfavor llene todos los campos solicitados")
    }
  }



  return (
    <div className="App">

      <header className="App-header">
        <h1>Generador de Encuentros Club Sula</h1>
        <img src="./imgs/logo.png" alt="" className="header-logo"/>
      </header>

      <div className="team-input-container">
      <h2>Categoria</h2>
        <div className="team-input">
          <label>
              <select type="text" placeholder="Nombre del Equipo" className="main-input-field" value={category} onChange={(e)=>{setcategory(e.target.value)}}>
                <option value="">-- Seleccione una Cateogria --</option>  
                <option value="Categoria A">Categoria A</option>
                <option value="Categoria B">Categoria B</option>
              </select>
            </label>
        </div>
    </div>


      <div className="team-input-container">
      <h2>Equipos</h2>
        <div className="team-input">
          <label>
              <p className="input-label">A</p>
              <input type="text" placeholder="Nombre del Equipo" className="main-input-field" value={teamA} onChange={(e)=>{setTeamA(e.target.value)}}/>
            </label>
        </div>
        <div className="team-input">
          <label>
           <p className="input-label">X</p>
            <input type="text" placeholder="Nombre del Equipo" className="main-input-field" value={teamX} onChange={(e)=>{setTeamX(e.target.value)}}/>
          </label> 
        </div>
    </div>

    <div className="team-input-container">
      <h2>Capitanes</h2>
        <div className="team-input">
          <label>
              <p className="input-label">A</p>
              <input type="text" placeholder="Nombre del Capitan" className="main-input-field" value={captainA} onChange={(e)=>{setCaptainA(e.target.value)}}/>
            </label>
        </div>
        <div className="team-input">
          <label>
            <p className="input-label">X</p>
            <input type="text" placeholder="Nombre del Capitan" className="main-input-field" value={captainX} onChange={(e)=>{setCaptainX(e.target.value)}}/>
          </label>
        </div>
    </div>

      <div className="team-input-container">
        <h2>Integrantes</h2>
        <div className="team-input">
          <label>
            <p className="input-label">A</p>
            <input type="text" placeholder="Nombre del Jugador" className="main-input-field" value={playerA} onChange={(e)=>{setPlayerA(e.target.value)}}/>
          </label>
          <label>
            <p className="input-label">B</p>
            <input type="text" placeholder="Nombre del Jugador" className="main-input-field" value={playerB} onChange={(e)=>{setPlayerB(e.target.value)}}/>
          </label>
          <label>
            <p className="input-label">C</p>
            <input type="text" placeholder="Nombre del Jugador" className="main-input-field" value={playerC} onChange={(e)=>{setPlayerC(e.target.value)}}/>
          </label>
          <label>
            <p className="input-label">D</p>
            <input type="text" placeholder="Nombre del Jugador" className="main-input-field" value={playerD} onChange={(e)=>{setPlayerD(e.target.value)}}/>
          </label>
         
        </div>
        <div className="team-input">
          <label>
            <p className="input-label">X</p>
            <input type="text" placeholder="Nombre del Jugador" className="main-input-field" value={playerX} onChange={(e)=>{setPlayerX(e.target.value)}}/>
          </label>
          <label>
            <p className="input-label">Y</p>
            <input type="text" placeholder="Nombre del Jugador" className="main-input-field" value={playerY} onChange={(e)=>{setPlayerY(e.target.value)}}/>
          </label>
          <label>
            <p className="input-label">Z</p>
            <input type="text" placeholder="Nombre del Jugador" className="main-input-field" value={playerZ} onChange={(e)=>{setPlayerZ(e.target.value)}}/>
          </label>
          <label>
            <p className="input-label">W</p>
            <input type="text" placeholder="Nombre del Jugador" className="main-input-field" value={playerW} onChange={(e)=>{setPlayerW(e.target.value)}}/>
          </label>
          
        </div>
      </div>

      <div className="team-input-container">
      <h2>Dobles</h2>
        <div className="team-input">
          <label>
              <p className="input-label">A</p>
              <input type="text" placeholder="Nombre de los Jugadores" className="main-input-field" value={doublesA} onChange={(e)=>{setdoublesA(e.target.value)}}/>
            </label>
            <label>
            <p className="input-label">B</p>
              <input type="text" placeholder="Nombre de los Jugadores" className="main-input-field" value={doublesB} onChange={(e)=>{setdoublesB(e.target.value)}}/>
            </label> 
        </div>
        <div className="team-input">
          <label>
            <p className="input-label">X</p>
            <input type="text" placeholder="Nombre de los Jugadores" className="main-input-field" value={doublesX} onChange={(e)=>{setdoublesX(e.target.value)}}/>
          </label>
          <label>
           <p className="input-label">Y</p>
            <input type="text" placeholder="Nombre de los Jugadores" className="main-input-field" value={doublesY} onChange={(e)=>{setdoublesY(e.target.value)}}/>
          </label> 
        </div>
    </div>
    
      <div style={{display:"flex",justifyContent:"center", gap:"10px"}}>
        <button className="sort-btn" onClick={handlePlayerSort}>Generar Encuentros</button>

        <form action="/formTest" method="get" target="_blank">
          <input type="hidden" value={playerA} name="playerA" />
          <input type="hidden" value={playerB} name="playerB" />
          <input type="hidden" value={playerC} name="playerC" />
          <input type="hidden" value={playerD} name="playerD" />

          <input type="hidden" value={playerX} name="playerX" />
          <input type="hidden" value={playerY} name="playerY" />
          <input type="hidden" value={playerZ} name="playerZ" />
          <input type="hidden" value={playerW} name="playerW" />

          <input type="hidden" value={doublesA} name="doublesA" />
          <input type="hidden" value={doublesB} name="doublesB" />

          <input type="hidden" value={doublesX} name="doublesX" />
          <input type="hidden" value={doublesY} name="doublesY" />

          <input type="hidden" value={teamA} name="teamA" />
          <input type="hidden" value={teamX} name="teamX" />

          <input type="hidden" value={category} name="category" />





          <button className="sort-btn">Generar Plantillas</button>
        </form>
      </div>
      


      <div style={{display:sortVisibilty}}>



        <h2 className="sort-subtitle">Encuentros Generados</h2>
        <form method="get" target="_blank" action="/reportTest">

        <input type="hidden" className="main-input-field" value={category} name="category"/>

        <input type="hidden" className="main-input-field" value={playerA} name="playerA"/>
        <input type="hidden" className="main-input-field" value={playerB} name="playerB"/>
        <input type="hidden" className="main-input-field" value={playerC} name="playerC"/>
        <input type="hidden" className="main-input-field" value={playerD} name="playerD"/>

        <input type="hidden" className="main-input-field" value={playerX} name="playerX"/>
        <input type="hidden" className="main-input-field" value={playerY} name="playerY"/>
        <input type="hidden" className="main-input-field" value={playerZ} name="playerZ"/>
        <input type="hidden" className="main-input-field" value={playerW} name="playerW"/>

        <input type="hidden" className="main-input-field" value={doublesA} name="doublesA"/>
        <input type="hidden" className="main-input-field" value={doublesB} name="doublesB"/>

        <input type="hidden" className="main-input-field" value={doublesX} name="doublesX"/>
        <input type="hidden" className="main-input-field" value={doublesY} name="doublesY"/>

        <input type="hidden" value={teamA} name="teamA" />
        <input type="hidden" value={teamX} name="teamX" />
        
        <input type="hidden" value={captainA} name="captainA" />
        <input type="hidden" value={captainX} name="captainX" />


        <div className="team-matches-container">

            <Match match="AW" player1={playerA2} player2={playerW2} />
            <Match match="BX" player1={playerB2} player2={playerX2} />
            <Match match="CY" player1={playerC2} player2={playerY2} />
            <Match match="DZ" player1={playerD2} player2={playerZ2} />

            <Match match="AX" player1={playerA2} player2={playerX2} />
            <Match match="BW" player1={playerB2} player2={playerW2} />
            <Match match="DY" player1={playerD2} player2={playerY2} />
            <Match match="CZ" player1={playerC2} player2={playerZ2} />

            <Match match="Dobles1" player1={doublesA2} player2={doublesX2} />
            <Match match="Dobles2" player1={doublesB2} player2={doublesY2} />

            <Match match="AY" player1={playerA2} player2={playerY2} />
            <Match match="CW" player1={playerC2} player2={playerW2} />
            <Match match="DX" player1={playerD2} player2={playerX2} />
            <Match match="BZ" player1={playerB2} player2={playerZ2} />

            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
              <button className="sort-btn">Generar Reporte</button>

            </div>



      </div>  
      </form>

    </div>

   
    <div style={{height: 200}}></div>



    </div>
        
     );
}
 
export default Home;