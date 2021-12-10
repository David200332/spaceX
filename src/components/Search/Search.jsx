import React, { useMemo } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styles from './Search.module.css'
import { updateActive } from '../../store/actions.js'

const Search = ({setTest}) => {

    const dispatch = useDispatch()
    const {search, data} = useSelector((state) => state)

    const resultData = useMemo(() => data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())), [data, search])

    const clickHandler = (e,id) => {
        e.stopPropagation()
        dispatch(updateActive(id))
        setTest(false)
    }

    return (
        <>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    {
                        resultData.map(el => (
                            <div className={styles.card} onClick={(e) => clickHandler(e,el.id)} key={el.id}>
                                <p>{el.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )

}

export default Search
