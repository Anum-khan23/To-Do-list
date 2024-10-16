import type { NextPage } from "next"
import Todolist from '../components/Todolist';
import React from 'react'
// import {Todo} from './components/Todolist'

const Home: NextPage =() =>{
  return (
    <div>
      <Todolist />
    </div>
  )
}
export default Home