import React from 'react'
import { AiOutlineFullscreen, AiOutlineSetting } from 'react-icons/ai'
import EditorFooter from '../EditorFooter'

function PrefNav() {
  return (
    <div className='flex items-center justify-between h-11 w-full bg-gray-800'>
      <div className='flex items-center text-white'>
        <button className='flex cursor-pointer items-center rounded focus:outline-none bg-gray-800 text-blue-200 hover:bg-gray-600 px-2 py-1.5 font-medium'>
          <div className='flex items-center px-1'>
            <div className='text-xs text-label-2 dark:text-dark-label-2'>JavaScript</div>
          </div>
        </button>
      </div>
      
      {/* <div className='flex items-center m-2'>
        <button className='preferenceBtn group'>
          <div className='h-4 w-4 text-gray-400 font-bold text-lg'>
            <AiOutlineFullscreen />
          </div>
        </button>
        <button className='preferenceBtn group'>
          <div className='h-4 w-4 text-gray-400 font-bold text-lg'>
            <AiOutlineSetting />
          </div>
        </button>
      </div> */}

      <EditorFooter/>
    </div>
  )
}

export default PrefNav
