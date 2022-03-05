import { useState } from "react"
import Title from "../components/Title"
import Table from '../components/Table';
import TableRow from '../components/TableRow';
import TableCell from '../components/TableCell';
import CategoryForm from "../components/CategoryForm"
const CategoriesPage = (props) =>{
	const [add, setAdd] = useState(true);
	return (
		<div>
			<div className="row">
			<div className="col-2"></div>	
				<div className="col-8">
				<Title
					head_title="List of Categories"
					btn_title="Add Category"
					formClick={()=>{setAdd(true)}}
				>
				<CategoryForm />
				</Title>
				<Table>
					<TableRow>
					<th>#</th>
					<th>Name</th>
					<th>Units</th>
					<th>Seller's Name</th>
					<th></th>
					<th></th>
				</TableRow>
				</Table>
				</div>
				<div className="col-2"></div>
			</div>
		</div>
		)
}

export default  CategoriesPage;