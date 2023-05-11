import React from 'react'
import {FaLaptopCode} from "react-icons/fa"
import {RiTeamFill} from "react-icons/ri"
import {TbBulbFilled} from "react-icons/tb"
import {GiCoffeeCup} from "react-icons/gi"

const links=[
    {
        id:1,
        element:(
            <>
            <FaLaptopCode className='text-slate-400' size={80}/>
            </>
        ),
        
        heading:"LEARN",
        text:"Love to coding & learning"

    },
    {
        id:2,
        element:(
            <>
            <RiTeamFill className='text-slate-400' size={80}/>
            </>
        ),
        
        heading:"DEVELOP",
        text:"Love to work with teams"

    },
    {
        id:3,
        element:(
            <>
            <TbBulbFilled className='text-slate-400' size={80}/>
            </>
        ),
        
        heading:"SHARE",
        text:"Love to share my knowledge"

    },
    {
        id:4,
        element:(
            <>
            <GiCoffeeCup className='text-slate-400' size={80}/>
            </>
        ),
        
        heading:"COFFEE",
        text:"Love to drink coffee",
        style:""

    },
]


const About = () => {
  return (
    <main name="About" className='w-full bg-gradient-to-b from-gray-900  to-black pt-[100px] pb-[400px]'>
    <section className='px-[20px]  md:px-[60px] lg:px-[60px] xl:px-[100px] w-[100%]'>
        <div>
            <h1 className='inline max-[640px]:text-3xl sm:text-[40px] md:text-[40px] font-bold text-white border-b-4 border-gray-500 '>About</h1>
        </div>
        <div className='mt-16'>
            <p className=' font-Roboto text-white max-[450px]:text-[17px] text-[18px] sm:text-[18px] leading-loose w-[100%]  '> Completed my B.Tech Aeronautical Engineering in Hindustan Institute of Science and Technology at Chennai. 
                Afer graduation I took coding as my interest. Later with a passion for FullStack development, learned Front-end development and Back-end Developement.
                I like building user interfaces, interactive websites and found stronger in Front-end Development and made it as my primary. I am a self-learner and team player trying to gain and share my knowledge with other developers. I have good experience in developing responsive
                web based application and willing to expand my knowledge to mobile development and web3 Technologies. Currently I am looking for an opportunity to work as an intern or junior Front-end position to show my skills.
                I spend my leisure time watching animes and listening to music.
            </p>
        </div>
            <ul className='w-90% mt-20 flex justify-between flex-wrap items-center '>
                {links.map(({id,element,heading,text,style})=>(
                    <li key={id} className={` ${style} flex lg:mb-5 mb-16 text-center   flex-col justify-center items-center w-[45%] lg:w-[23%]  text-white`}>
                        {element}
                        <p className='mt-2 max-[450px]:text-[18px] text-[20px] text-blue-500 font-bold sm:text-[20px] '>{heading}</p>
                        <p className='mt-2 max-[450px]:text-[15px] text-gray-400 sm:text-[18px]'>{text}</p>
                    </li>
                ))}
            </ul>

    </section>

</main>
  )
}

export default About