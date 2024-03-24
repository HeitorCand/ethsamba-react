import CircularIconButton from "../components/ButtonCircular";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ContactlessIcon from "@mui/icons-material/Contactless";

import mqtt, { IClientOptions } from "mqtt";
import { useEffect } from "react";

export default function PageLogin() {
  const client = mqtt.connect('wss://mqtt-dashboard.com:8884/mqtt');
  useEffect(() => {
    const options: IClientOptions = {
      protocol: "wss",

    };
    const client = mqtt.connect('wss://mqtt-dashboard.com:8884/mqtt', options);
    // const client = mqtt.connect(options);
    client.on('connect', function () {
        console.log('Connected');
        client.subscribe("INTELIHACK/PUB/CREATE", (err) => {
          if (!err) {
            client.publish("OI/EEE", "Hello mqtt");
          }
        });
        client.subscribe("INTELIHACK/PUB/CHECK", (err) => {
          if (!err) {
            client.publish("OI/EEE", "Hello mqtt");
          }
        });
        client.subscribe("INTELIHACK/PUB/RFID", (err) => {
          if (!err) {
            client.publish("OI/EEE", "Hello mqtt");
          }
        });
    });



  
    client.on('error', function (error) {
        console.log("ERROR", error);
    });
    client.on('message', (topic,message,packet)=>{
        console.log("RECEIVE", topic)
        console.log(message.toString());
       // console.log("RECEIVE", packet)
    });
  }, []);

  return (
  
    <div className="flex flex-row h-full w-full ">
      <div className="flex flex-col items-center h-screen w-full bg-gradient-to-br from-neutral-950 to-gray-700">
        <h1 className="font-bold text-white text-8xl pt-5">BioTrust</h1>
        <p className="text-base text-white pt-5 font-semibold">
          Security and practicality at your touch
        </p>
        <div className="flex flex-col bg-white w-3/6 mt-5 items-center rounded-lg mb-5 ">
          <div className="p-5 flex flex-row  w-full h-min justify-center">
            <div className="flex flex-col w-full justify-center items-center">
              <p className="text-5xl text-black font-semibold text-center m-5">
                Fingerprint
              </p>
              <div className="flex justify-center items-center">
                <CircularIconButton
                  className="h-60 w-60"
                  classNameIcon="h-40 w-40"
                  icon={FingerprintIcon}
                  onClick={() => { client.publish("INTELIHACK/SUB", "check"); }}
                />
              </div>
            </div>
            <div className="bg-black w-1 ml-5 rounded-full"></div>
            <div className="flex flex-col justify-center items-center w-full">
              <p className="text-5xl text-black m-5 font-semibold text-center">
                RFID
              </p>
              <div className="flex justify-center items-center">
                <CircularIconButton
                  className="h-60 w-60"
                  classNameIcon="h-40 w-40"
                  icon={ContactlessIcon}
                  onClick={() => { client.publish("INTELIHACK/SUB", "rfidcheck"); }}
                />
              </div>
            </div>
          </div>
          <p className="text-black m-8 justify-end text-xl">
            Access by biometrics/ RFID or{" "}
            <a href="" className="text-blue-800 hover:underline">
              subscribe now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

