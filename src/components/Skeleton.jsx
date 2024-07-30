import React from 'react'

function Skeleton() {
  return (
    <div class="flex items-center gap-4 mt-4 w-fit border border-black  min-w-[300px]  flex-wrap rounded-lg   p-5">
    <svg class="w-10 h-10 me-3 text-gray-200 animate-pulse dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
    </svg>
    <div className='animate-pulse flex flex-col gap-2'>
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
        <div class="w-28 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div class="w-28 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
    <div className='animate-pulse bg-gray-200 rounded-full dark:bg-gray-700 px-10 py-4 '></div>
    <div className='animate-pulse bg-gray-200 rounded-full dark:bg-gray-700 px-8 py-4 '></div>
</div>
  )
}

export default Skeleton