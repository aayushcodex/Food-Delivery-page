import React, { useState } from 'react'
import './Home.css'
import { Header } from '../../Headers/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'

export const Home = () => {

  const [category, setCategory] = useState("All")
  return (
    <div>
       <Header/>
      < ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}
