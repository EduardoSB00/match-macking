import Blank from "./Blank";
const FullBlank = ({teamA, teamX, playerA2, playerB2, playerC2, playerD2, playerW2, playerX2, playerY2, playerZ2, doublesA2, doublesB2, doublesX2, doublesY2, category}) => {
    return ( 
        <div className="pdf-container" id="pdf-container" style={{backgroundColor: "white",  width: "100%",  minWidth: "1500px",   height: "7200px",  padding: '30px'}}>
        <Blank teamA={teamA} teamX={teamX} playerA={playerA2} playerX={playerW2} category={category}/>
        <Blank teamA={teamA} teamX={teamX} playerA={playerB2} playerX={playerX2} category={category}/>
        <Blank teamA={teamA} teamX={teamX} playerA={playerC2} playerX={playerY2} category={category}/>
        <Blank teamA={teamA} teamX={teamX} playerA={playerD2} playerX={playerZ2} category={category}/>

        <Blank teamA={teamA} teamX={teamX} playerA={playerA2} playerX={playerX2} category={category}/>
        <Blank teamA={teamA} teamX={teamX} playerA={playerB2} playerX={playerW2} category={category}/>
        <Blank teamA={teamA} teamX={teamX} playerA={playerD2} playerX={playerY2} category={category}/>
        <Blank teamA={teamA} teamX={teamX} playerA={playerC2} playerX={playerZ2} category={category}/>

        <Blank teamA={teamA} teamX={teamX} playerA={doublesA2} playerX={doublesX2} category={category}/>
        <Blank teamA={teamA} teamX={teamX} playerA={doublesB2} playerX={doublesY2} category={category}/>

        <Blank teamA={teamA} teamX={teamX} playerA={playerA2} playerX={playerY2} category={category}/>
        <Blank teamA={teamA} teamX={teamX} playerA={playerC2} playerX={playerW2} category={category}/>
        <Blank teamA={teamA} teamX={teamX} playerA={playerD2} playerX={playerX2} category={category}/>
        <Blank teamA={teamA} teamX={teamX} playerA={playerB2} playerX={playerZ2} category={category}/> 
      </div>

     );
}
 
export default FullBlank;