import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Home from '../sigin/Home'
import "./temple.css";
import src from "../../assests/src.mp4"

const Tample = () => {

  const [play,setPlay] =useState(true)

  useEffect(()=>{
    // setPlay(false)
    setTimeout(()=>{
      setPlay(false)
    },2000)
  },[])

  return (
    <div className=" flex flex-col gap-y-16 pb-20 items-center  ">
      <div className=" flex flex-col-reverse items-center gap-y-8 justify-between">
        <div className="lg:w-[900px] shadow-3xl group sm:w-[600px] sm:h-[500px] min-[500px]:w-[400px] min-[320px]:w-[270px]   rounded-3xl overflow-hidden">
          <img
            className="w-[100%]   group-hover:scale-110 duration-700 h-[100%] object-fill"
            src="tample1.jpg"
            alt=""
          />
        </div>
        <div className="">
          <div className="font-extrabold m-auto text-center justify-center flex flex-col gap-y-8  ring-cyan-700 w-[90%] px-4 p-4">
            <p className="lg:text-6xl md:text-3xl html rounded-full  text-slate-50 bg-orange-800 pt-5 pb-3  ">
              श्री श्री 108 रूद्र महायज्ञ
            </p>
            <h3 className="lg:text-4xl md:text-2xl lg:leading-[3.5rem] md:leading-[2.5rem]">
              महादेव मंदिर फागुछापर,बाघाचौर में शुक्रवार को 11 दिवसीय श्री रुद्र
              महायज्ञ का शुभारंभ भव्य कलश यात्रा के साथ हुआ। भगवान शिव के जयघोष
              से पूरा क्षेत्र ही गूंज उठा।
            </h3>

            <div className="flex flex-col gap-y-5">
              <p className="text-2xl text-red-800 font-extrabold ">
                भाग लेने की बटन पर क्लिक करे{' '}
              </p>
              <Link to={'/'}>
                <button className="bg-slate-600 text-slate-50 text-2xl font-serif duration-500 rounded-xl hover:scale-125 hover:shadow-3xl  shadow-2xl shadow-[#ffd238] px-4 py-2  ">
                  Click Here
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=' h-[500px]  group rounded-3xl shadow-3xl '>
      <video  className='h-[100%] group-hover:scale-110  duration-500  rounded-3xl'  width="280" height="240" controls autoPlay loop muted={play}>
  <source src={src} type="video/mp4" />
      </video>
      </div>


      <div>

        <div className="flex flex-col items-center gap-y-16  ">
        <div className='group md:text-2xl sm:text-lg lg:w-[60%]  md:w-[90%]  sm:w-[80%] font-semibold text-slate-50 rounded-full req min-[320px]:w-[90%] text-[12px]  overflow-hidden'>
        <ul className="list-disc group-hover:scale-110 duration-700  px-16 py-8 ">
        <li>कथा का समय सुबह के 8 बजे से 11 बजे तथा तक शाम के 4 बजे से 7 बजे तक है</li>
        <li>भंडारा का कार्येक्रम पूरा दिन रहेगा</li>
        <li>
          रात को राम-लीला का प्रोग्राम रखा गया है , आप सभी श्रधालुओ से
          अनुरोध की सपरिवार आये और प्रोग्राम का आनंद उठाये{' '}
        </li>
      </ul>
        </div>
        
     
  

          <div className="md:w-[600px] sm:w-[500px]  min-[320px]:w-[280px]  m-auto
          min-[500px]:w-[400px]
           shadow-3xl rounded-full overflow-hidden 
           group">
            <img
              className="w-[100%] h-[100%] object-fill group-hover:scale-105 duration-700"
              src="tample2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Tample
