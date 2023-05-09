import React from 'react'
import {AiFillLinkedin,AiFillGithub,AiFillMail,AiFillFile} from "react-icons/ai"

const links=[
    {
        id:1,
        element:(
            <>
            <AiFillLinkedin className='mr-2' size={40} /> LinkedIn
            </>
        ),
        href:"https://www.linkedin.com/in/gobi-kannan/",
        style:"rounded-tl-md"
    },
    {
        id:2,
        element:(
            <>
            <AiFillGithub className='mr-2' size={40}/> Github
            </>
        ),
        href:"https://www.github.com/gobikannans"
    },
    {
        id:3,
        element:(
            <>
            <AiFillMail className='mr-2' size={40}/> Mail
            </>
        ),
        href:"mailto:gobikannan.s1820@example.com"
    },
    {
        id:4,
        element:(
            <>
            <AiFillFile className='mr-2' size={40}/> Resume
            </>
        ),
        style:"rounded-bl-md",
        href:"https://drive.google.com/file/d/1kolVtl9-zjYrC7GQpLE20VrqA73qJDxi/view?usp=sharing",
        download:true,
    }
]

const SocialLinks = () => {
  return (
    <div className='max-[1024px]:hidden min-[1025px]:flex flex-col top-[35%] right-0 fixed'>
        <ul>
        {links.map(({id,element,href,style,download})=>(
    <li  key={id} className={`flex items-center w-[160px] px-1 py-3   text-white mr-[-110px] hover:ml-[-105px]   hover:rounded-md  duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 ${style}`}>
    <a className='flex  items-center w-full text-[25px] ' href={href} target="_blank" download={download} rel="noreferrer">
    {element}
    </a>
</li> 
))} 

         </ul>
    </div>
  )
}

export default SocialLinks

