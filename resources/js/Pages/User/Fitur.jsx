import NavigationBar from "@/Components/NavigationBar";
import PopularFitur from "@/Components/PopularFitur";

export default function Fitur({fiturs}) {
    return (
        <>
        <NavigationBar />

        <div class="grid grid-cols-4 gap-4 mt-3">
            {fiturs.map((fitur)=>(
                <PopularFitur 
                key={fitur.id}
                title={fitur.name}
                thumbnail={fitur.thumbnail}
                />

            ))}
        </div>
        </>
    )
}