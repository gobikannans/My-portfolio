import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import bootstrap from "../assets/Bootstrap.png"
import tailwind from "../assets/tailwind.png"
import react from "../assets/react.png"
import nodejs from "../assets/node.png"
import express from "../assets/express.png"
import python from "../assets/python.png"
import sql from "../assets/sql.png"
import figma from "../assets/figma.png"
import github from "../assets/github.png"

const links=[
    {
        id:1,
        src:html,
        text:"HTML",
        style:"shadow-orange-500",
        size:"w-[100px]"
    },
    {
        id:2,
        src:css,
        text:"CSS",
        style:"shadow-blue-500",
        size:"w-[100px]"
    },
    {
        id:3,
        src:javascript,
        text:"JavaScript",
        style:"shadow-yellow-500",
        size:"w-[100px]"
    },
    {
        id:4,
        src:python,
        text:"Python",
        style:"shadow-blue-900",
        size:"w-[100px]"
    },
    {
        id:5,
        src:react,
        text:"React",
        style:"shadow-cyan-500",
        size:"w-[100px]"
    },
    {
        id:6,
        src:nodejs,
        text:"Node JS",
        style:"shadow-green-500",
        size:"w-[100px]"
    },
    {
        id:7,
        src:tailwind,
        text:"Tailwind CSS",
        style:"shadow-sky-600",
        size:"w-[100px]"
    },
    {
        id:8,
        src:bootstrap,
        text:"Bootstrap",
        style:"shadow-violet-500",
        size:"w-[100px]"
    },
    {
        id:9,
        src:express,
        text:"Express JS",
        style:"shadow-gray-700",
        size:"w-[150px]",
    },
    {
        id:10,
        src:sql,
        text:"SQL",
        style:"shadow-blue-500",
        size:"w-[100px]"
    },
    {
        id:11,
        src:figma,
        text:"Figma",
        style:"shadow-pink-500",
        size:"w-[100px]"
    },
    {
        id:12,
        src:github,
        text:"Github",
        style:"shadow-white",
        size:"w-[100px]"
    },
    
]



const TechStack = () => {
  return (
    <main name="TechStack" className='w-full bg-gradient-to-b from-black via-black to-gray-900 pt-[100px] pb-[400px] '>
        <section className='px-[20px] md:px-[60px] lg:px-[100px]'>
        <div>
            <h1 className='inline  text-5xl font-bold text-white border-b-4 border-gray-500 '>TechStack</h1>
            <p className='text-white mt-10 text-[23px]'>These are the tech stacks I worked.</p>

        </div>
        
            <ul className='mt-20 flex flex-row justify-between flex-wrap items-center'>
                {links.map(({id,src,text,size,style})=>(
                        <li  key={id} className={`flex flex-col justify-center items-center w-[39%] md:w-[40%] lg:w-[46%] xl:w-[30%] h-[200px] m-4 shadow-md ${style} text-white hover:scale-110 duration-300 mb-14 `}>
                            <img  className={`${size}`} src={src} alt={id}/>                            
                            <p className=' mt-4 text-gray-400'>{text}</p>
                        </li>
                    ))}
                </ul>
        </section>
    </main>
  )
}

export default TechStack