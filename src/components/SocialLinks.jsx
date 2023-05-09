import React from 'react'
import {AiFillLinkedin,AiFillGithub,AiFillMail,AiFillFile} from "react-icons/ai"

const links=[
    {
        id:1,
        element:(
            <>
            <AiFillLinkedin className='mr-2' size={30} /> LinkedIn
            </>
        ),
        href:"https://www.linkedin.com/in/gobi-kannan/",
        style:"rounded-tl-md"
    },
    {
        id:2,
        element:(
            <>
            <AiFillGithub className='mr-2' size={30}/> Github
            </>
        ),
        href:"https://www.github.com/gobikannans"
    },
    {
        id:3,
        element:(
            <>
            <AiFillMail className='mr-2' size={30}/> Mail
            </>
        ),
        href:"mailto:gobikannan.s1820@example.com"
    },
    {
        id:4,
        element:(
            <>
            <AiFillFile className='mr-2' size={30}/> Resume
            </>
        ),
        style:"rounded-bl-md",
        href:"https://drive.google.com/file/d/1bT3pxnD2K93xldAlytvPL-LHAOf07RMY/view?usp=sharing",
        download:true,
    }
]

const SocialLinks = () => {
  return (
    <div className='max-[1024px]:hidden min-[1025px]:flex flex-col top-[35%] right-0 fixed'>
        <ul>
        {links.map(({id,element,href,style,download})=>(
    <li  key={id} className={`flex items-center w-[140px] px-1 py-2   text-white mr-[-100px] hover:ml-[-90px]   hover:rounded-md  duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 ${style}`}>
    <a className='flex  items-center w-full text-[19px] ' href={href} target="_blank" download={download} rel="noreferrer">
    {element}
    </a>
</li> 
))} 

         </ul>
    </div>
  )
}

export default SocialLinks

