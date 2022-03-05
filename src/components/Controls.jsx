export const FormInput =(props)=>{
	return (
		<div className="form-group">
			<label htmlFor={props.label}>{props.label}</label>
			<input 
				value={props.value}
				placeholder={props.placeholder}
				onChange={props.onchange}
				className="form-control"
				type={props.type}
			/>
		</div>
		)
}

export const FormSelect = ({label, value, onchange, children}) =>{
	return (
		<div className="form-group">
			<label htmlFor={label}>{label}</label>
			<select value={value} onChange={onchange} className="form-control">
				{children}
			</select>
		</div>
		)
}

export const FormSelectOption = (props) =>{
	return <option value={props.value}>{props.option}</option>
}

export const FormButton = (props) =>{
	return <button type={props.type} className={props.className}  onClick={props.onclick}>{props.text}</button>
}