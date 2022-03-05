import { useState } from 'react'

import SellerForm from '../components/SellerForm';

import Table from '../components/Table';
import TableRow from '../components/TableRow';
import TableCell from '../components/TableCell';
import Title from "../components/Title"

const SellersPage = (props) =>{
	const [form, setForm] = useState(false)

	return (
		<div className='row'>
			<div className="col-2"></div>
			<div className="col-8">
			<Title 
				head_title="List of Registered Sellers"
				btn_title="Register Seller"
				formClick={()=>{setForm(true)}}
			>
			<SellerForm />
			</Title>
			<Table>				
				<TableRow>
					<th>#</th>
					<th>Name</th>
					<th>Location</th>
					<th></th>
					<th></th>
				</TableRow>
				<TableRow>
					<TableCell text="1"/>
					<TableCell text="Simon Aula"/>
					<TableCell text="Kyaggwe"/>
					<td><button className="btn btn-sm btn-primary">View Details</button></td>
					<td><button className="btn btn-sm btn-success">Edit Details</button></td>
				</TableRow>
				<TableRow>
					<TableCell text="1"/>
					<TableCell text="Simon Aula"/>
					<TableCell text="Kyaggwe"/>
					<td><button className="btn btn-sm btn-primary">View Details</button></td>
					<td><button className="btn btn-sm btn-success">Edit Details</button></td>
				</TableRow>
				<TableRow>
					<TableCell text="1"/>
					<TableCell text="Simon Aula"/>
					<TableCell text="Kyaggwe"/>
					<td><button className="btn btn-sm btn-primary">View Details</button></td>
					<td><button className="btn btn-sm btn-success">Edit Details</button></td>
				</TableRow>
			</Table>
			</div>

			<div className="col-2"></div>
		
		</div>
		)
}

export default SellersPage;