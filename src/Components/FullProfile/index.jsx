import React from 'react'

import TimeTrackerCard from '../TimeTrackerCard'
import UserCard from '../UserCard'

import style from './FullProfile.module.css'
import userData from '../../Assets/Data/data.json'

export default function FullProfile() {

  const hours = userData[0].hours

  return (
    <section className={style.ProfileContainer}>
      <div className={style.UserContainer}>
        <UserCard name={userData[0].user} avatar={userData[0].avatar} />
      </div>
      <div className={style.TimeContainer}>
        {hours.map(data => {
          return(
          <TimeTrackerCard
          key={data.title} 
          title={data.title}
          actual={data.timeframes.daily.current}
          previous={data.timeframes.daily.previous}
          theme={data.title}
          />
          )
        })}
      </div>
    </section>
  )
}
