import React from 'react'
import { ArrowRight } from "lucide-react";

const RigthCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between ">
        <h2 className="bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center">{props.id+1}</h2>
        <div>
          <p className="text-shadow-2xs text-lg leading-relaxed text-white mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non atque
            quia repellat!
          </p>
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}} className=" text-white font-medium px-8 py-2 rounded-full text-gray-600">{props.tag}</button>
            <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-full">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
  )
}

export default RigthCardContent
