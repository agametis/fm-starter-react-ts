import React, { useEffect } from "react";
import "./App.css";
import { initWebViewer, datenAnFMSenden, datenVonFMHolen } from "./functions";

const App: React.FC = () => {
  useEffect(() => {
    initWebViewer();
  }, []);

  return (
    <>
      <h1>Hallo Welt!</h1>
      <div className="card">
        <input placeholder="..." title="Daten" type="text" id="inputData" />
        <button onClick={() => datenAnFMSenden()}>Daten an FM senden</button>
        <button onClick={() => datenVonFMHolen()}>Daten von FM holen</button>
      </div>
    </>
  );
};

export default App;
