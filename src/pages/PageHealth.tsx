import React, { useState } from "react";
import SvgProfile from "@mui/icons-material/Person";
import SvgHealth from "@mui/icons-material/LocalHospital";
import SvgConfig from "@mui/icons-material/Settings";
import SideBar from "../components/SideBar";
import ItemNav from "../components/ItemNav";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";

interface FormData {
  historico_doencas: string;
  medicamentos_usados: string;
  alergias: string;
  vacinas: string;
  tipo_sanguineo: string;
}

export default function PageHealth() {
  const [formData, setFormData] = useState<FormData>({
    historico_doencas: "",
    medicamentos_usados: "",
    alergias: "",
    vacinas: "",
    tipo_sanguineo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-row justify-start">
      <SideBar>
        <div className="h-full">
          <ItemNav title="Home"
          onClick={() => { window.location.href = "/home"; }}
          >
            <SvgProfile />
          </ItemNav>
          <ItemNav title="Profile"
          onClick={() => { window.location.href = "/usuario"; }}>
            <SvgProfile />
          </ItemNav>
          <ItemNav title="Health" onClick={() => { window.location.href = "/health"; }}>
            <SvgHealth />
          </ItemNav>
        </div>
        <div className="my-5">
          <ItemNav title="Settings">
            <SvgConfig />
          </ItemNav>
        </div>
      </SideBar>
      <div className="flex flex-col w-full h-min justify-center items-center m-10">
        <h1 className="text-5xl font-bold text-black mb-5">Health</h1>
        <div className="bg-black text-white p-10 rounded-xl w-4/6 h-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Input
                title="Tipo Sanguíneo"
                name="tipo_sanguineo"
                value={formData.tipo_sanguineo}
                onChange={handleChange}
              />
              <Input
                title="Medicamentos Usados"
                name="medicamentos_usados"
                value={formData.medicamentos_usados}
                onChange={handleChange}
              />
              <Input
                title="Alergias"
                name="alergias"
                value={formData.alergias}
                onChange={handleChange}
              />
              <Input
                title="Vacinas"
                name="vacinas"
                value={formData.vacinas}
                onChange={handleChange}
              />
            </div>
            <Input
              title="Histórico de Doenças"
              name="historico_doencas"
              value={formData.historico_doencas}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
