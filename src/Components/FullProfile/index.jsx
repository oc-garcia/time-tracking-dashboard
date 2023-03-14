import { useContext } from "react";
import { TimeLapseContext } from "../../Hooks/Context/TimeLapseContext";

import TimeTrackerCard from "../TimeTrackerCard";
import UserCard from "../UserCard";

import style from "./FullProfile.module.css";
import userData from "../../Assets/Data/data.json";

export default function FullProfile() {
  const hours = userData[0].hours;

  const { timeLapse, handleTimeLapse } = useContext(TimeLapseContext);

  const actualInput = `data.timeframes.${timeLapse}.current`;
  
  const previousInput = `data.timeframes.${timeLapse}.previous`;
  
  return (
    <section className={style.ProfileContainer}>
      <div className={style.UserContainer}>
        <UserCard name={userData[0].user} avatar={userData[0].avatar} />
      </div>
      <div className={style.TimeContainer}>
        {hours.map((data) => {
          return (
            <TimeTrackerCard
              key={data.title}
              title={data.title}
              actual={eval(actualInput)}
              previous={eval(previousInput)}
              theme={data.title}
            />
          );
        })}
      </div>
    </section>
  );
}
