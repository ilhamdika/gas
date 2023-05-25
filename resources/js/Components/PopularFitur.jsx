// // import PropType from 'prop-types'

// // PopilarFitur.propType ={
// //     title: PropType.string,
// //     thumbnail: PropType.string
// }

export default function PopularFitur ({thumbnail, title}){
    return (
        <div className="w-40 max-w-xs mx-h-xs">
            <a href="#!">
            <img
            className="w-30"
            src={thumbnail}
            alt="" />
        </a>
            <div className="p-6">
                <h5
                className=" text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {title}
                </h5>
            
            </div>
        </div>
       
    )
}