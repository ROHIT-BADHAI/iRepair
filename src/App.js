// import logo from "./logo.svg";
import "./App.css";
import logo from "./components/logo.jpg"
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

  const query = encodeURIComponent(`Select B,C,F,G,I,M where A=${id}`);
  const url =
    process.env.REACT_APP_URL +
    "&tq=" +
    query;

  const handleFetch = () => {
    setPending(true);
    if (!id?.trim()) {
      setPending(false)
      setInputError("Please enter your invoice number!");
      setError("")
      setDetails({})
      return;
    }
    setInputError("");

    fetch(url)
      .then((res) => res.text())
      .then((rep) => {
        const data = JSON.parse(rep.substr(47).slice(0, -2));
        if (data?.table?.rows?.length == 0 || !data) {
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
          data?.table?.rows.forEach((main) => {
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
        {pending?<img className="loader" height="40px" width="40px" src={loader}/>: details.length > 0 ? <Details details={details} /> : <span className="error2">{error}</span>}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
