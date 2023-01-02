import React, {useState} from 'react'
import './ProductList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../data';
import { Link } from 'react-router-dom';

const ProductList = () => {

	const [data, setData] = useState(productRows)

const handleDelete = (id) => {
	setData(data.filter(it => it.id !== id))
}

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
	return (
		<div className='productListUser'>
			<img src={params.row.img} className='productListImg'/>
			{params.row.name}
		</div>
	)
  }},
  { field: 'stock', headerName: 'Stock', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
  },
  {
    field: 'price',
    headerName: 'Price',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200
  },
  {
    field: 'action',
    headerName: 'Action',
    description: 'This column has a value getter and is not sortable.',
    renderCell: (params) => {
		return(
			<>
			<Link to={'/product/' + params.row.id}>
				<button className="productListEdit">Edit</button>
			</Link>	
			<DeleteOutline className='productListDelete' onClick={() => handleDelete(params.row.id)}/>
			</>
			
		)
	}
  }
];

  return (
	<div className='productList'>
		 <DataGrid
			rows={data }
			columns={columns}
			pageSize={5}
			rowsPerPageOptions={[5]}
			checkboxSelection
			disableSelectionOnClick
		/>
	</div>
  )
}

export default ProductList