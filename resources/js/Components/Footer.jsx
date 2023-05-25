import { Link } from "@inertiajs/react"
export default function Footer(){
    return (
        <div className=" bg-gray-800 pt-20 pb-20">
            <div className="grid grid-cols-5 gap-2 ml-20 mr-20">
                <div className="">
                    <h1 className="text-white">GAS</h1>
                </div>
                <div className="">
                    <h1 className="text-white">Tentang GAS</h1>
                    <h1 className="text-white">Term and condition</h1>
                    <h1 className="text-white">Privasi</h1>
                </div>
                <div className="">
                    <h1 className="text-white">Hubungi kami</h1>
                    <h1 className="text-white">Kritik dan saran</h1>
                </div>
                <div className="">
                    <h1 className="text-white">Ikuti kami</h1>
                    <div class="flex flex-row mt-2">
                        <Link>
                            <img src='/images/instagram.png' className='w-10 ' />
                        </Link>
                        <Link>
                            <img src='/images/fb.png' className='w-10 ml-1 ' />
                        </Link>
                    </div>

                </div>
                <div className="">
                    <h1 className="text-white">Download</h1>
                    <Link>
                    <img src='/images/playStore.png' className='w-40 mt-5' />
                    </Link>
                </div>
            </div>
        </div>
    )
}