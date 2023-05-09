import React from 'react'
import emojigame from "../projects/emojigame.png"
import moneymanager from "../projects/moneymanager.png"
import nxttrendz from "../projects/nxttrendz.png"
import nxtwatch from "../projects/nxtwatch.png"
import tastykitchens from "../projects/tastykitchens.png"
import wikipedia from "../projects/wikipediasearchapplication.png"
import portfolio from "../projects/portfolio.png"
import foodmunch from "../projects/foodmunch.png"


import {AiFillGithub} from "react-icons/ai"
import {ImEarth} from "react-icons/im"

const links=[
    {
        id:1,
        src:foodmunch,
        heading:"Food Munch",
        href:"https://gobikannanfm.ccbp.tech/",
        code:"https://github.com/gobikannans/Food-Munch.git",
        bio: "Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers, etc.",
        tech:"HTML, CSS, Bootstrap"
    },
    {
        id:2,
        src:wikipedia,
        heading:"Wikipedia Search Application",
        href:"https://gobikannanws.ccbp.tech/",
        code:"https://github.com/gobikannans/wikipedia-search-application.git",
        bio: "Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation in wikipedia by clicking on the specific result",
        tech:" HTML, CSS, JS, REST API Calls, Bootstrap"
    },
    {
        id:3,
        src:moneymanager,
        heading:"Money Manager",
        href:"https://gobikannanmm.ccbp.tech/",
        code:"https://github.com/gobikannans/ReactJS-Money-Manager.git",
        bio: "Money Manager is a simple responsive application helps users to track the income, expenses and balances and also help users to track the records of financial management. ",
        tech:"React JS, HTML, CSS, JavaScript"
    },
    {
        id:4,
        src:nxttrendz,
        heading:"Nxt Trendz",
        href:"https://gobikannannt.ccbp.tech/login",
        code:"https://github.com/gobikannans/ReactJS-Nxt-Trendz--Ecommerce.git",
        bio: "Nxt Trendz application is a ECommerce applications where users can login and can see list of products with search, filters, sort by, etc.",
        tech:"React JS, JS, CSS, Routing, REST API Calls, JWT Token, Authorization, Authentication, Figma",
        login:<p className='text-white self-start max-[450px]:text-[15px] text-[16px] mt-5'>{"< username: gobikannan | password: 12345678 >"}</p>,
        nonlogin:<p className='text-white self-start max-[450px]:text-[15px] text-[16px] mt-5'>{"< username: gobikan | password: 12345678 >"}</p>
    },
    {
        id:5,
        src:emojigame,
        heading:"Emoji Game",
        href:"https://gobikannaneg.ccbp.tech/",
        code:"https://github.com/gobikannans/ReactJS-Emoji-Game.git",
        bio: "Developed responsive Emoji memory game where users can win it by clicking unique emoji each time till all displayed emojis are clicked. All emojis positions will be randomized after each click",
        tech:"React JS, CSS, Bootstrap"
    },
    {
        id:6,
        src:portfolio,
        heading:"My Portfolio",
        href:"https://gobikannans.netlify.app",
        code:"https://github.com/gobikannans/My-portfolio.git",
        bio: "Designed and Developed my own Portfolio by using the following techs.",
        tech:"React JS, HTML, Tailwind CSS, JavaScript"
    },

    {
        id:7,
        src:nxtwatch,
        heading:"Nxt Watch",
        href:"https://gobikannannw.ccbp.tech/login",
        code:"https://github.com/gobikannans/ReactJS-Nxt-Watch.git",
        bio: "Nxt Watch application is a clone for YouTube where users can log in and can see a list of videos like sections & also can search videos and view specific video details, and users can toggle the theme (Light/Dark).",
        tech:"React JS, HTML, JavaScript, CSS, styled-components, REST API Calls, JWT Token, Authorization, Authentication.",
        login:<p className='text-white self-start max-[450px]:text-[15px] text-[16px] mt-5'>{"< username: gobikannan | password: 12345678 >"}</p>
    },
    {
        id:8,
        src:tastykitchens,
        heading:"Tasty Kitchens",
        href:"https://gobikannantk.ccbp.tech/login",
        code:"https://github.com/gobikannans/ReactJS-Tasty-kitchens-swiggy-clone.git",
        bio: "Implemented a responsive Online Food Ordering System where users can see popular restaurants with sort by rating, specific restaurant details, adding or removing food items to cart, and payments section and also users can toggle the theme (Light/Dark).",
        tech:"React JS, HTML, CSS, JavaScript, Bootstrap, React Slick, Figma, client storage, JWT Token, Authorization, Authentication.",
        login:<p className='text-white self-start max-[450px]:text-[15px] text-[16px] mt-5'>{"< username: gobikannan | password: 12345678 >"}</p>
    },

]




const Projects = () => {
  return (
    <main name="Projects" className='w-full bg-gradient-to-b  from-gray-900 via-black  to-black pt-[100px] pb-[200px]'>
        <section className='px-[20px] md:px-[60px] lg:px-[60px] xl:px-[100px]'>
        <div>
            <h1 className='inline max-[640px]:text-3xl  sm:text-[40px] md:text-[40px] font-bold text-white border-b-4 border-gray-500 '>Projects</h1>
            <p className='text-white mt-10 text-[20px] max-[640px]:text-[19px]'>Some of the Front-end projects I done from scratch.</p>
        </div>
        <div className='mt-[50px] 3xl:ml-[340px] '>
            <ul className='flex justify-between   flex-wrap list-style-none '>
               {links.map(({id,heading,src,href,code,bio,tech,login,nonlogin})=>(
                  <li key={id} className={`m-10 ml-0 mr-0  group max-[1024px]:shadow-md max-[1024px]:shadow-blue-500 px-3 md:px-5 rounded-[20px] flex flex-col py-8 items-center md:w-[48%] lg:w-[47%] xl:w-[31%] lg:hover:scale-104   border-gray-500 border-4 shadow-md hover:shadow-blue-500 duration-300`}>
                  <p className=' max-[1024px]:text-blue-500 mt-3 mb-0 self-start text-[23px] md:text-[23px] font-bold text-slate-400  group-hover:text-blue-500 lg:text-[23px]'>{heading}</p>
                  <img className='w-[500px] mt-5' src={src} alt={src}/>

                    <div className='h-full flex flex-col justify-between'>
                      <p className='font-Roboto font-medium text-slate-500 text-[16px] sm:text-[18px] md:text-[18px] lg:text-[17px] leading-loose w-[100%] mt-4'>{bio}</p>
                      <p className='font-Roboto font-medium text-slate-500 text-[16px] sm:text-[18px] md:text-[18px] lg:text-[17px] leading-loose w-[98%] mt-4'>
                          <span className='text-white'>Techs used</span> : {tech}
                          </p>
                       {login}
                       {nonlogin}
                      <div className=' flex justify-between items-center self-center w-[90%] md:w-[95%] lg:w-[90%] xl:w-[80%] mt-5'>
                          <button className='max-[450px]:w-[130px] w-[150px] md:w-[120px] lg:w-[120px] text-white  bg-gradient-to-r from-blue-600 to-pink-600 text-[18px] lg:mr-5 px-4 py-3 rounded-lg hover:scale-105 hover:shadow-md hover:shadow-purple-500 duration-500 '>
                            <a className='flex justify-center items-center' href={href} target="_blank" rel="noreferrer ">Live <span className='ml-3'><ImEarth size={18}/></span></a>  
                          </button>
                          <button className='max-[450px]:w-[130px]   w-[150px] md:w-[120px] lg:w-[120px] text-white flex justify-center items-center bg-gradient-to-r lg:mr-5 from-blue-600 to-gray-600 text-[18px] px-4 py-3 rounded-lg hover:scale-105 hover:shadow-md hover:shadow-gray-500 duration-500 '>
                          <a className='flex justify-between items-center' href={code} target="_blank" rel="noreferrer"> Code <span className='ml-3'><AiFillGithub size={20}/></span></a>
                          </button>
                      </div>
                    </div>  
                  </li>
               ))} 
              
            </ul>
        </div>
        </section>
    </main>
  )
}

export default Projects