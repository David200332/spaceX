import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import styles from './NavBar.module.css'
import Logo from '../../image/Logo'
import Input from '../UI/Input/Input'
import { updateSearchValue } from '../../store/actions'
import Search from '../Search/Search';

const NavBar = ({test, setTest}) => {

    const {search } = useSelector((state) => state)
    const dispatch = useDispatch()

    const inputHandler = (e) => {
        dispatch(updateSearchValue(e.target.value))
    }

    const clickHandler = (e) => {
        e.stopPropagation()
        setTest(true)
    }

    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <div style={{width: '20%'}}> 
                    <Logo />
                </div>
                <div onClick={(e) => clickHandler(e)}>
                    <Input value={search} onChangeFunc={inputHandler} icon={true} placeholder="Enter value"/>
                    {
                        test && <Search setTest={setTest}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar