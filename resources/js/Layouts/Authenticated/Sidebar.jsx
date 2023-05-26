import PrimaryButton from "@/Components/PrimaryButton"
import { Link } from "@inertiajs/react"
import Dropdown from '@/Components/Dropdown';

export default function Sidebar (){
    return (
        <section id="sidebar">
		<Link href="#" className="brand">
			<i className='bx bxs-smile'></i>
			<span className="text">Comic</span>
		</Link>
		<ul className="side-menu top">
			<li className="active">
				<Link>
					<i className='bx bxs-dashboard' ></i>
					<span className="text">Dashboard</span>
				</Link>
			</li>
			<li>
				<Link href={route('admin.dashboard.fitur.index')} >
					<i className='bx bxs-shopping-bag-alt' ></i>
					<span className="text">Fitur</span>
				</Link>
			</li>
			<li>
				<Link href={route('admin.dashboard.jenis-toko.index')}>
					<i className='bx bxs-doughnut-chart' ></i>
					<span className="text">Jenis Toko</span>
				</Link>
			</li>
			<li>
				<Link href={route('admin.dashboard.karir.index')} >
					<i className='bx bxs-doughnut-chart' ></i>
					<span className="text">Karir</span>
				</Link>
			</li>
			{/* <li>
				<Link href="#">
					<i className='bx bxs-message-dots' ></i>
					<span className="text">Message</span>
				</Link>
			</li>
			<li>
				<Link href="#">
					<i className='bx bxs-group' ></i>
					<span className="text">Team</span>
				</Link>
			</li> */}
		</ul>
		<ul className="side-menu">
			<li>
				<Link href="#">
					<i className='bx bxs-cog' ></i>
					<span className="text">Settings</span>
				</Link>
			</li>
			<li>
            <Link href={route('logout')} method="post" as="button">
                Log Out
            </Link>
                                    
			</li>
		</ul>
	</section>
    )
}