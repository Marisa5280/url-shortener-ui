import React, { useState, useEffect } from "react";
import "./App.css";
import { getUrls, postUrl } from "../../apiCalls";
import UrlContainer from "../UrlContainer/UrlContainer";
import UrlForm from "../UrlForm/UrlForm";

function App() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    console.log("geturls", getUrls);
    getUrls().then((data) => {
      setUrls(data.urls);
    });
  }, []);

  function addUrl(data) {
    console.log('datapost', data)
    postUrl(data).then((newUrl) => {
      setUrls([...urls, newUrl]);
    });
  }

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm addUrl={addUrl} />
      </header>

      <UrlContainer urls={urls} />
    </main>
  );
}

export default App;
