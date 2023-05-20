import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import userpic from '../../assets/images/gallary/user.png'
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)



    const handleLogOut = () => {
        logOut()
            .then(() => {
                // localStorage.removeItem('car-access-token')
            })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/addtoy'>Add Toys</Link></li>
        <li><Link to='/alltoys'>All Toy</Link></li>

        {user?.email ?
            <>
                <li><Link to='/mytoys'>My Toys</Link></li>
                {/* user photo  */}
                {user.photoURL ? <img className='w-5 h-5 my-auto rounded-full' src={user.photoURL} alt="" /> :  <img className='w-5 h-5 my-auto rounded-full' src={userpic} alt="" />}
                <li><button onClick={handleLogOut}>Log Out</button></li>
            </>
            :
            <li><Link to='/login'>Login</Link></li>
        }
    </>


    return (
        <div className="flex items-center shadow-lg mb-14 sm:flex sm:justify-center h-28 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="mt-0 text-xl normal-case btn btn-ghost">
                    <p className='p-0 font-bold text-secondary'>ElevenToys</p>
                </Link>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;