import React from 'react'
import styles from './Input.module.css'
import InputIcon from '../../../image/InputIcon'

const Input = ({value, onChangeFunc, icon, placeholder}) => {
    return (
        <div className={styles.content}>
            {
                icon ?  <InputIcon style={styles.searchIcon}/> : null
            }
            <input className={styles.searchInput} type="text" value={value} onChange={(e) => onChangeFunc(e)} placeholder={placeholder} style={icon ? {paddingLeft: '51px'} : {paddingLeft: '12px'}}/>   
        </div>
    )
}

export default Input
