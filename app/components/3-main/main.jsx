'use client'

import './main.css';
import Image from 'next/image'
import { useState} from 'react';
import React from 'react';
import { AnimatePresence, motion } from "framer-motion";


import p1 from './assets/imgs/p1.jpg';
import p2 from './assets/imgs/p2.jpg';
import p3 from './assets/imgs/p3.jpg';
import p4 from './assets/imgs/p4.jpg';
import tailwind from './assets/imgs/tailwind.png';
import ch1 from './assets/imgs/ch1.png';
import ch2 from './assets/imgs/ch2.png';



const myProjects = [
    {
        projectTitle: 'Portfolio',
        catergory: 'react',
        imagePath: p4,
        history: '12/2023',
        subtitle: 'Using React.js',
        demo: '#',
        rebo: 'https://github.com/abufadel/abufadel-portfolio'
    },
    {
        projectTitle: 'Calculator',
        catergory: 'react',
        imagePath: p3,
        history: '11/2023',
        subtitle: 'Using React.js',
        demo: 'https://abufadel-calculator.vercel.app',
        rebo: 'https://github.com/abufadel/calculator'
    },
    {
        projectTitle: 'To Do List ',
        catergory: 'js',
        imagePath: p2,
        history: '9/2023',
        subtitle: 'Using HTML, CSS & JS',
        demo: 'https://abufadel.github.io/ToDoList',
        rebo: 'https://github.com/abufadel/ToDoList'
    },
    {
        projectTitle: 'Tailwind',
        catergory: 'htmlCss',
        imagePath: tailwind,
        history: '8/2023',
        subtitle: 'Using HTML & Tailwind',
        demo: 'https://tailwind-training-lovat.vercel.app/',
        rebo: 'https://github.com/abufadel/tailwind_training'
    },
    {
        projectTitle: 'Dashboard',
        catergory: 'htmlCss',
        imagePath: p1,
        history: '7/2023',
        subtitle: 'Using HTML & CSS',
        demo: 'https://abufadel.github.io/Simple-Project',
        rebo: 'https://github.com/abufadel/Simple-Project'
    },
    {
        projectTitle: 'Qr code',
        catergory: 'challenge',
        imagePath: ch1,
        history: '6/2023',
        subtitle: 'Using HTML & CSS',
        demo: 'https://abufadel.github.io/Temp1_frontend_mentor',
        rebo: 'https://github.com/abufadel/Temp1_frontend_mentor'
    },
    {
        projectTitle: '4 Cards',
        catergory: 'challenge',
        imagePath: ch2,
        history: '6/2023',
        subtitle: 'Using HTML & CSS',
        demo: 'https://abufadel.github.io/Temp2_frontend_mentor',
        rebo: 'https://github.com/abufadel/Temp2_frontend_mentor'
    },
]

const Main = () => {

    const [currentActive, setcurrentActive] = useState("all");
    const [arr, setArr] = useState(myProjects);
    const handleClick = (buttonCategory) => { 
        setcurrentActive(buttonCategory);
        const newArr = myProjects.filter((item) => {
            return item.catergory === buttonCategory
        })
        setArr(newArr)
    }

    return (
        <main className='flex'>
            <section className='left-section flex'>
                <div className='first' >
                    <button onClick={() => {
                        setcurrentActive("all");
                        setArr(myProjects)
                    }} class={currentActive === "all" ? "Btn active" : "Btn"}>
                        All Projects
                    </button>
                </div>
                <button onClick={() => {
                    handleClick('react')
                }} class={currentActive === "react" ? "Btn active" : "Btn"}>
                    React.js
                </button>
                <button onClick={() => {
                    handleClick('js')
                }} class={currentActive === "js" ? "Btn active" : "Btn"}>
                    JavaScript
                </button>
                <button onClick={() => {
                    handleClick('htmlCss')
                }} class={currentActive === "htmlCss" ? "Btn active" : "Btn"}>
                    HTML & CSS
                </button>
                <button onClick={() => {
                    handleClick('challenge')
                }} class={currentActive === "challenge" ? "Btn active" : "Btn"}>
                    Challenges
                </button>
                
            </section>
            <section className='right-section flex'>

                <div className="box">
                <AnimatePresence>


                    {
                        arr.map( (item) => {
                            return (
                                <div key={item.imagePath} class="card">
                                    <motion.div class="bg"
                                        layout
                                        initial={{ transform: "scale(0)" }}
                                        animate={{ transform: "scale(1)" }}
                                        exit={{ transform: "scale(0)" }}
                                        transition={{type: "spring", damping: 8, stiffness: 100}}
                                    >
                                        <Image
                                            src={item.imagePath}
                                            alt='abufadel'
                                            className='p1'
                                        />
                                        <div className="box">
                                            <h1 className='title'>{item.projectTitle}</h1>
                                            <p className='sub-title'>{item.subtitle}</p>
                                            <p className='history'> {item.history} </p>
                                            <div className="bottom flex">
                                                <div className="icons">
                                                    <a target='_blank' href={item.demo}>
                                                        <svg className='icon' fill='currentColor' width="22" height="22" viewBox="0 0 496 512"><path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"></path></svg>
                                                    </a>
                                                    <a className='icon' target='_blank' href={item.rebo}>
                                                        <svg className='icon' fill='currentColor' width="22" height="22" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                                    </a>
                                                </div>
                                                {/* <div className="link"><a href={item.demo}></a></div> */}
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div class="blob"></div>
                                </div>
                            )
                        } )
                    }
                    </AnimatePresence>

                </div>

            </section>
        </main>
    );
}

export default Main;
