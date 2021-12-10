import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../UI/Input/Input'
import styles from './Description.module.css'
import {updateBoxes} from '../../store/actions'
import { calcCargo} from '../../helpers/index'

const Description = () => {

    const dispatch = useDispatch()
    const { data} = useSelector(state => state)

    const currentData = data.find(el => el.isActive)

    if(!currentData){
        return <p className={styles.shipmentDetails}>Loading</p>
    }

    return (
        <div className={styles.shipmentDetails}>
            <div className={styles.shipmentTitle}>
                <h1 className={styles.shipmentTitleName}>{currentData.name}</h1>
                <span className={styles.shipmentTitleEmail}>{currentData.email}</span>
            </div>
            <div className={styles.shipmentBoxes}>
                <label className={styles.shipmentBoxesLabel}htmlFor="boxes">CARGO BOXES</label>
                <Input placeholder="example: 6.1,7.2,4,9.3"  value={currentData.boxes} icon={false} onChangeFunc={e => dispatch(updateBoxes({ id: currentData.id, boxes: e.target.value }))}/>
            </div>
            <div className={styles.shipmentResult}>
                <span className={styles.shipmentResultText}>Number of required cargo bays</span>
                <span className={styles.shipmentResultValue}>{calcCargo(currentData.boxes)}</span>
            </div>
        </div>
    )
}

export default Description
