import React from 'react'

function BottomNavBar(props) {
  return (
    <div>
         <div className={props.isDark?"bg-navcolor-800 flex justify-between px-20 w-full font-normal":"bg-gray-100 text-gray-900 flex justify-between px-20 p-auto w-full font-normal "}>
                <ul className='flex text-sm px-11 items-center  gap-5 my-2'>
                    <li><a className=' hover:text-white' href="movies">Movies</a></li>
                    <li><a className=' hover:text-white' href="stream">Stream</a></li>
                    <li><a className=' hover:text-white' href="events">Events</a></li>
                    <li><a className=' hover:text-white' href="plays">Plays</a></li>
                    <li><a className=' hover:text-white' href="sports">Sports</a></li>
                    <li><a className=' hover:text-white' href="activities">Activities</a></li>
                    <li><a className=' hover:text-white' href="buzz">Buzz</a></li>
                </ul>
                <ul className='flex px-12 items-center text-xs gap-6 mt-2'>
                    <li><a className=' hover:text-white' href="listyourshow">ListYourShow</a></li>
                    <li><a className=' hover:text-white' href="corporates">Corporates</a></li>
                    <li><a className=' hover:text-white' href="offers">Offers</a></li>
                    <li><a className=' hover:text-white' href="gift_cards">Gift Cards</a></li>
                </ul>

                
            </div>
    </div>
  )
}

export default BottomNavBar