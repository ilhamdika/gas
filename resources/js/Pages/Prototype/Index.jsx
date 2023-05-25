import Banner1 from '@/Components/Banner1';
import Banner2 from '@/Components/Banner2';
import CardKarir from '@/Components/CardKarir';
import Footer from '@/Components/Footer';
import KategoriTokoCard from '@/Components/KategoriTokoCard';
import NavigationBar from '@/Components/NavigationBar';
import PopularFitur from '@/Components/PopularFitur';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from '@inertiajs/react';
export default function Index () {
    return (
        <>
        
            <NavigationBar />
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-yellow-500">
                <div className="bg-yellow-500 pt-10 flex items-center h-screen">
                    <div className='ml-20'>
                    <h1 className='text-7xl font-black text-white'>Bergabung Dengan GAS</h1>
                    <p className='pt-3 font-semibold'>Aplikasi Gas akan membantumu dalam memantau stock produk tokomu dan menjangkau customer yang lebih luas</p>

                    <p className='mt-7'>Unduh</p>
                    <Link>
                    <img src='/images/playStore.png' className='w-40 mt-5' />
                    </Link>

                    <div class="flex flex-row pt-20">
                        <img src='/images/instagram.png' className='w-10 ' />
                        <img src='/images/fb.png' className='w-10 ml-1 ' />
                    </div>

                    </div>
                </div>
                <div className="bg-yellow-500 p-4">
                    <img src='/images/hero.png'/>
                </div>
            </div>

            <div className='mt-10'>
                <h1 className='text-center text-5xl font-black'>Popular Fitur</h1>
                <p className='text-center text-1xl mt-1' >Nikmati beberapa fitur yang kami berikan</p>
                <div className='flex justify-center h-screen mt-20 max-h-60'>
                    {[1,2,3,4].map((i)=>(
                    <PopularFitur 
                    key={i}
                    title={'Fitur 1'}
                    thumbnail={'/images/hero.png'}
                    />
                    ))}
                </div>
            </div>

            <div className='mt-10'>
                <h1 className='text-center text-5xl font-black'>Kategori Toko</h1>
                <p className='text-center text-1xl mt-1' >Apapun jenis tokomu dapat bergabung dengan Gas</p>
                <div className='flex justify-center h-screen mt-20 max-h-60'>
                        {[1,2,3,4].map((i)=>(
                        <KategoriTokoCard 
                        key={i}
                        thumbnail={'https://ottopay.id/lkapps/wp-content/uploads/2022/08/14-0-liputan4-com-1200x900.jpg'}
                        title={'Toko 1'}
                        deskripsi={'Deskripsi Toko 1'}
                        />
                        ))}
                </div>
                <div class="flex items-center justify-center">
                <Link>
                    <PrimaryButton>More</PrimaryButton>
                </Link>
                </div>
            </div>

            <div className='mt-10'>
                <h1 className='text-center text-5xl font-black'>Kategori Toko</h1>
                <p className='text-center text-1xl mt-1' >Apapun jenis tokomu dapat bergabung dengan Gas</p>
                <div className='flex justify-center h-screen mt-20 '>
                    
                    <img src='/images/maps.png' className='w-full h-auto pr-20 pl-20 h-30' />
                </div>
            </div>

            <div className='mt-10'>
                <h1 className='text-center text-5xl font-black'>Kategori Toko</h1>
                <p className='text-center text-1xl mt-1' >Apapun jenis tokomu dapat bergabung dengan Gas</p>
            </div>

            <Banner1 />
            <Banner2 />

            <div className='mt-10 ml-20 mr-20 pl-30 pr-30' >
                <h1 className='text-center text-5xl font-black'>Tentang Kami</h1>
                <div className='w-50'>

                <p className='text-center text-1xl mt-1 w-100' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur omnis tenetur, earum accusantium odit facere libero dolor tempora voluptate excepturi assumenda deserunt beatae deleniti cupiditate nemo, laudantium eum vitae?,</p>
                </div>
                <p className='text-center text-1xl mt-1' >Jadilah bagian dari kami dan kembangkan bakat, ide kreatifmu dalam GAS</p>
                    <div class="flex flex-row flex items-center justify-center">
                        <Link>
                            <img src='/images/instagram.png' className='w-10 ' />
                        </Link>
                        <Link>
                            <img src='/images/fb.png' className='w-10 ml-1 ' />
                        </Link>
                    </div>

            </div>


            <div className='mt-10'>
                <h1 className='text-center text-5xl font-black'>Temukan Karir Impianmu</h1>
                <p className='text-center text-1xl mt-1' >Mari bergabung bersama kami,</p>
                <p className='text-center text-1xl mt-1' >Jadilah bagian dari kami dan kembangkan bakat, ide kreatifmu dalam GAS</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-20 ml-20 mt-10">
                    {[1,2,3,4].map((i)=>(

                    <CardKarir 
                    key={i}
                    thumbnail={'/images/karir1.png'}
                    deskripsi={'loremasdfuhgaopifgsapifgasp9fig'}
                    />
                    ))}
                    
                </div>
            </div>
            
            <Footer />
        </>
    )
}