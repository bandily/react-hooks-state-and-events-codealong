import React from "react";
import {useStte} from "react";

function Toggle() {

  const [isON, setIsOn] = useState(false)

  function handleClick() {
    setIsOn((isON) => !isOn)
  }

  const color = isOn ? "red" : "white"

  return <button style={{background: color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
