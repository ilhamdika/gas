export default function KategoriTokoCard ({thumbnail, title, deskripsi}){
    return (
        <div className=" w-30 mr-5 ml-5 max-w-20">
  <div
    className="relative overflow-hidden bg-cover bg-no-repeat"
    data-te-ripple-init
    data-te-ripple-color="light">
    <img
      className="w-25 h-40 max-w-10"
      src={thumbnail}
      alt="" />
    <a href="#!">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    </a>
  </div>
  <div className="p-6">
    <h5
      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      {title}
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      {deskripsi}
    </p>
   
  </div>
</div>
    )
}