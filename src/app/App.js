import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import styles from './App.module.css'
//components
import NavBar from '../components/NavBar/NavBar';
//functions
import { getData } from '../api/index'
import SideBar from '../components/SideBar/SideBar';
import Description from '../components/Description/Description';

const App = () => {

  const dispatch = useDispatch()
  const [test, setTest] = useState(false)

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div className={styles.app} onClick={() => setTest(false)}>
      <NavBar test={test} setTest={setTest}/>
      <div className={styles.content}>
        <SideBar />
        <Description />
      </div>
    </div>
  );
}

export default App;
