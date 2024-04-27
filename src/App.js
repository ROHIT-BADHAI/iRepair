import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
import Details from "./components/Details";
import Header from "./components/Header";
import Footer from "./components/Footer";
import loader from './components/Loader.gif'
function App() {
  const [id, setId] = useState();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState("");
  const [inputError, setInputError] = useState("");
  const [pending, setPending] = useState(false);
  let SHEET_ID = "16ME-6bxONaXXJPNyGTEhmMEeKSTm8yFYmwbpa91NBBk";
  let SHEET_TITLE = "iRepairs";

  const query = encodeURIComponent(`Select C,F,G,I,M where A=${id}`);
  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?` +
    "&tq=" +
    query;

  const handleFetch = () => {
    setPending(true);
    if (!id?.trim()) {
      setPending(false)
      setInputError("Please enter your invoice number!");
      setError("")
      return;
    }
    setInputError("");
    fetch(url)
      .then((res) => res.text())
      .then((rep) => {
        const data = JSON.parse(rep.substr(47).slice(0, -2));
        console.log(data.table.rows.length);
        if (data.table.rows.length == 0) {
          setDetails([]);
          setError(
            "Invalid invoice number please enter correct invoice number"
          );
          setPending(false)
        }
        // data.table.rows.forEach((heading)=>{
        //   console.log(heading)
        //     setHeading(heading)
        // })
        else {
          data.table.rows.forEach((main) => {
            setError("");
            setDetails(main.c);
            setPending(false);
          });
        }
      });
  };
  return (
    <div className="main">
    
      <div className="nav">
        <Header />
      </div>
      <div className="content">
        <Input
          setId={setId}
          id={id}
          handleFetch={handleFetch}
          inputError={inputError}
        />
        {pending?<img height="40px" width="40px" src={loader}/>: details.length > 0 ? <Details details={details} /> : <h2>{error}</h2>}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;