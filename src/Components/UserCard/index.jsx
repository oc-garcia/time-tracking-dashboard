import React from 'react'

import style from './UserCard.module.css'

export default function UserCard({name, avatar}) {
  return (
    <div className={style.UserCardContainer}>
      <div className={style.UserInformation}>
        <img src={avatar} alt='user profile avatar'/>
        <p>Report for</p>
        <h1>{name}</h1>
      </div>
      <div className={style.FilterControls}>
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthly</button>
      </div>
    </div>
  )
}
