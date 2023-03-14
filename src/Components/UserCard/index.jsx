import { useContext } from "react";
import { TimeLapseContext } from "../../Hooks/Context/TimeLapseContext";

import style from "./UserCard.module.css";

export default function UserCard({ name, avatar }) {
  const { timeLapse, handleTimeLapse } = useContext(TimeLapseContext);

  return (
    <div className={style.UserCardContainer}>
      <div className={style.UserInformation}>
        <img src={avatar} alt="user profile avatar" />
        <p>Report for</p>
        <h1>{name}</h1>
      </div>
      <div className={style.FilterControls}>
        <button
          className={timeLapse === "daily" ? style.activeBtn : style.deactiveBtn}
          onClick={() => handleTimeLapse("daily")}>
          Daily
        </button>
        <button
          className={timeLapse === "weekly" ? style.activeBtn : style.deactiveBtn}
          onClick={() => handleTimeLapse("weekly")}>
          Weekly
        </button>
        <button
          className={timeLapse === "monthly" ? style.activeBtn : style.deactiveBtn}
          onClick={() => handleTimeLapse("monthly")}>
          Monthly
        </button>
      </div>
    </div>
  );
}
