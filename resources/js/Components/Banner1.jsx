import { Link } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";


export default function Banner1 (){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-20 ml-20 mt-10">
            <div className="">
                <img src="/images/banner1.png" alt="" className="w-100"/>
            </div>
            <div className="pt-10 w-23">
                <PrimaryButton className="rounded">Daftar Toko</PrimaryButton>
                <h1 className='text-5xl font-blac mt-20'>Daftarkan Tokomu Segera</h1>
                <p className='mt-24'>Unduh</p>
                    <Link>
                    <img src='/images/playStore.png' className='w-40 mt-5' />
                    </Link>
            </div>
        </div>
    )
} 