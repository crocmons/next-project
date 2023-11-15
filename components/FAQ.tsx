"use client"
import Image from 'next/image'
import {useState} from 'react'
import data from "@/lib/data.json"
import Accordion from './Accordion'

type Props = {
    question: string,
    answer: string,
    idx: number
}

const FAQ = () => {
  const [active, setActive] = useState([false, false, false, false, false])

  const isSomeActive = active.some((element)=> element);

  const handleClick:React.MouseEventHandler<HTMLButtonElement> = ()=>{
    isSomeActive ? setActive([false, false, false, false, false]) : setActive([true, true, true, true, true])
  }

  return (
    <div className='items-center flex justify-center mx-auto flex-col lg:w-7/12 lg:mt-7 w-full my-5 px-4'> 
      <h2 className='text-3xl px-6 py-3.5 text-white rounded-xl bg-gradient-to-r from-blue-900 to-sky-600 font-bold'>Frequently Asked Questions</h2>

      <div className='flex items-center justify-between w-full mb-6 lg:justify-end'>

        <button onClick={handleClick} className='flex items-center mr-3 space-x-1 text-sm font-bold lg:text-base lg:space-x-2 py-2 px-4 bg-slate-50'>
         <span className='text-sky-500 min-w-fit text-ellipsis'>
          {!isSomeActive ? "Open All" : "Close All" }
         </span>
         <div className={'relative transition-all ease-in-out duration-200' + (isSomeActive ? "rotate-180" : "rotate-0")}>
           
           <Image 
             src='/down.svg'
             alt="down-img"
             width={40}
             height={40}
           />
         </div>
        </button>

      </div>

      {data.map((el,i)=>{
         return(
           <div className='w-full mb-3' key={"questions" + i}>
            <Accordion 
             question={el.question}
             answer={el.answer}
             idx={el.idx}
            />
     
            </div>
         )
      })}



    </div>
  )
}

export default FAQ