import React from "react";
import Pdf from "react-to-pdf";

const Report = () => {

    function setPoints(result, comparator){
        if (result == comparator){
            return 1;
        }

        return 0;
    }

    function totalPoints (...rest){
        var thisTotalPoints = 0;
        for (const item of rest){
            thisTotalPoints += parseInt(item);
        }

        return thisTotalPoints;
    }

    const ref1 = React.createRef();

    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [11,8.5]
    };

    var urlParameters = new URLSearchParams(window.location.search)


    var captainA = urlParameters.get("captainA")
    var captainX = urlParameters.get("captainX")

    var teamA = urlParameters.get("teamA")
    var teamX = urlParameters.get("teamX")

    var category = urlParameters.get("category")

    var playerA = urlParameters.get("playerA")
    var playerB = urlParameters.get("playerB")
    var playerC = urlParameters.get("playerC")
    var playerD = urlParameters.get("playerD")

    var playerX = urlParameters.get("playerX")
    var playerY = urlParameters.get("playerY")
    var playerZ = urlParameters.get("playerZ")
    var playerW = urlParameters.get("playerW")

    var doublesA = urlParameters.get("doublesA")
    var doublesB = urlParameters.get("doublesB")

    var doublesX = urlParameters.get("doublesX")
    var doublesY = urlParameters.get("doublesY")

    var WinnerAW = urlParameters.get("Winner-AW")
    var WinnerBX = urlParameters.get("Winner-BX")
    var WinnerCY = urlParameters.get("Winner-CY")
    var WinnerDZ = urlParameters.get("Winner-DZ")

    var WinnerAX = urlParameters.get("Winner-AX")
    var WinnerBW = urlParameters.get("Winner-BW")
    var WinnerDY = urlParameters.get("Winner-DY")
    var WinnerCZ = urlParameters.get("Winner-CZ")

    var WinnerDoubles1 = urlParameters.get("Winner-Dobles1")
    var WinnerDoubles2 = urlParameters.get("Winner-Dobles2")

    var WinnerAY = urlParameters.get("Winner-AY")
    var WinnerCW = urlParameters.get("Winner-CW")
    var WinnerDX = urlParameters.get("Winner-DX")
    var WinnerBZ = urlParameters.get("Winner-BZ")

    var AWset1 = urlParameters.get("AW-set1")
    var AWset2 = urlParameters.get("AW-set2")
    var AWset3 = urlParameters.get("AW-set3")
    var AWset4 = urlParameters.get("AW-set4")
    var AWset5 = urlParameters.get("AW-set5")

    var BXset1 = urlParameters.get("BX-set1")
    var BXset2 = urlParameters.get("BX-set2")
    var BXset3 = urlParameters.get("BX-set3")
    var BXset4 = urlParameters.get("BX-set4")
    var BXset5 = urlParameters.get("BX-set5")

    var CYset1 = urlParameters.get("CY-set1")
    var CYset2 = urlParameters.get("CY-set2")
    var CYset3 = urlParameters.get("CY-set3")
    var CYset4 = urlParameters.get("CY-set4")
    var CYset5 = urlParameters.get("CY-set5")

    var DZset1 = urlParameters.get("DZ-set1")
    var DZset2 = urlParameters.get("DZ-set2")
    var DZset3 = urlParameters.get("DZ-set3")
    var DZset4 = urlParameters.get("DZ-set4")
    var DZset5 = urlParameters.get("DZ-set5")

    var AXset1 = urlParameters.get("AX-set1")
    var AXset2 = urlParameters.get("AX-set2")
    var AXset3 = urlParameters.get("AX-set3")
    var AXset4 = urlParameters.get("AX-set4")
    var AXset5 = urlParameters.get("AX-set5")

    var BWset1 = urlParameters.get("BW-set1")
    var BWset2 = urlParameters.get("BW-set2")
    var BWset3 = urlParameters.get("BW-set3")
    var BWset4 = urlParameters.get("BW-set4")
    var BWset5 = urlParameters.get("BW-set5")

    var DYset1 = urlParameters.get("DY-set1")
    var DYset2 = urlParameters.get("DY-set2")
    var DYset3 = urlParameters.get("DY-set3")
    var DYset4 = urlParameters.get("DY-set4")
    var DYset5 = urlParameters.get("DY-set5")

    var CZset1 = urlParameters.get("CZ-set1")
    var CZset2 = urlParameters.get("CZ-set2")
    var CZset3 = urlParameters.get("CZ-set3")
    var CZset4 = urlParameters.get("CZ-set4")
    var CZset5 = urlParameters.get("CZ-set5")

    var AWset1 = urlParameters.get("AW-set1")
    var AWset2 = urlParameters.get("AW-set2")
    var AWset3 = urlParameters.get("AW-set3")
    var AWset4 = urlParameters.get("AW-set4")
    var AWset5 = urlParameters.get("AW-set5")

    var AWset1 = urlParameters.get("AW-set1")
    var AWset2 = urlParameters.get("AW-set2")
    var AWset3 = urlParameters.get("AW-set3")
    var AWset4 = urlParameters.get("AW-set4")
    var AWset5 = urlParameters.get("AW-set5")

    var AYset1 = urlParameters.get("AY-set1")
    var AYset2 = urlParameters.get("AY-set2")
    var AYset3 = urlParameters.get("AY-set3")
    var AYset4 = urlParameters.get("AY-set4")
    var AYset5 = urlParameters.get("AY-set5")

    var CWset1 = urlParameters.get("CW-set1")
    var CWset2 = urlParameters.get("CW-set2")
    var CWset3 = urlParameters.get("CW-set3")
    var CWset4 = urlParameters.get("CW-set4")
    var CWset5 = urlParameters.get("CW-set5")

    var DXset1 = urlParameters.get("DX-set1")
    var DXset2 = urlParameters.get("DX-set2")
    var DXset3 = urlParameters.get("DX-set3")
    var DXset4 = urlParameters.get("DX-set4")
    var DXset5 = urlParameters.get("DX-set5")

    var BZset1 = urlParameters.get("BZ-set1")
    var BZset2 = urlParameters.get("BZ-set2")
    var BZset3 = urlParameters.get("BZ-set3")
    var BZset4 = urlParameters.get("BZ-set4")
    var BZset5 = urlParameters.get("BZ-set5")

    var Dobles1set1 = urlParameters.get("Dobles1-set1")
    var Dobles1set2 = urlParameters.get("Dobles1-set2")
    var Dobles1set3 = urlParameters.get("Dobles1-set3")
    var Dobles1set4 = urlParameters.get("Dobles1-set4")
    var Dobles1set5 = urlParameters.get("Dobles1-set5")

    var Dobles2set1 = urlParameters.get("Dobles2-set1")
    var Dobles2set2 = urlParameters.get("Dobles2-set2")
    var Dobles2set3 = urlParameters.get("Dobles2-set3")
    var Dobles2set4 = urlParameters.get("Dobles2-set4")
    var Dobles2set5 = urlParameters.get("Dobles2-set5")

    const date = new Date();
    console.log(date)
    let day = date.getDate();
    let month = date.getMonth()+1;
    console.log(month)

    let year = date.getFullYear();

    function handleButton(){
        document.getElementById("button1").click();
    }


    return (
        <div>
              <div style={{display:"none"}}>
                <Pdf targetRef={ref1} filename="Reporte.pdf" scale={0.635} options={options}>
                    {({ toPdf }) => <button onClick={toPdf} id="button1">Generate Pdf</button>}
                </Pdf>
            </div>

        <button onClick={handleButton}>Descargar Plantillas</button>
        <div className="report-container" ref={ref1}  style={{backgroundColor: "white",  width: "100%",  minWidth: "1500px",   padding: '30px'}}>

            <div className="report-title">
                <h3>LIGA SAMPEDRANA DE TENNIS DE MESA / PLANILLA DE LA SERIE</h3>
            </div>
            <div className="report-body">
                <div className="report-div1">
                    <div className="column-x" style={{backgroundColor:"#E6E6E6"}}>
                        <div className="columnrow-x"><p style={{margin:0}}>Director de Liga</p><p style={{margin:0}}>Jerome Marchand</p></div>
                    </div>
                    <div style={{width:"1020px", height:"100%", display:"flex", flexDirection:"column"}}>
                        <div style={{width:"1020px", height:"50%", display:"flex"}}>
                            <div style={{width:"200px", height:"100%", border: "black 2px solid",backgroundColor:"#E6E6E6"}}>LUGAR DE ENCUENTRO</div>
                            <div style={{width:"600px", height:"100%", border: "black 2px solid",backgroundColor:"#E6E6E6"}}>INSTITUTO 1 de MAYO DE 1954, COLONIA FESITRANH, SPS</div>
                            <div style={{width:"320px", height:"100%", border: "black 2px solid",backgroundColor:"#E6E6E6"}}>CLUB ANFITRION CLUB SULA</div>
                        </div>
                        <div style={{width:"1020px", height:"50%",  display: "flex"}}>
                            <div style={{width:"200px", height:"100%", border: "black 2px solid"}}>FECHA: {day+"/"+month+"/"+year}</div>
                            <div style={{width:"300px", height:"100%", border: "black 2px solid"}}>HORA DE INICIO:</div>
                            <div style={{width:"300px", height:"100%", border: "black 2px solid"}}>HORA DE FINALIZACION:</div>
                            <div style={{width:"320px", height:"100%", border: "black 2px solid", textTransform: "uppercase"}}>{category ? category : "CATEGORIA: "}</div>
                        </div>


                    </div>

                </div>
                <div className="report-div2">
                    <div className="column-1">
                        <div className="columnHeader">No.</div>
                        <div className="columnrow">Jugador</div>
                        <div className="columnrow"></div>
                        <div className="columnrow"></div>
                        <div className="columnrow"></div>
                        <div className="columnrow"></div>
                        <div className="columnrow"></div>
                        <div className="columnrow"></div>
                        <div className="columnrow"></div>
                    </div>
                    <div className="column-2">
                        <div className="columnHeader">No.______</div>
                        <div className="columnrow">Equipo</div>
                        <div className="columnrow">A</div>
                        <div className="columnrow">B</div>
                        <div className="columnrow">C</div>
                        <div className="columnrow">D</div>
                        <div className="columnrow">DOBLE 1</div>
                        <div className="columnrow">DOBLE 2</div>
                        <div className="columnrow">CAPITAN</div>
                    </div>
                    <div className="column-3">
                        <div className="columnHeader">{teamA}</div>
                        <div className="columnrow">Nombre de Jugadores de la Serie</div>
                        <div className="columnrow">{playerA}</div>
                        <div className="columnrow">{playerB}</div>
                        <div className="columnrow">{playerC}</div>
                        <div className="columnrow">{playerD}</div>
                        <div className="columnrow">{doublesA}</div>
                        <div className="columnrow">{doublesB}</div>
                        <div className="columnrow">{captainA}</div>
                    </div>
                    <div className="column-4">
                        <div className="columnHeader"></div>
                        <div className="columnrow">Puntos</div>
                        <div className="columnrow">{totalPoints(setPoints(WinnerAW,"true"),setPoints(WinnerAX,"true"),setPoints(WinnerAY,"true"))}</div>
                        <div className="columnrow">{totalPoints(setPoints(WinnerBX,"true"),setPoints(WinnerBW,"true"),setPoints(WinnerBZ,"true"))}</div>
                        <div className="columnrow">{totalPoints(setPoints(WinnerCY,"true"),setPoints(WinnerCZ,"true"),setPoints(WinnerCW,"true"))}</div>
                        <div className="columnrow">{totalPoints(setPoints(WinnerDZ,"true"),setPoints(WinnerDY,"true"),setPoints(WinnerDX,"true"))}</div>
                        <div className="columnrow">{totalPoints(setPoints(WinnerDoubles1,"true"))}</div>
                        <div className="columnrow">{totalPoints(setPoints(WinnerDoubles2,"true"))}</div>
                        <div className="columnrow">-</div>
                    </div>
                    <div className="column-5">
                        <div className="columnHeader">No.</div>
                        <div className="columnrow">Jugador</div>
                        <div className="columnrow"></div>
                        <div className="columnrow"></div>
                        <div className="columnrow"></div>
                        <div className="columnrow"></div>
                        <div className="columnrow"></div>
                        <div className="columnrow"></div>
                        <div className="columnrow"></div>
                    </div>
                    <div className="column-6">
                        <div className="columnHeader">No.______</div>
                        <div className="columnrow">Equipo</div>
                        <div className="columnrow">X</div>
                        <div className="columnrow">Y</div>
                        <div className="columnrow">Z</div>
                        <div className="columnrow">W</div>
                        <div className="columnrow">DOBLE 1</div>
                        <div className="columnrow">DOBLE 2</div>
                        <div className="columnrow">CAPITAN</div>
                    </div>
                    <div className="column-7">
                        <div className="columnHeader">{teamX}</div>
                        <div className="columnrow">Nombre de Jugadores de la Serie</div>
                        <div className="columnrow">{playerX}</div>
                        <div className="columnrow">{playerY}</div>
                        <div className="columnrow">{playerZ}</div>
                        <div className="columnrow">{playerW}</div>
                        <div className="columnrow">{doublesX}</div>
                        <div className="columnrow">{doublesY}</div>
                        <div className="columnrow">{captainX}</div>
                    </div>
                    <div className="column-8">
                        <div className="columnHeader"></div>
                        <div className="columnrow">Puntos</div>
                        <div className="columnrow">{totalPoints(setPoints(WinnerBX,"false"),setPoints(WinnerAX,"false"),setPoints(WinnerDX,"false"))}</div>
                        <div className="columnrow">{totalPoints(setPoints(WinnerCY,"false"),setPoints(WinnerDY,"false"),setPoints(WinnerAY,"false"))}</div>
                        <div className="columnrow">{totalPoints(setPoints(WinnerDZ,"false"),setPoints(WinnerCZ,"false"),setPoints(WinnerBZ,"false"))}</div>
                        <div className="columnrow">{totalPoints(setPoints(WinnerAW,"false"),setPoints(WinnerBW,"false"),setPoints(WinnerCW,"false"))}</div>
                        <div className="columnrow">{totalPoints(setPoints(WinnerDoubles1,"false"))}</div>
                        <div className="columnrow">{totalPoints(setPoints(WinnerDoubles2,"false"))}</div>
                        <div className="columnrow">-</div>
                    </div>
                </div>

                <div className="report-div5">
                    <div className="columnHrow columnHrow1">
                        <div style={{height:25, width:"100%", borderBottom:"solid black 2px"}}>SCORES</div>
                        <div style={{display:"flex",height:25, width:"100%"}}>
                            <div className="column-1" style={{borderRight:"solid black 2px"}}>SET 1</div>
                            <div className="column-1" style={{borderRight:"solid black 2px"}}>SET 2</div>
                            <div className="column-1" style={{borderRight:"solid black 2px"}}>SET 3</div>
                            <div className="column-1" style={{borderRight:"solid black 2px"}}>SET 4</div>
                            <div className="column-1">SET 5</div>
                        </div>
                    </div>
                    <div className="columnHrow columnHrow2">ORDEN DE PARTIDOS</div>
                    <div className="columnHrow3">
                        <div style={{height:25, width:"100%", borderBottom:"solid black 2px"}}>PUNTOS</div>
                        <div style={{display:"flex",height:25, width:"100%"}}>
                            <div className="column-1" style={{borderRight:"solid black 2px"}}>ABCD</div>
                            <div className="column-1">WXYZ</div>
                        </div>
                    </div>
                </div>

                <div className="report-div3">
                    <div className="bigColumn1">
                        <div className="column-1">
                            <div className="columnrow">{AWset1 ? AWset1 : 0}</div>
                            <div className="columnrow">{BXset1 ? BXset1 : 0}</div>
                            <div className="columnrow">{CYset1 ? CYset1 : 0}</div>
                            <div className="columnrow">{DZset1 ? DZset1 : 0}</div>
                            <div className="columnrow">{AXset1 ? AXset1 : 0}</div>
                            <div className="columnrow">{BWset1 ? BWset1 : 0}</div>
                            <div className="columnrow">{DYset1 ? DYset1 : 0}</div>
                            <div className="columnrow">{CZset1 ? CZset1 : 0}</div>
                            <div className="columnrow">{Dobles1set1 ? Dobles1set1 : 0}</div>
                            <div className="columnrow">{Dobles2set1 ? Dobles2set1 : 0}</div>
                            <div className="columnrow">{AYset1 ? AYset1 : 0}</div>
                            <div className="columnrow">{CWset1 ? CWset1 : 0}</div>
                            <div className="columnrow">{DXset1 ? DXset1 : 0}</div>
                            <div className="columnrow">{BZset1 ? BZset1 : 0}</div>
                        </div>
                        <div className="column-1">
                            <div className="columnrow">{AWset2 ? AWset2 : 0}</div>
                            <div className="columnrow">{BXset2 ? BXset2 : 0}</div>
                            <div className="columnrow">{CYset2 ? CYset2 : 0}</div>
                            <div className="columnrow">{DZset2 ? DZset2 : 0}</div>
                            <div className="columnrow">{AXset2 ? AXset2 : 0}</div>
                            <div className="columnrow">{BWset2 ? BWset2 : 0}</div>
                            <div className="columnrow">{DYset2 ? DYset2 : 0}</div>
                            <div className="columnrow">{CZset2 ? CZset2 : 0}</div>
                            <div className="columnrow">{Dobles1set2 ? Dobles1set2 : 0}</div>
                            <div className="columnrow">{Dobles2set2 ? Dobles2set2 : 0}</div>
                            <div className="columnrow">{AYset2 ? AYset2 : 0}</div>
                            <div className="columnrow">{CWset2 ? CWset2 : 0}</div>
                            <div className="columnrow">{DXset2 ? DXset2 : 0}</div>
                            <div className="columnrow">{BZset2 ? BZset2 : 0}</div>
                        </div>
                        <div className="column-1">
                            <div className="columnrow">{AWset3 ? AWset3 : 0}</div>
                            <div className="columnrow">{BXset3 ? BXset3 : 0}</div>
                            <div className="columnrow">{CYset3 ? CYset3 : 0}</div>
                            <div className="columnrow">{DZset3 ? DZset3 : 0}</div>
                            <div className="columnrow">{AXset3 ? AXset3 : 0}</div>
                            <div className="columnrow">{BWset3 ? BWset3 : 0}</div>
                            <div className="columnrow">{DYset3 ? DYset3 : 0}</div>
                            <div className="columnrow">{CZset3 ? CZset3 : 0}</div>
                            <div className="columnrow">{Dobles1set3 ? Dobles1set3 : 0}</div>
                            <div className="columnrow">{Dobles2set3 ? Dobles2set3 : 0}</div>
                            <div className="columnrow">{AYset3 ? AYset3 : 0}</div>
                            <div className="columnrow">{CWset3 ? CWset3 : 0}</div>
                            <div className="columnrow">{DXset3 ? DXset3 : 0}</div>
                            <div className="columnrow">{BZset3 ? BZset3 : 0}</div>
                        </div>
                        <div className="column-1">
                            <div className="columnrow">{AWset4 ? AWset4 : 0}</div>
                            <div className="columnrow">{BXset4 ? BXset4 : 0}</div>
                            <div className="columnrow">{CYset4 ? CYset4 : 0}</div>
                            <div className="columnrow">{DZset4 ? DZset4 : 0}</div>
                            <div className="columnrow">{AXset4 ? AXset4 : 0}</div>
                            <div className="columnrow">{BWset4 ? BWset4 : 0}</div>
                            <div className="columnrow">{DYset4 ? DYset4 : 0}</div>
                            <div className="columnrow">{CZset4 ? CZset4 : 0}</div>
                            <div className="columnrow">{Dobles1set4 ? Dobles1set4 : 0}</div>
                            <div className="columnrow">{Dobles2set4 ? Dobles2set4 : 0}</div>
                            <div className="columnrow">{AYset4 ? AYset4 : 0}</div>
                            <div className="columnrow">{CWset4 ? CWset4 : 0}</div>
                            <div className="columnrow">{DXset4 ? DXset4 : 0}</div>
                            <div className="columnrow">{BZset4 ? BZset4 : 0}</div>
                        </div>
                        <div className="column-1">
                            <div className="columnrow">{AWset5 ? AWset5 : 0}</div>
                            <div className="columnrow">{BXset5 ? BXset5 : 0}</div>
                            <div className="columnrow">{CYset5 ? CYset5 : 0}</div>
                            <div className="columnrow">{DZset5 ? DZset5 : 0}</div>
                            <div className="columnrow">{AXset5 ? AXset5 : 0}</div>
                            <div className="columnrow">{BWset5 ? BWset5 : 0}</div>
                            <div className="columnrow">{DYset5 ? DYset5 : 0}</div>
                            <div className="columnrow">{CZset5 ? CZset5 : 0}</div>
                            <div className="columnrow">{Dobles1set5 ? Dobles1set5 : 0}</div>
                            <div className="columnrow">{Dobles2set5 ? Dobles2set5 : 0}</div>
                            <div className="columnrow">{AYset5 ? AYset5 : 0}</div>
                            <div className="columnrow">{CWset5 ? CWset5 : 0}</div>
                            <div className="columnrow">{DXset5 ? DXset5 : 0}</div>
                            <div className="columnrow">{BZset5 ? BZset5 : 0}</div>
                        </div>
                    </div>
                    <div className="bigColumn2">
                        <div className="column-1">
                            <div className="columnrow">A</div>
                            <div className="columnrow">B</div>
                            <div className="columnrow">C</div>
                            <div className="columnrow">D</div>
                            <div className="columnrow">A</div>
                            <div className="columnrow">B</div>
                            <div className="columnrow">D</div>
                            <div className="columnrow">C</div>
                            <div className="columnrow">DOBLE1</div>
                            <div className="columnrow">DOBLE2</div>
                            <div className="columnrow">A</div>
                            <div className="columnrow">C</div>
                            <div className="columnrow">D</div>
                            <div className="columnrow">B</div>
                        </div>
                        <div className="column-7">
                            <div className="columnrow">{playerA}</div>
                            <div className="columnrow">{playerB}</div>
                            <div className="columnrow">{playerC}</div>
                            <div className="columnrow">{playerD}</div>
                            <div className="columnrow">{playerA}</div>
                            <div className="columnrow">{playerB}</div>
                            <div className="columnrow">{playerD}</div>
                            <div className="columnrow">{playerC}</div>
                            <div className="columnrow">{doublesA}</div>
                            <div className="columnrow">{doublesB}</div>
                            <div className="columnrow">{playerA}</div>
                            <div className="columnrow">{playerC}</div>
                            <div className="columnrow">{playerD}</div>
                            <div className="columnrow">{playerB}</div>
                        </div>
                        <div className="column-1">
                            <div className="columnrow">VRS</div>
                            <div className="columnrow">VRS</div>
                            <div className="columnrow">VRS</div>
                            <div className="columnrow">VRS</div>
                            <div className="columnrow">VRS</div>
                            <div className="columnrow">VRS</div>
                            <div className="columnrow">VRS</div>
                            <div className="columnrow">VRS</div>
                            <div className="columnrow">VRS</div>
                            <div className="columnrow">VRS</div>
                            <div className="columnrow">VRS</div>
                            <div className="columnrow">VRS</div>
                            <div className="columnrow">VRS</div>
                            <div className="columnrow">VRS</div>
                        </div>
                        <div className="column-1">
                            <div className="columnrow">W</div>
                            <div className="columnrow">X</div>
                            <div className="columnrow">Y</div>
                            <div className="columnrow">Z</div>
                            <div className="columnrow">X</div>
                            <div className="columnrow">W</div>
                            <div className="columnrow">Y</div>
                            <div className="columnrow">Z</div>
                            <div className="columnrow">DOBLE1</div>
                            <div className="columnrow">DOBLE2</div>
                            <div className="columnrow">Y</div>
                            <div className="columnrow">W</div>
                            <div className="columnrow">X</div>
                            <div className="columnrow">Z</div>
                        </div>
                        <div className="column-7">
                            <div className="columnrow">{playerW}</div>
                            <div className="columnrow">{playerX}</div>
                            <div className="columnrow">{playerY}</div>
                            <div className="columnrow">{playerZ}</div>
                            <div className="columnrow">{playerX}</div>
                            <div className="columnrow">{playerW}</div>
                            <div className="columnrow">{playerY}</div>
                            <div className="columnrow">{playerZ}</div>
                            <div className="columnrow">{doublesX}</div>
                            <div className="columnrow">{doublesY}</div>
                            <div className="columnrow">{playerY}</div>
                            <div className="columnrow">{playerW}</div>
                            <div className="columnrow">{playerX}</div>
                            <div className="columnrow">{playerZ}</div>
                        </div>
                    </div>
                    <div className="bigColumn3">
                        <div className="column-1">
                            <div className="columnrow">{setPoints(WinnerAW,"true")}</div>
                            <div className="columnrow">{setPoints(WinnerBX,"true")}</div>
                            <div className="columnrow">{setPoints(WinnerCY,"true")}</div>
                            <div className="columnrow">{setPoints(WinnerDZ,"true")}</div>
                            <div className="columnrow">{setPoints(WinnerAX,"true")}</div>
                            <div className="columnrow">{setPoints(WinnerBW,"true")}</div>
                            <div className="columnrow">{setPoints(WinnerDY,"true")}</div>
                            <div className="columnrow">{setPoints(WinnerCZ,"true")}</div>
                            <div className="columnrow">{setPoints(WinnerDoubles1,"true")}</div>
                            <div className="columnrow">{setPoints(WinnerDoubles2,"true")}</div>
                            <div className="columnrow">{setPoints(WinnerAY,"true")}</div>
                            <div className="columnrow">{setPoints(WinnerCW,"true")}</div>
                            <div className="columnrow">{setPoints(WinnerDX,"true")}</div>
                            <div className="columnrow">{setPoints(WinnerBZ,"true")}</div>
                            <div className="columnrow" style={{backgroundColor:"#E6E6E6"}}>{totalPoints(setPoints(WinnerAW,"true"),setPoints(WinnerBX,"true"),setPoints(WinnerCY,"true"),setPoints(WinnerDZ,"true"),setPoints(WinnerAX,"true"),setPoints(WinnerBW,"true"),setPoints(WinnerDY,"true"),setPoints(WinnerCZ,"true"),setPoints(WinnerDoubles1,"true"),setPoints(WinnerDoubles2,"true"),setPoints(WinnerAY,"true"),setPoints(WinnerCW,"true"),setPoints(WinnerDX,"true"),setPoints(WinnerBZ,"true"))}</div>
                        </div>
                        <div className="column-1" style={{width:95}}>
                            <div className="columnrow">{setPoints(WinnerAW,"false")}</div>
                            <div className="columnrow">{setPoints(WinnerBX,"false")}</div>
                            <div className="columnrow">{setPoints(WinnerCY,"false")}</div>
                            <div className="columnrow">{setPoints(WinnerDZ,"false")}</div>
                            <div className="columnrow">{setPoints(WinnerAX,"false")}</div>
                            <div className="columnrow">{setPoints(WinnerBW,"false")}</div>
                            <div className="columnrow">{setPoints(WinnerDY,"false")}</div>
                            <div className="columnrow">{setPoints(WinnerCZ,"false")}</div>
                            <div className="columnrow">{setPoints(WinnerDoubles1,"false")}</div>
                            <div className="columnrow">{setPoints(WinnerDoubles2,"false")}</div>
                            <div className="columnrow">{setPoints(WinnerAY,"false")}</div>
                            <div className="columnrow">{setPoints(WinnerCW,"false")}</div>
                            <div className="columnrow">{setPoints(WinnerDX,"false")}</div>
                            <div className="columnrow">{setPoints(WinnerBZ,"false")}</div>
                            <div className="columnrow"style={{backgroundColor:"#E6E6E6"}}>{14-totalPoints(setPoints(WinnerAW,"true"),setPoints(WinnerBX,"true"),setPoints(WinnerCY,"true"),setPoints(WinnerDZ,"true"),setPoints(WinnerAX,"true"),setPoints(WinnerBW,"true"),setPoints(WinnerDY,"true"),setPoints(WinnerCZ,"true"),setPoints(WinnerDoubles1,"true"),setPoints(WinnerDoubles2,"true"),setPoints(WinnerAY,"true"),setPoints(WinnerCW,"true"),setPoints(WinnerDX,"true"),setPoints(WinnerBZ,"true"))}</div>

                        </div>
                    </div>
                </div>

                <div className="report-div4">
                    <div className="column-10">
                        <div className="columnrow">EQUIPO 1</div>
                        <div className="columnHeader2"></div>
                        <div className="columnrow">FIRMA DEL CAPITAN</div>
                    </div>
                    <div className="column-10">
                        <div className="columnrow">EQUIPO 2</div>
                        <div className="columnHeader2"></div>
                        <div className="columnrow">FIRMA DEL CAPITAN</div>
                    </div>
                    <div className="column-10">
                        <div className="columnrow">FIRMA DEL DIRECTOR DE LA LIGA</div>
                        <div className="columnHeader2"></div>
                        <div className="columnrow"></div>
                    </div>
                </div>
            </div>
        </div>
        </div> 

     );
}
 
export default Report;