import SvgProfile from "@mui/icons-material/Person";
import SvgHealth from "@mui/icons-material/LocalHospital";
import SvgConfig from "@mui/icons-material/Settings";
import SideBar from "../components/SideBar";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ItemNav from "../components/ItemNav";
import SvgIcon from "@mui/icons-material/Home";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { Input } from "../components/Input";
import { Box } from "@mui/material";
import { SyntheticEvent } from "react";
import React from "react";

export default function PageUser() {
  function handleChange(event: SyntheticEvent<Element, Event>, value: any): void {
    throw new Error("Function not implemented.");
  }
  const [value, setValue] = React.useState('1');

  return (
    <>
      <div className="flex flex-row justify-start">
        <SideBar>
          <div className="h-full">
            <ItemNav title="Home">
              <SvgIcon className="" />
            </ItemNav>
            <ItemNav title="Profile">
              <SvgProfile className=" " />
            </ItemNav>
            <ItemNav title="Health">
              <SvgHealth className=" " />
            </ItemNav>
          </div>
          <div className="  my-5">
            <ItemNav title="Settings">
              <SvgConfig className=" " />
            </ItemNav>
          </div>
        </SideBar>

        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
        <div className="flex flex-col w-full h-auto justify-center items-center m-10">
          <h1 className="text-5xl font-bold text-black">Profile</h1>
          <div className="flex flex-row justify-center items-center mt-5 h-max w-full ">
            <div className="items-center justify-center h-full ">
              <img
                className="border border-black rounded-2xl mr-10 "
                src="https://img001.prntscr.com/file/img001/rNLHK6T_RQqMes9c6BYyBw.png"
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
              />
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col w-full">
                <Input title="Name" type="text" placeholder="Name" />

                <Input title="E-mail" type="email" placeholder="Email" />

                <Input title="Phone" type="tel" placeholder="Phone" />
              </div>
              <div className="flex flex-col w-full ml-5">
                <Input title="Address" type="text" placeholder="Address" />
                <Input
                  title="Mother's Name"
                  type="text"
                  placeholder="Mother's Name"
                />
                <Input title="Birthday" type="date" placeholder="Birthday" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

