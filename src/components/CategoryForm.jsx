import { useState } from "react"
import { FormInput, FormSelect, FormSelectOption, FormButton } from "./Controls";
const CategoryForm = (props) =>{
	const [select, setSelect] = useState("");
	const [units, setUnits]=useState("")
	return (
		<form>
			<h3>Add Category</h3>
			<FormInput 
				label="Category Name"
				placeholder="Enter Category Name"
				type="text"
			/>
			
			<FormSelect 
				label="Seller's Name"
				value={select}
				onchange={(e)=>{setSelect(e.target.value);console.log(select)}}
			>
				<FormSelectOption value="" option="Select option"/>
				<FormSelectOption value={1} option="Aula"/>
				<FormSelectOption value={2} option="Simon" />
				<FormSelectOption value={3} option="Todi" />
			</FormSelect>
			<FormSelect
				value={units} 
				label="Units"
				onchange={()=>{}}
			>
				<FormSelectOption value="" option="---SELECT UNIT---"/>
				<FormSelectOption value="kg" option="Kilograms"/>
				<FormSelectOption value="ct" option="Cartons"/>
			</FormSelect>
			<FormButton 
				text="Submit"
				className="btn btn-sm btn-success btn-block float-left col-4"
				onclick={()=>{}}
				type="submit"
			/>
			
			
		</form>
		)
}

export default CategoryForm;