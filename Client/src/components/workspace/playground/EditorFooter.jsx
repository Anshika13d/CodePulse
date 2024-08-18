import React from 'react'
import { BsChevronUp } from 'react-icons/bs'

function EditorFooter() {
  return (
    <div className='flex items-center space-x-4 mr-3'>
        <button className='px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-gray-600 hover:bg-gray-700 text-white rounded-lg'>
          Run
        </button>
        <button className='px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-green-700 hover:bg-green-600 rounded-lg'>
          Submit
        </button>
      </div>
  )
}

export default EditorFooter