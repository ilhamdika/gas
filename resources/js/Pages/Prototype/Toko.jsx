import NavigationBar from "@/Components/NavigationBar";
import KategoriTokoCard from "@/Components/KategoriTokoCard";

export default function Toko() {
    return (
        <>
        
        <NavigationBar />
        
        <div class="grid grid-cols-4 gap-4 mt-3">
             
            {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((i)=>(
            <KategoriTokoCard 
            key={i}
            thumbnail={'https://ottopay.id/lkapps/wp-content/uploads/2022/08/14-0-liputan4-com-1200x900.jpg'}
            title={'Toko 1'}
            deskripsi={'Deskripsi Toko 1'}
            />
            ))}
        </div>
        </>
    
        
    )
}