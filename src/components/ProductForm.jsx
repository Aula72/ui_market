import { useState, useEffect } from "react";
import { 
	FormInput,
	FormSelect,
	FormSelectOption,
	FormButton
} from "./Controls";


const ProductForm = (props) =>{
	const [product, setProduct] = useState({name:"", units:'', price:'', category:1, total:0})
	
	useEffect(()=>{		
		setProduct({...product, total: product.price*product.units});		
	},[product.units, product.price])
	return (
		<form>
			<FormInput 
				label="Product Name"
				type="text"
				value={product.name}
				onchange={(e)=>setProduct({...product,name:e.target.value})}
			/>
			<FormInput 
				label="Quantity"
				placeholder="Enter Quantity Ex. 1000"
				value={product.units}
				onchange={e=>setProduct({...product, units:e.target.value})}
			/>
			<FormInput 
				label="Unit Price"
				placeholder="Enter Unit Price Ex. 100"
				value={product.price}
				onchange={e=>setProduct({...product, price:e.target.value})}
			/>
			<FormSelect 
				value={product.category}
				label="Category"
				onchange={e=>setProduct({...product, category:e.target.value})}
			>
				<FormSelectOption value={1} option="Beverage"/>
				<FormSelectOption value={2} option="Flour"/>
			</FormSelect>
			<FormInput 
				label="Expected Sales"
				placeholder="Enter Quantity Ex. 1000"
				value={product.total}
				onchange={e=>setProduct({...product, price:e.target.value})}
			/>
			<FormButton 
				text="Submit"
				className="btn btn-sm btn-block btn-success"
				onclick={e=>{e.preventDefault();console.log(product)}}
			/>
		</form>
		)
}

export default ProductForm;