import Authenticated from "@/Layouts/Authenticated/Index";
import { Link, Head, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Inertia } from "@inertiajs/inertia";


export default function FiturEdit({auth, fitur}) {

    const { data, setData,  processing, errors } = useForm({
        ...fitur
    });

    

    const handleOnChange = (event) => {
        setData(event.target.name, 
            event.target.type === "file"
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        
        if(data.thumbnail === fitur.thumbnail){
            delete data.thumbnail;
        }

        Inertia.post(route('admin.dashboard.fitur.update', fitur.id), {
            _method: 'PUT',
            ...data
        });
    };
    return (
        
            <Authenticated auth={auth}>
                <Head title="Edit Fitur" />
                <Link href={route('admin.dashboard.fitur.index')}>
                    <PrimaryButton className="bg-green-500 mb-4">Back</PrimaryButton>
                </Link>
                <h1 className="text-xl mb-2">Add Fitur</h1>
                <form onSubmit={submit}>
                    <InputLabel 
                        input="name"
                        value="Fitur"
                        className="text-xl mt-5"
                    />
                    <TextInput
                        type="text"
                        name="name"
                        defaultValue={fitur.name}
                        handleChange={handleOnChange}
                        placeholder="Add Fitur"
                        iisError={errors.name}
                        className="w-full"
                    />
                    <InputError message={errors.name} className="mt-2" />

                    <InputLabel 
                    input="deskripsi"
                    value="deskripsi"
                    className="text-xl mt-2"
                    />
                    <TextInput
                        type="text"
                        name="deskripsi"
                        defaultValue={fitur.deskripsi}
                        handleChange={handleOnChange}
                        placeholder="Add deskripsi"
                        className="w-full h-32"
                    />
                    <InputError message={errors.deskripsi} className="mt-2" />
                    <h1>Apakah ingin mengubah gambar ini?</h1>
                    <img src={`/storage/${fitur.thumbnail}`} alt="thumbnail" className="w-25 h-20 mb-4" />
                    <InputLabel
                        input="thumbnail"
                        value="Thumbnail"
                        className="text-xl mt-2"
                    />
                    <TextInput
                        type="file"
                        name="thumbnail"
                        handleChange={handleOnChange}
                        placeholder="Add Thumbnail"
                        className="w-full"
                    />
                    <PrimaryButton className="bg-blue-500 mt-4">
                        Edit
                    </PrimaryButton>
                </form>
            </Authenticated>
        )
    
    
}