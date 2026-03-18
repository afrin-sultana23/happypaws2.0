import { Link, Outlet } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'
// import { useNavigate } from 'react-router-dom'
import Logo from '../../public/LOGO.png'
import cat from '../../public/cat.jpg'
import cat2 from '../../public/cat2.jpg'
import dog from '../../public/dog.jpg'
import Hero from '../../public/HERO.png'


const Home = () => {
    // const { user, logout } = useAuth()
    // const navigate = useNavigate()

    // const handleLogout = async () => {
    //     await logout()
    //     navigate('/login')
    // }

    return (
        <div style={{ fontFamily: "'Georgia', serif" }}>
            {/* Navbar */}
            <div className="navbar bg-white shadow-sm px-8 sticky top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/donations">Donations</Link></li>
                            <li><a>Blog</a></li>
                            <li><a>Volunteer</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <Link to="/" className="w-35 h-15">
                        <img src={Logo} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1 text-sm font-medium">
                        <li><Link to="/" className="hover:text-teal-700">Home</Link></li>
                        <li><Link to="/donations" className="hover:text-teal-700">Donations</Link></li>
                        <li><a className="hover:text-teal-700">Blog</a></li>
                        <li><a className="hover:text-teal-700">Volunteer</a></li>
                        <li><a className="hover:text-teal-700">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {user ? (
                        <>
                            <span className="text-sm hidden lg:block text-gray-500">{user.email}</span>
                            <button onClick={handleLogout} className="btn btn-sm btn-outline">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-ghost btn-sm">Login</Link>
                            <Link to="/register" className="btn btn-sm text-white" style={{ background: '#1a6b5c' }}>Register</Link>
                        </>
                    )}
                    <Link to="/payment" className="btn btn-sm text-white hidden lg:flex" style={{ background: '#1a6b5c' }}>
                        DONATE NOW
                    </Link>
                </div>
            </div>

            <Outlet />
            <div className="relative w-full" style={{ height: '520px', background: '#111' }}>
                <img
                    src={Hero}
                    alt="cat"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                        Every Paw Deserves Love
                    </h1>
                    <p className="text-lg mb-8 max-w-xl opacity-90">
                        Join us in rescuing, rehabilitating, and rehoming street animals across Bangladesh.
                    </p>
                    <Link to="/payment" className="btn btn-lg text-white px-10" style={{ background: '#1a6b5c', border: 'none' }}>
                        DONATE NOW
                    </Link>
                </div>
            </div>
            {/* Hero only on index */}

            {/*// ---- DONATION AMOUNT SECTION ----*/}

            <section className="py-20 text-center px-4">
                <p className="text-sm font-semibold tracking-widest mb-2" style={{ color: '#1a6b5c' }}>
                    CHANGING A LIFE STARTS HERE
                </p>
                <h2 className="text-4xl font-bold mb-4">Donation</h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm uppercase tracking-wide">
                    Sponsor a pet is your trusted resource hub dedicated to supporting animal nonprofits everywhere.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {['500TK', '1000TK', '2000TK', '5000TK'].map((amt) => (
                        <button key={amt} className="btn btn-outline px-10 text-base font-semibold border-2 border-[#1F7A7A] hover:bg-[#1F7A7A] hover:text-white">
                            {amt}
                        </button>
                    ))}
                </div>
                <Link to="/payment" className="btn btn-outline px-16 border-2 border-[#1F7A7A] hover:bg-[#1F7A7A] hover:text-white">
                    DONATE NOW
                </Link>
            </section>


            {/*//---- WHO WE ARE ----//*/}

            <section className="py-16  max-w-4xl  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                <div>
                    <p className="text-sm font-semibold tracking-widest mb-2" style={{ color: '#1a6b5c' }}>ABOUT US</p>
                    <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
                    <p className="text-gray-500 text-sm leading-relaxed uppercase tracking-wide">
                        Happy Paws provides a voice for vulnerable street animals through urgent rescue, medical
                        treatment, and vaccinations. We focus on rehabilitating injured and abandoned pets to find
                        them loving homes, while ensuring lifelong, dignified care for those who remain in our
                        sanctuary. Our mission is to transform lives one rescue at a time, replacing struggle with
                        compassion and security.
                    </p>
                </div>
                <div className="carousel carousel-vertical rounded-box h-96 w-80">
                    <div className="carousel-item h-full w-full">
                        <img src={cat} className="w-full h-full object-cover" />
                    </div>
                    <div className="carousel-item h-full w-full">
                        <img src={cat2} className="w-full h-full object-cover" />
                    </div>
                    <div className="carousel-item h-full w-full">
                        <img src={dog} className="w-full h-full object-cover" />
                    </div>
                    <div className="carousel-item h-full w-full">
                        <img src={cat2} className="w-full h-full object-cover" />
                    </div>
                </div>

            </section>

        </div>
    )
}



// ---- STATS ----


// ---- WHY CHOOSE US ----


// ---- HOW IT WORKS ----

// ---- SUCCESS STORIES ----


// ---- PARTNERS ----


// ---- FOOTER ----



export default Home
