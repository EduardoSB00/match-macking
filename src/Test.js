import Blank from "./Blank"
import React from "react";
import Pdf from "react-to-pdf";

const Test = () => {


    const ref = React.createRef();
    const ref2 = React.createRef();
    const ref3 = React.createRef();
    const ref4 = React.createRef();

    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [8.5,11]
    };

    var urlParameters = new URLSearchParams(window.location.search)
    var playerA2 = urlParameters.get("playerA")
    var playerB2 = urlParameters.get("playerB")
    var playerC2 = urlParameters.get("playerC")
    var playerD2 = urlParameters.get("playerD")

    var playerX2 = urlParameters.get("playerX")
    var playerY2 = urlParameters.get("playerY")
    var playerZ2 = urlParameters.get("playerZ")
    var playerW2 = urlParameters.get("playerW")

    var doublesA2 = urlParameters.get("doublesA")
    var doublesB2 = urlParameters.get("doublesB")

    var doublesX2 = urlParameters.get("doublesX")
    var doublesY2 = urlParameters.get("doublesY")

    var teamA = urlParameters.get("teamA")
    var teamX = urlParameters.get("teamX")

    var category = urlParameters.get("category")

    function handleButton(){
        document.getElementById("button1").click();
        document.getElementById("button2").click();
        document.getElementById("button3").click();
        document.getElementById("button4").click();
    }

    return ( 
        <div>

            <button onClick={handleButton}>Descargar Plantillas</button>

            <div style={{display:"none"}}>
                <Pdf targetRef={ref} filename="Plantilla-1.pdf" scale={0.5} options={options}>
                    {({ toPdf }) => <button onClick={toPdf} id="button1">Generate Pdf</button>}
                </Pdf>

                <Pdf targetRef={ref2} filename="Plantilla-2.pdf" scale={0.5} options={options}>
                    {({ toPdf }) => <button onClick={toPdf} id="button2">Generate Pdf2</button>}
                </Pdf>

                <Pdf targetRef={ref3} filename="Plantilla-3.pdf" scale={0.5} options={options}>
                    {({ toPdf }) => <button onClick={toPdf} id="button3">Generate Pdf3</button>}
                </Pdf>

                <Pdf targetRef={ref4} filename="Plantilla-4.pdf" scale={0.5} options={options}>
                    {({ toPdf }) => <button onClick={toPdf} id="button4">Generate Pdf4</button>}
                </Pdf>
    
            </div>

            <div ref={ref}  className="pdf-container" id="pdf-container" style={{backgroundColor: "white",  width: "100%",  minWidth: "1500px",   padding: '30px'}}>
                <Blank teamA={teamA} teamX={teamX} playerA={playerA2} playerX={playerW2} category={category}/>
                <Blank teamA={teamA} teamX={teamX} playerA={playerB2} playerX={playerX2} category={category}/>
                <Blank teamA={teamA} teamX={teamX} playerA={playerC2} playerX={playerY2} category={category}/>
                <Blank teamA={teamA} teamX={teamX} playerA={playerD2} playerX={playerZ2} category={category}/>
            </div>
            <div ref={ref2}  className="pdf-container" id="pdf-container" style={{backgroundColor: "white",  width: "100%",  minWidth: "1500px",    padding: '30px'}}>
                <Blank teamA={teamA} teamX={teamX} playerA={playerA2} playerX={playerX2} category={category}/>
                <Blank teamA={teamA} teamX={teamX} playerA={playerB2} playerX={playerW2} category={category}/>
                <Blank teamA={teamA} teamX={teamX} playerA={playerD2} playerX={playerY2} category={category}/>
                <Blank teamA={teamA} teamX={teamX} playerA={playerC2} playerX={playerZ2} category={category}/>
            </div>

            <div ref={ref3}  className="pdf-container" id="pdf-container" style={{backgroundColor: "white",  width: "100%",  minWidth: "1500px",   padding: '30px'}}>
                <Blank teamA={teamA} teamX={teamX} playerA={doublesA2} playerX={doublesX2} category={category}/>
                <Blank teamA={teamA} teamX={teamX} playerA={doublesB2} playerX={doublesY2} category={category}/>
            </div>

            <div ref={ref4}  className="pdf-container" id="pdf-container" style={{backgroundColor: "white",  width: "100%",  minWidth: "1500px",   padding: '30px'}}>
                <Blank teamA={teamA} teamX={teamX} playerA={playerA2} playerX={playerY2} category={category}/>
                <Blank teamA={teamA} teamX={teamX} playerA={playerC2} playerX={playerW2} category={category}/>
                <Blank teamA={teamA} teamX={teamX} playerA={playerD2} playerX={playerX2} category={category}/>
                <Blank teamA={teamA} teamX={teamX} playerA={playerB2} playerX={playerZ2} category={category}/> 
            </div>

        </div>
  
     );
}
 
export default Test;