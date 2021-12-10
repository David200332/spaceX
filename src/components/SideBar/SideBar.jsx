import React from 'react'
import styles from './SideBar.module.css'
import { useSelector } from 'react-redux'
import SideBarItem from './SideBarItem/SideBarItem'

const SideBar = () => {

    const { data } = useSelector(store => store)

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <h2 className={styles.shipmentTitle}>Shipment List</h2>
            <ul className={styles.shipmentList}>
                {data.map(item => (
                    <SideBarItem
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        isActive={item.isActive}
                    />
                ))}
            </ul>
            </div>
        </div>
    )
}

export default SideBar
