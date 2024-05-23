import { Link } from 'react-router-dom'

function BottomNavBar(props) {
  return (
    <div>
         <div className={props.isDark?"bg-navcolor-800 flex justify-between px-20 w-full font-normal":"bg-gray-100 text-gray-900 flex justify-between px-20 p-auto w-full font-normal "}>
                <ul className='flex text-sm px-12 items-center  gap-5 my-2'>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/stream">Stream</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/plays">Plays</Link></li>
                    <li><Link to="/sports">Sports</Link></li>
                    <li><Link to="/activities">Activities</Link></li>
                    <li><Link to="/buzz">Buzz</Link></li>
                </ul>
                <ul className='flex text-xs px-12 items-center gap-5 my-2'>
                    <li><Link to="/listyourshow">ListYourShow</Link></li>
                    <li><Link to="/corporates">Corporates</Link></li>
                    <li><Link to="/offers">Offers</Link></li>
                    <li><Link to="/gift_cards">Gift Cards</Link></li>
                </ul>

                
            </div>
    </div>
  )
}

export default BottomNavBar