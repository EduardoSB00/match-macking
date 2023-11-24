import { Document, Page, div, p } from "@react-pdf/renderer";

const Blank = (props) => {
    return ( 

                <div className="blank-container">
                    <div className="title-container">
                        <h3 className="blank-title">LIGA SANPEDRANA TENIS DE MESA</h3>
                    </div>
                    <div className="blank-body-container">
                        <div className="first-header">
                            <p>{props.category ? props.category : "Categoria"}</p>
                            <p>Mesa:</p>
                        </div>
                        <div className="second-header">
                            <p>Nombre Equipo ABCD: {props.teamA}</p>
                            <p>Nombre Equipo XYZW: {props.teamX}</p>
                        </div>
                        
            

                        <div className="blank-table">
                            <div className="table-teams">
                                <div></div>
                                <div>{props.teamA}</div>
                                <div>{props.teamX}</div>
                            </div>
                            <div className="table-players">
                                <div>NOMBRE DE JUGADORES</div>
                                <div>{props.playerA}</div>
                                <div>{props.playerX}</div>
                            </div>
                            <div className="table-set">
                                <div>SET 1</div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="table-set">
                                <div>SET 2</div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="table-set">
                                <div>SET 3</div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="table-set">
                                <div>SET 4</div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="table-set">
                                <div>SET 5</div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="table-set table-set1">
                                <div>FINAL SETS</div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className="signatures-blank">
                            <p className="Signature-Blank">FIRMA EQUIPO GANADOR</p>
                            <p className="Signature-Blank">FIRMA EQUIPO PERDEDOR</p>
                            <p className="Signature-Blank">FIRMA ARBITRO</p>
                        </div>



                    </div>
                </div>

      
     );
}
 
export default Blank;