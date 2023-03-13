import React from 'react'

import style from './TimeTrackerCard.module.css'
import ellipsis from './icon-ellipsis.svg'

export default function TimeTrackerCard({title}) {
  return (
    <div className={style.TrackerContainer}>
      <div className={style.TrackerHeader}></div>
      <div className={style.TrackerTitleContainer}>
        <h2>{title}</h2>
        <img src={ellipsis} alt="Options" />  
      </div>
    </div>
  )
}
