import React from 'react'
import {Link} from "react-scroll"
/*import profile from "../assets/profile.png"*/
import {BsFillEmojiNeutralFill,BsEmojiHeartEyesFill} from "react-icons/bs"
import {AiFillLinkedin,AiFillGithub,AiFillMail,AiFillFile} from "react-icons/ai"
import codeing from "../assets/codeing.webp"

const links=[
  {
      id:1,
      element:(
          <>
          <AiFillLinkedin size={30}/> 
          </>
      ),
      href:"https://www.linkedin.com/in/gobi-kannan/",
  },
  {
      id:2,
      element:(
          <>
          <AiFillGithub size={30}/> 
          </>
      ),
      href:"https://www.github.com/gobikannans"
  },
  {
      id:3,
      element:(
          <>
          <AiFillMail size={30}/>
          </>
      ),
      href:"mailto:gobikannan.s1820@example.com"
  },
  {
      id:4,
      element:(
          <>
          <AiFillFile size={30}/> 
          </>
      ),
      href:"https://drive.google.com/file/d/1kolVtl9-zjYrC7GQpLE20VrqA73qJDxi/view?usp=sharing",
      download:true,
  }
]

const Home = () => {
  return (
    <main name="Home" className='h-screen w-full  flex flex-col justify-center items-center bg-gradient-to-b from-black via-black to-gray-900'>
        <section className='px-[30px] pr-[0px] md:px-[60px] lg:px-[100px]   flex flex-row  justify-center items-center w-[80%] h-full max-[1680px]:justify-between max-[1719px]:w-[100%]'>
          <div className='flex flex-col justify-center items-start w-[100%] min-[1000px]:h-full' >
            <h1 className='text-slate-500 font-bold max-[450px]:text-[28px] text-[35px] sm:text-[50px]'>Hello !</h1>
            <h1 className=' text-slate-500 max-[450px]:text-[27px] text-[35px] mt-[10px] sm:text-[50px] font-bold font-Roboto '>I'm <span className='text-blue-500'> Gobi Kannan</span> </h1>
            <h2 className=' text-slate-500 max-[450px]:text-[27px] text-[35px] mt-[20px] sm:text-[50px] font-bold '> I'm a<span className='text-blue-500 '>  Front-End Developer</span></h2>
          <Link to="Contact" offset={-100}  smooth duration={800}>
            <button className='group flex max-[1024px]:hidden items-center w-[180px] mt-[30px] py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-md text-white text-[18px] sm:text-3xl justify-center hover:scale-105 duration-300'>Hire Me
             <BsFillEmojiNeutralFill className='transition   group-hover:hidden  duration-500 ml-3'/>            
             <BsEmojiHeartEyesFill className='transition  hidden group-hover:flex duration-500 ml-3 ' />               
           </button>
          </Link>

          <Link to="Contact" offset={-60}  smooth duration={800}>
            <button className='hidden max-[1024px]:flex max-[640px]:text-[26px] max-[640px]:py-3 max-[640px]:w-[150px] max-[450px]:text-[25px] max-[450px]:w items-center w-[180px] mt-[30px] py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-md text-white text-3xl justify-center'>Hire Me
             <BsEmojiHeartEyesFill className='transition ml-2 ' />               
           </button>
          </Link>
           
      <ul className='max-[450px]:w-[85%]  pt-10 max-[1024px]:flex min-[1025px]:hidden flex justify-between'>
        {links.map(({id,element,href,download})=>(
        <li  key={id} className={`min-[450px]:mr-10 flex md:mr-20  px-3 py-3 rounded-md   text-white  bg-slate-800 shadow-md shadow-blue-500`}>
            <a className='text-[20px]' href={href} target="_blank" download={download} rel="noreferrer">
            {element}</a>
       </li> 
       ))} 

      </ul>
          </div>
            <img src={codeing} className='hidden xl:flex w-[75%] max-w-[700px] rounded-md  shadow-lg shadow-blue-500 ml-[80px]' alt="coding" />
            
        </section>
        
    </main>
  )
}

export default Home