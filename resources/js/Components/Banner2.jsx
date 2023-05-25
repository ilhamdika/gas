import { Link } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";

export default function Banner2 (){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-20 ml-20">
       <div className="pt-10 w-23">
                <PrimaryButton className="rounded">Daftar Toko</PrimaryButton>
                <h1 className='text-5xl font-blac mt-20'>Daftarkan Tokomu Segera</h1>
                <p className='mt-24'>Unduh</p>
                    <Link>
                    <img src='/images/playStore.png' className='w-40 mt-5' />
                    </Link>
            </div>
        <div className="">
        <img src="/images/banner2.png" alt="" className="w-250 h-100"/>
           
        </div>
    </div>
    )
}