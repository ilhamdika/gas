import FlashMessage from "@/Components/FlashMessage";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/react";

export default function Fitur({flashMessage}) {
    return (
        <Authenticated>

            <h1>hi admin</h1>
            <Link href={route('admin.dashboard.fitur.create')}>
            <PrimaryButton>add</PrimaryButton>
            </Link>
            {flashMessage?. message && <FlashMessage message={flashMessage.message} />}
            
        </Authenticated>
    )
}