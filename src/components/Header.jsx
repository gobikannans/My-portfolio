import { Link } from "react-scroll"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react"

const navlinks=[
    {
        id:'1',
        link:"Home"
    },
    {
        id:'2',
        link:"About"
    },
    {
        id:'3',
        link:"TechStack"
    },
    {
        id:'4',
        link:"Projects"
    },
    {
        id:'5',
        link:"Contact"
    },

]

function Header(){
    const[nav,setNav]=useState(false)

    return(
        <main  className="w-full py-8 bg-black bg-gradient-to-r from-black shadow-md shadow-gray-900 fixed">
            <nav className="flex flex-row justify-between items-center px-[30px] md:px-[60px] lg:px-[60px] xl:px-[100px] w-full">
            <Link to="Home" duration={500} smooth className="">
                    <h1 className="font-Abril text-4xl  text-white ">GK .</h1>
                </Link> 
                <ul className="hidden lg:flex justify-between lg:w-[55%] xl:w-[40%]">
                    {navlinks.map(({id,link})=>(
                        <Link to={link} smooth offset={-80}  duration={500}>
                        <li key={id} className="px-4 hover:scale-[1.12] duration-200 smooth">
                            <p className="text-gray-500 font-bold text-[18px] cursor-pointer ">{link}</p>
                        </li>
                        </Link>
                    ))}
                </ul>
                <div className="flex lg:hidden text-white" onClick={()=>setNav(!nav)}>
                    {nav?<AiOutlineClose size={30}/> :<GiHamburgerMenu size={30} />}
                </div>
            </nav>
            { nav?<ul className="flex flex-col justify-center items-center  h-screen bg-gradient-to-b from-black to-gray-800 ">
               {navlinks.map(({id,link})=>(
                        <Link to={link} smooth offset={-50}  duration={500}>
                        <li key={id} className="hover:scale-[1.12] duration-200 my-2 smooth" onClick={()=>setNav(!nav)}>
                            <p className="text-gray-500 font-bold text-[30px] cursor-pointer ">{link}</p>
                        </li>
                        </Link>
                    ))}
                
                </ul>:""}
        </main>

    )
}

export default Header