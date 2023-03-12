import React from 'react'

import TimeTrackerCard from '../TimeTrackerCard'
import UserCard from '../UserCard'

import style from './FullProfile.module.css'
import data from '../../Assets/Data/data.json'

export default function FullProfile() {

  console.log(data)
  return (
    <section className={style.ProfileContainer}>
      <div className={style.UserContainer}>
        <UserCard name={data[0].user} avatar={data[0].avatar} />
      </div>
      <div className={style.TimeContainer}>
        <TimeTrackerCard />
        <TimeTrackerCard />
        <TimeTrackerCard />
        <TimeTrackerCard />
        <TimeTrackerCard />
        <TimeTrackerCard />
      </div>
    </section>
  )
}
