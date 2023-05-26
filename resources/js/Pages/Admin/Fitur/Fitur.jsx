import FlashMessage from "@/Components/FlashMessage";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/inertia-react";

export default function Fitur({flashMessage, fiturs}) {
    const {delete: destroy} =useForm()

    return (
        <Authenticated>

            <h1>hi admin</h1>
            
            {flashMessage?. message && <FlashMessage message={flashMessage.message} />}
            
            <div className="table-data">
				<div className="order">
					<div className="head">
						<h3>Comic</h3>
                        <Link href={route('admin.dashboard.fitur.create')}>
						    <PrimaryButton className="bg-green-500">
                                Add Fiur
                            </PrimaryButton>
                        </Link>
					</div>
					<table>
						<thead>
							<tr>
								<th>No</th>
								<th>Thumbail</th>
								<th>Name</th>
								<th>Deskripsi</th>
								<th>Action</th>
							</tr>
						</thead>
                        {fiturs.map((fitur, i=1)  => (


						<tbody key={fitur.id}>
							<tr>
                                <td>{i+1}</td>
								<td>
									<img src={`/storage/${fitur.thumbnail}`} />
									
								</td>
								<td>{fitur.name}</td>
								<td>{fitur.deskripsi}</td>
								<td>
                                    <Link href={route('admin.dashboard.fitur.edit', fitur.id)}>
                                        <PrimaryButton className="bg-yellow-500">
                                            Edit
                                        </PrimaryButton>
                                    </Link>
                            
                                    <PrimaryButton
                                    onClick={()=> {
										
										destroy(route('admin.dashboard.fitur.destroy', fitur.id)) 
									}}
                                    >
                                        Delete
                                    </PrimaryButton>
                                </td>
							</tr>
							
						</tbody>
                        ))}
					</table>
				</div>
				
			</div>
        </Authenticated>
    )
}