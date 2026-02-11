import React, { useEffect, useState } from "react"
import styles from './laboratories.module.css'

import cp1 from '../../assests/department/cp1.jpg'
import cp2 from '../../assests/department/cp2.jpg'
import cp3 from '../../assests/department/cp3.jpg'

import ec1 from '../../assests/department/ec1.jpg'
import ec2 from '../../assests/department/ec2.jpg'
import ec3 from '../../assests/department/ec3.jpg'

import ce1 from '../../assests/department/ce1.jpg'
import ce2 from '../../assests/department/ce2.jpg'
import ce3 from '../../assests/department/ce3.jpg'

import ex1 from '../../assests/department/ex1.jpg'
import ex2 from '../../assests/department/ex2.jpg'
import ex3 from '../../assests/department/ex3.jpg'

import me1 from '../../assests/department/me1.jpg'
import me2 from '../../assests/department/me2.jpg'
import me3 from '../../assests/department/me3.jpg'


const Laboratories = ({branch=''}) => {

    const [data,setData]=useState([])
    //  cp1 means cs and it branch 

    const setLaboratiesData={

        it: [{
            labName: 'Programming Lab',
            img: cp1
        },
        {
            labName: 'Computer Netwrok Lab',
            img: cp2
        },
        {
            labName: 'Compiler Design',
            img: cp3
        }],
        cs: [{
            labName: 'Programming Lab',
            img: cp1
        },
        {
            labName: 'Computer Netwrok Lab',
            img: cp2
        },
        {
            labName: 'Compiler Design',
            img: cp3
        }],
        ce: [{
            labName: 'Geology Laboratory',
            img: ce1
        },
        {
            labName: 'Geotechnical Engineering Laboratory',
            img: ce2
        },
        {
            labName: 'Surveying Laboratory',
            img: ce3
        }],
        ec: [{
            labName: 'ELECTRONICS & COMMUNICATION LAB ',
            img: ec1
        },
        {
            labName: 'ANALOG ELECTRONICS ',
            img: ec2
        },
        {
            labName:'MICROPROCESSOR LAB ',
            img: ec3
        }],
        ee: [{
            labName: 'ELECTRICAL INSTRUMENTATION AND MEASUREMENT LAB”',
            img: ex1
        },
        {
            labName: 'ELECTRICAL WORKSHOP LAB',
            img: ex2
        },
        {
            labName: 'ELECTRICAL MACHINE LAB',
            img: ex3
        }],
        me: [{
            labName:'BASIC MECHANICAL ENGINEERING LAB',
            img: me1
        },
        {
            labName: 'DYNAMICS OF MACHINE',
            img:me2
        },
        {
            labName: 'REFRIGERATION & AIR CONDITION',
            img: me3
        }]
    }

    useEffect(()=>{
      setData(setLaboratiesData[branch])
    },[])

    return (
        <div className={styles.labCtn}>
            <p className={styles.prf}>Laboratories</p>

            <div className={styles.scnCtn}>
                {data.map((item, index) => (
                    <div className={styles.headImg} key={index}>
                        <p className={styles.prf}>{item.labName}</p>
                        <img className={styles.cpImg} src={item.img} alt="ll" />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Laboratories;