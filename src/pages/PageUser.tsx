import SvgProfile from "@mui/icons-material/Person";
import SvgHealth from "@mui/icons-material/LocalHospital";
import SvgConfig from "@mui/icons-material/Settings";
import SideBar from "../components/SideBar";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ItemNav from "../components/ItemNav";
import SvgIcon from "@mui/icons-material/Home";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Input } from "../components/Input";
import { Box } from "@mui/material";
import { SyntheticEvent } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function PageUser() {
  function handleChange(
    event: SyntheticEvent<Element, Event>,
    value: any
  ): void {
    throw new Error("Function not implemented.");
  }
  const [value, setValue] = React.useState("1");

  return (
    <>
      <div className="flex flex-row justify-start">
        <SideBar>
          <div className="h-full">
            <ItemNav title="Home" onClick={() => { window.location.href = "/home"; }}>
              <SvgIcon className="" />
            </ItemNav>
            <ItemNav title="Profile">
              <SvgProfile className=" " onClick={() => { window.location.href = "/usuario"; }}/>
            </ItemNav>
            <ItemNav title="Health">
              <SvgHealth className=" " onClick={() => { window.location.href = "/health"; }}/>
            </ItemNav>
          </div>
          <div className="  my-5">
            <ItemNav title="Settings">
              <SvgConfig className=" " />
            </ItemNav>
          </div>
        </SideBar>
        <div className="flex flex-col w-full h-auto justify-center items-center m-10">
          <h1 className="text-5xl font-bold text-black mb-5">Profile</h1>
          <div className="bg-black text-white p-10 rounded-xl">
            <div className="flex flex-row justify-center items-center mt-5 h-max w-full ">
              <div className="items-center justify-center h-full ">
                <img
                  className="border border-white rounded-2xl mr-10 "
                  src="https://img001.prntscr.com/file/img001/rNLHK6T_RQqMes9c6BYyBw.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col w-full">
                  <p className="text-4xl font-bold mb-5">Jhan Doe</p>
                  <div className="flex flex-row">
                    <div className="flex flex-col w-full">
                      <Input title="E-mail" type="email" placeholder="Email" />
                      <Input title="Status" type="text" placeholder="Staus" />
                    </div>

                    <div className="flex flex-col w-full ml-5">
                      <Input
                        title="Birthday"
                        type="date"
                        placeholder="Birthday"
                      />
                      <Input title="Phone" type="tel" placeholder="Phone" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
