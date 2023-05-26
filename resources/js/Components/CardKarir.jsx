import { Link } from "@inertiajs/react";

export default function CardKarir ({thumbnail, deskripsi, name}){
    return (
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link>
                <div className="">
                    <img src={thumbnail} alt="" className="flex items-center justify-center"/>
                </div>
                </Link>
                <Link>
                <h1>{name}</h1>
                    <div className=" ">{deskripsi}</div>
                </Link>
            </div>
            
        
    )
}