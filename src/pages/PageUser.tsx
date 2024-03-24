import SvgProfile from "@mui/icons-material/Person";
import SvgHealth from "@mui/icons-material/LocalHospital";
import SvgConfig from "@mui/icons-material/Settings";
import SideBar from "../components/SideBar";
import ItemNav from "../components/ItemNav";
import SvgIcon from "@mui/icons-material/Home";

import { Input } from "../components/Input";

export default function PageUser() {
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
