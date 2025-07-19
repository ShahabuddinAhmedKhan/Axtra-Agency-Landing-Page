

const Navbar = () => {
    const links = <>
        <li><a>HOME</a></li>
        <li><a>ABOUT</a></li>
        <li><a>PAGES</a></li>
        <li><a>SECVICES</a></li>
        <li><a>TEAM</a></li>
        <li><a>BLOG</a></li>
        <li><a>CONTACT</a></li>

    </>
    return (
        <div className="sticky top-0 z-200">
            <div className="navbar bg-base-100  p-5">
                <div className="navbar-start">

                    <img src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.f3d0d1c4.png&w=384&q=75" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold gap-10">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                    </button>
                    <div className=" divider divider-horizontal"></div>
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;