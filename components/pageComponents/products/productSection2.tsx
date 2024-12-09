import React from 'react';

import { GiTrophyCup } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";

export default function ProductSection2() {
  return (
    <div className='max-w-screen-2xl mx-auto py-8 bg-slate-50'>
      <div className='max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between gap-8'>
      
        {/* High Quality */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-3'>
          <p><GiTrophyCup size={44}/></p>
          <div className='flex flex-col justify-center '>
            <h1 className='text-black text-[14px] sm:text-[16px] font-bold text-center lg:text-start'>High Quality</h1>
            <p className='text-gray-500 text-[12px] sm:text-[14px] text-center lg:text-start' >crafted from top materials</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-3'>
          <p><IoMdCheckmarkCircleOutline size={44}/></p>
          <div className='flex flex-col justify-center'>
            <h1 className='text-black text-[14px] sm:text-[16px] font-bold text-center lg:text-start'>Warranty Protection</h1>
            <p className='text-gray-500 text-[12px] sm:text-[14px] text-center lg:text-start'>over 2 years</p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-3'>
          <p><LiaShippingFastSolid size={44}/></p>
          <div className='flex flex-col justify-center'>
            <h1 className='text-black text-[14px] sm:text-[16px] font-bold text-center lg:text-start'>Free Shipping</h1>
            <p className='text-gray-500 text-[12px] sm:text-[14px] text-center lg:text-start'>order over 150 $</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-3'>
          <p><BiSupport size={44}/></p>
          <div className='flex flex-col justify-center'>
            <h1 className='text-black text-[14px] sm:text-[16px] font-bold text-center lg:text-start'>24/7 Support</h1>
            <p className='text-gray-500 text-[12px] sm:text-[14px] text-center lg:text-start'>dedicated support</p>
          </div>
        </div>

      </div>
    </div>
  );
}
