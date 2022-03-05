import { useState } from "react"
const Title =({head_title, formClicked, btn_title, children})=>{
	const [child, setChild] = useState(false)
	const [btnClo, setBtnClo] = useState("Close")
	var btn = child?"Close":btn_title;
	var ch=!child?'btn btn-sm btn-block btn-warning':'btn btn-sm btn-block btn-danger'
	return (
		<header className="mb-4">
			<div className="row mt-3 p-3">
				<div className="col-md-9">
					{!child &&<h3>{head_title}</h3>}
					
				</div>
				<div className="col-md-3">
					<button className={ch} onClick={()=>setChild(!child)}>{btn}</button>
				</div>
				
			</div>
			<div className="row">
				<div className="col-12">{child && children }</div>
			</div>
		</header>
		)
}

export default Title;