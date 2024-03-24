import SvgIcon from "@mui/icons-material/Home";

import ItemNav from "./ItemNav";

export default function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-black h-screen flex flex-col rounded-r-2xl justify-center items-center">
        <h1 className="text-white text-2xl font-bold p-5">BioTrust</h1>
        <div className="flex flex-col h-full w-full items-center">
          {children}
        </div>
      </div>
    </>
  );
}
