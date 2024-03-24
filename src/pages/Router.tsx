import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHealth from "./PageHealth";
import PageHome from "./PageHome";
import PageLogin from "./PageLogin";
import PageUser from "./PageUser";

export default function RouterProject() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<PageHome />} />
        <Route path="/" element={<PageLogin />} />
        <Route path="/health" element={<PageHealth />} />
        <Route path="/usuario" element={<PageUser />} />
      </Routes>
    </BrowserRouter>
  );
}
