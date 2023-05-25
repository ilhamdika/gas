import NavigationBar from "@/Components/NavigationBar";
import CardKarir from "@/Components/CardKarir";

export default function Karir({karirs}) {
    return (
        <>
        
        <NavigationBar />
        
        <div class="grid grid-cols-4 gap-4 mt-3">
             
            {karirs.map((karir)=>(
            <CardKarir
            key={karir.id}
            name={karir.name}
            thumbnail={karir.thumbnail}
            deskripsi={karir.deskripsi}
            />
            ))}
        </div>
        </>
    
        
    )
}