import { useState, useEffect } from 'react'
import axios from "axios"
import { BASE_URL } from "../constants"
const SellerForm =(props) =>{
	const [seller, setSeller] = useState({loc:"",sname:""})
	// const [loc, setLoc] = useState("")
	useEffect(()=>{
		fetch(`${BASE_URL}/Sellers`)
		.then(res=>{
			console.log(res)
			console.log(res.data)
		})
	},[])
	const addSeller = (e) =>{
		e.preventDefault();
		axios({
			method:"POST",
			url:`${BASE_URL}/Sellers`,
			data:{seller}
		})
		.then(res=>{
			console.log(res);
			console.log(res.data)
		})
	}
	return (
		<>
		
		<h3>Add Seller</h3>
		<form>
  <div className="form-group">
    <label for="email">Seller's Name</label>
    <input type="text" className="form-control" placeholder="Enter Seller's Name" id="name" value={seller.sname} onChange={(e)=>setSeller({...seller,sname:e.target.value})}/>
  </div>
  <div className="form-group">
    <label for="pwd">Seller's Location</label>
    <input type="text" className="form-control" placeholder="Enter Seller's Location" value={seller.loc} id="location" onChange={(e)=>setSeller({...seller, loc:e.target.value})} />
  </div>
  <div className="row">
  	<div className="col-md-4">
  		<button type="submit" className="btn btn-success btn-sm btn-block" onClick={(e)=>addSeller(e)}>Submit</button>
  	</div>
  	<div className="col-md-4"></div>
  	
  	</div>
  
  
</form>

</>
		);
}

export default SellerForm;