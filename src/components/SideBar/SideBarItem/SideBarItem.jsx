import React from 'react'
import styles from './SideBarItem.module.css'
import {updateActive} from '../../../store/actions.js'
import { useDispatch } from 'react-redux'

const SideBarItem = ({name, isActive, id}) => {

    const dispatch = useDispatch()

    const root = [styles.ShipmentItem]
    
    if(isActive) {
        root.push(styles.ShipmentItemActive)
    }

    return (
        <li id={id} className={root.join(' ')} onClick={(e) => dispatch(updateActive(e.target.id))} >
            {name}
        </li>
    )
}

export default SideBarItem
