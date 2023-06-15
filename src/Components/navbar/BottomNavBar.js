import React from 'react'

function BottomNavBar() {
  return (
    <div>
         <div className='bg-navcolor-800 flex justify-between px-20 p-auto  pb-1 w-full font-semibold'>
                <ul className='flex text-sm px-11 items-center  gap-5 my-2'>
                    <li><a className='text-gray-400 hover:text-white' href="">Movies</a></li>
                    <li><a className='text-gray-400 hover:text-white' href="">Stream</a></li>
                    <li><a className='text-gray-400 hover:text-white' href="">Events</a></li>
                    <li><a className='text-gray-400 hover:text-white' href="">Plays</a></li>
                    <li><a className='text-gray-400 hover:text-white' href="">Sports</a></li>
                    <li><a className='text-gray-400 hover:text-white' href="">Activities</a></li>
                    <li><a className='text-gray-400 hover:text-white' href="">Buzz</a></li>
                </ul>
                <ul className='flex px-12 items-center text-xs gap-6 mt-2'>
                    <li><a className='text-gray-400 hover:text-white' href="">ListYourShow</a></li>
                    <li><a className='text-gray-400 hover:text-white' href="">Corporates</a></li>
                    <li><a className='text-gray-400 hover:text-white' href="">Offers</a></li>
                    <li><a className='text-gray-400 hover:text-white' href="">Gift Cards</a></li>
                </ul>

                
            </div>
    </div>
  )
}

export default BottomNavBar