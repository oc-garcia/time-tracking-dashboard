import { createContext, useState } from "react";

export const TimeLapseContext = createContext();

export const TimeLapseProvider = ({ children }) => {
  const [timeLapse, setTimeLapse] = useState("daily");

  const handleTimeLapse = (prmt) => {
    if (prmt === "daily") {
      setTimeLapse("daily");
      console.log(timeLapse);
    } else if (prmt === "weekly") {
      setTimeLapse("weekly");
      console.log(timeLapse);
    } else if (prmt === "monthly") {
      setTimeLapse("monthly");
      console.log(timeLapse);
    }
  };

  return <TimeLapseContext.Provider value={{ timeLapse, handleTimeLapse }}>{children}</TimeLapseContext.Provider>;
};
