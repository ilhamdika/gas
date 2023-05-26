import Authenticated from "@/Layouts/Authenticated/Index";
import { Link, Head, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";




export default function FiturCreate({auth}) {

    const { setData, post, processing, errors } = useForm({
        name:'',
        deskripsi:'',
        thumbnail:'',
    });

    

    const handleOnChange = (event) => {
        setData(event.target.name, 
            event.target.type === "file"
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.dashboard.fitur.store'));
    };
    return (
        
            <Authenticated auth={auth}>
                <Head title="Add Category" />
                <Link href={route('admin.dashboard.fitur.index')}>
                    <PrimaryButton className="bg-green-500 mb-4">Back</PrimaryButton>
                </Link>
                <h1 className="text-xl mb-2">Add Fitur</h1>
                <form onSubmit={submit}>
                    <InputLabel 
                        forInput="name"
                        value="Fitur"
                        className="text-xl mt-5"
                    />
                    <TextInput
                        type="text"
                        name="name"
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
                        handleChange={handleOnChange}
                        placeholder="Add deskripsi"
                        className="w-full h-32"
                    />

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
                        Add Fitur
                    </PrimaryButton>
                </form>
            </Authenticated>
        )
    
    
}