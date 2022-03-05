import { useState } from "react"
import Title from "../components/Title"
import { Navigate, Switch } from "react-router-dom"
const ProductPage = (props) =>{
	const [isBack, setIsBack] = useState(false)
	if(isBack===true){
		return <Navigate to="/products" />
	}
	return (
		<div className="row">
			<Title
				head_title="Product Details"
				btn_title="Back To Products"
				formClick={()=>{console.log('am click');setIsBack(true)}}
			/>
		</div>
		)
}

export default  ProductPage;