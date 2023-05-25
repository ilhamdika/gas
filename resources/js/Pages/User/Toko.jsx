import NavigationBar from "@/Components/NavigationBar";
import KategoriTokoCard from "@/Components/KategoriTokoCard";

export default function Toko({jenisTokos}) {
    return (
        <>
        
        <NavigationBar />
        
        <div class="grid grid-cols-4 gap-4 mt-3">
             
            {jenisTokos.map((jenisToko)=>(
            <KategoriTokoCard 
            key={jenisToko.id}
            thumbnail={jenisToko.thumbnail}
            title={jenisToko.name}
            deskripsi={jenisToko.deskripsi}
            />
            ))}
        </div>
        </>
    
        
    )
}