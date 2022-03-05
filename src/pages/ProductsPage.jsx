import Title from "../components/Title"
import Table from '../components/Table';
import TableRow from '../components/TableRow';
import TableCell from '../components/TableCell';
import ProductForm from "../components/ProductForm"
const ProductsPage = (props) =>{

	return (
		<div className="row">
			<div className="col-2"></div>
			<div className="col-8">
			<Title
				head_title="Available Products"
				btn_title="Add Product"
				formClick={()=>{}}
			>
			<ProductForm />
			</Title>
			<Table>
					<TableRow>
					<th>#</th>
					<th>Name</th>
					<th>Unit Price</th>
					<th>Quantity</th>
					<th>Category Name</th>
					<th>Seller's Name</th>
					<th></th>
					<th></th>
				</TableRow>
				</Table>
				</div>
			<div className="col-2"></div>
		</div>
		)
}

export default  ProductsPage;