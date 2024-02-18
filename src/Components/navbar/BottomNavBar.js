import React from 'react'

function BottomNavBar(props) {
  return (
    <div>
         <div className={props.isDark?"bg-navcolor-800 flex justify-between px-20 w-full font-normal":"bg-gray-100 text-gray-900 flex justify-between px-20 p-auto w-full font-normal "}>
                <ul className='flex text-sm px-12 items-center  gap-5 my-2'>
                    <li><a href="movies">Movies</a></li>
                    <li><a href="stream">Stream</a></li>
                    <li><a href="events">Events</a></li>
                    <li><a href="plays">Plays</a></li>
                    <li><a href="sports">Sports</a></li>
                    <li><a href="activities">Activities</a></li>
                    <li><a href="buzz">Buzz</a></li>
                </ul>
                <ul className='flex text-xs px-12 items-center gap-5 my-2'>
                    <li><a href="listyourshow">ListYourShow</a></li>
                    <li><a href="corporates">Corporates</a></li>
                    <li><a href="offers">Offers</a></li>
                    <li><a href="gift_cards">Gift Cards</a></li>
                </ul>

                
            </div>
    </div>
  )
}

export default BottomNavBar