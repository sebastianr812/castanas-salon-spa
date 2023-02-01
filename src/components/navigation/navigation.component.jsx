import { Link } from 'react-router-dom';
import MyLogo from '../logo/logo.component';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <div className="flex flex-col items-center h-20 mb-6 text-2xl font-light font-openSans ">

                <MyLogo />

                <div className="flex items-center justify-between w-full px-24 py-1.5 mt-2.5 border-4 border-black bg-zinc-50 border-x-0">
                    <div className="px-5 py-2.5 hover:bg-gray-400 hover:cursor-pointer"><Link className='' to='/'>HOME</Link></div>
                    <div className="px-5 py-2.5 hover:bg-gray-400 hover:cursor-pointer"><Link className='hover:cursor-pointer' to='/about'>ABOUT</Link></div>
                    <div className="px-5 py-2.5 hover:bg-gray-400 hover:cursor-pointer"><Link className='hover:cursor-pointer' to='/services'>SERVICES</Link></div>
                    <div className="px-5 py-2.5 hover:bg-gray-400 hover:cursor-pointer"><Link className='hover:cursor-pointer' to='/contact-us'>CONTACT US</Link></div>
                    <div className="hover:bg-green-900 px-5 py-2.5 bg-green-800 rounded-full align-center text-stone-50 drop-shadow-2xl">
                        <Link className="" href=''>Book Online</Link>
                    </div>

                </div>
                <Outlet />

            </div>
        </>
    );

}

export default Navigation;