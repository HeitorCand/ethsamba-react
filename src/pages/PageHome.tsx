import SvgProfile from "@mui/icons-material/Person";
import SvgHealth from "@mui/icons-material/LocalHospital";
import SvgConfig from "@mui/icons-material/Settings";
import SideBar from "../components/SideBar";
import ItemNav from "../components/ItemNav";
import SvgIcon from "@mui/icons-material/Home";

export default function PageHome() {
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
        <div className="flex flex-col w-full h-screen items-center justify-center">
          <h1 className="text-7xl font-bold text-black ">OUR GOAL</h1>
          <p className="text-black text-center mt-5 text-lg font-medium">
            is to make your life easier with just one touch.
          </p>

          <p className="text-neutral-700 text-center mt-5 text-wrap w-2/5">
            A digital identity platform, using biometrics and blockchain to
            manage secure and immutable identities, promoting privacy and
            security.
          </p>
        </div>
      </div>
    </>
  );
}
