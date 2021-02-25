import * as React from "react";
import { useContext, useState, useRef, useEffect } from "react";
import InputContext from "../context/InputContext";
import CommandList from "./CommandList";
import axios from "axios";
interface Props {
  onPress?: any;
}

const Landing = ({ onPress }: Props) => {
  const [value, valueDispatch]: any = useContext(InputContext);
  const [Result, setResult] = useState<any[]>([]);
  const InputRef: React.MutableRefObject<any> = useRef();
  function handleChange(e: any) {
    valueDispatch({
      type: "SET_INPUT",
      value: e.target.value,
    });
  }
  function handlePress(e: any) {
    if (e.key === "Enter") {
      if (value === "clear") {
        valueDispatch({
          type: "CLEAR",
        });
        setResult([]);
      } else {
        axios.get(`http://localhost:5000/api/?search=${value}`).then((res) => {
          setResult(res.data.items);
          valueDispatch({
            type: "CLEAR",
          });
        });
      }
      onPress();
    }
  }
  useEffect(() => {
    InputRef.current.focus();
  }, []);

  // useEffect(() => {
  //   if (Result.length === 1) {

  //   }
  // }, [Result]);
  return (
    <div>
      <div className="w-1/2 mx-auto">
        <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
          <div
            className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
            id="headerTerminal"
          >
            <div
              className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
              id="closebtn"
            ></div>
            <div
              className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
              id="minbtn"
            ></div>
            <div
              className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
              id="maxbtn"
            ></div>
            <div className="mx-auto pr-16" id="terminaltitle">
              <p className="text-center text-sm">Terminal</p>
            </div>
          </div>
          <div
            className="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black"
            id="console"
          >
            <p className="pb-1">Last login: Wed Sep 25 09:11:04 on ttys002</p>
            <p className="pb-1">
              Laraben:Devprojects laraben$ &nbsp;
              <input
                className="pb-1 bg-black focus:outline-none w-2/3"
                type="text"
                value={value}
                onChange={handleChange}
                onKeyPress={handlePress}
                placeholder="명령어를 입력하세요"
                ref={InputRef}
              />
            </p>
            {Result.length !== 0
              ? Result.map((data) => {
                  return <CommandList data={data} />;
                })
              : ""}
            {Result.length === 1 ? <p>발매날짜: {Result[0].released}</p> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
