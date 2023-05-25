import { Link } from '@inertiajs/react';

export default function NavigationBar () {
    return (
      <div>
        {/* <!-- component --> */}
			<div className="bg-yellow-500 pt-2 pl-20 pr-20">
				<nav className="relative px-4 py-4 flex justify-between items-center ">
					<Link className="text-3xl font-bold leading-none" href="#">
						GAS
					</Link>
					<div className="lg:hidden">
						<button className="navbar-burger flex items-center text-blue-600 p-3">
							<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
								<title>Mobile menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
							</svg>
						</button>
					</div>
					<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
						<li><Link className="text-xl text-black hover:text-gray-500" href={route('prototype.index')}>Beranda</Link></li>
						<li className="text-gray-300">
							
						</li>
						<li><Link className="text-xl text-black hover:text-gray-500" href="#">Tentang GAS</Link></li>
						<li className="text-gray-300">
							
						</li>
						<li><Link className="text-xl text-black hover:text-gray-500" href="#">Fitur</Link></li>
						<li className="text-gray-300">
							
						</li>
						<li><Link className="text-xl text-black hover:text-gray-500" href="#">Daftar</Link></li>
						<li className="text-gray-300">
						
						</li>
						<li><Link className="text-xl text-black hover:text-gray-500" href="#">Karir</Link></li>
					</ul>
					<Link className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</Link>
					<Link className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-2xl transition duration-200" href="#">
						<img src="https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png" className="w-5"/>
					</Link>
				</nav>
				{/* <div className="navbar-menu relative z-50 hidden">
					<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
					<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
					
						<div>
							<ul>
								<li className="mb-1">
									<a className="block p-4 text-sm font-semibold600 rounded" href="#">Home</a>
								</li>
								<li className="mb-1">
									<a className="block p-4 text-sm font-semibold600 rounded" href="#">About Us</a>
								</li>
								<li className="mb-1">
									<a className="block p-4 text-sm font-semibold600 rounded" href="#">Services</a>
								</li>
								<li className="mb-1">
									<a className="block p-4 text-sm font-semibold600 rounded" href="#">Pricing</a>
								</li>
								<li className="mb-1">
									<a className="block p-4 text-sm font-semibold600 rounded" href="#">Contact</a>
								</li>
							</ul>
						</div>
						<div className="mt-auto">
							<div className="pt-6">
								<a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
								<a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
							</div>
							
						</div>
					</nav>
				</div> */}
			</div>


      </div>
    )
}