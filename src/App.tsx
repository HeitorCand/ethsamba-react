import "./App.css";
import HookMqtt from "./Hook";
import PageHome from "./pages/PageHome";
import PageLogin from "./pages/PageLogin";
import PageUser from "./pages/PageUser";

function App() {
  return (
    <>
      <div style={{ fontFamily: "Inter" }}>
        {/* <HookMqtt /> */}
        {/* <PageLogin /> */}
        {/* <PageHome/>  */}
        <PageUser />
      </div>
    </>
  );
}

export default App;
