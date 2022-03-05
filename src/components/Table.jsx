const Table =({props, children})=>{
	return (
		<table className='table table-striped table-hover'>
			{children}
			<tfoot></tfoot>
		</table>
		)
}

export default Table;