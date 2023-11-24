
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./Test";
import ReportTest from "./ReportTest";


function App() {

  return(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/formTest" element={<Test />}></Route>
        <Route path="/reportTest" element={<ReportTest />}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
