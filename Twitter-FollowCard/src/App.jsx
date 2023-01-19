import { useState } from 'react'

import './App.css'
import { TwitterFollowCard } from './followCard.jsx'

const users = [
  {
    userName: 'Phineas',
    name: 'phineas',
    isFollowing: false,
  },
  {
    userName: 'lamar',
    name: 'lamar',
    isFollowing: true
  },
  {
    userName: 'news',
    name: 'News',
    isFollowing: false
  },
  {
    userName: 'dory',
    name: 'Dory',
    isFollowing: true
  }
]

export function App () {
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}