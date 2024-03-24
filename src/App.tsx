import mqtt, { IClientOptions } from "mqtt";
import { useEffect } from "react";
import "./App.css";
import RouterProject from "./pages/Router";

function App() {
  
  return (
    <>
      <div style={{ fontFamily: "Inter" }}>
        {/* <HookMqtt /> */}
        <RouterProject />
        {/* <PageLogin /> */}
        {/* <PageHome/>  */}
        {/* <PageUser /> */}
        {/* <PageHealth /> */}
      </div>
    </>
  );
}

export default App;
