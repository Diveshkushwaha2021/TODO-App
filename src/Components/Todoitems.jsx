import React from 'react'
import Todoitem from './Todoitem'

const Todoitems = ({ TodoItems, onDeleteClick }) => {
	return (
		<div className='container'>
			{TodoItems.map((item) => (<Todoitem key={item.name} todoName={item.name} todoDate={item.purchaseDate} onDeleteClick={onDeleteClick} />))}

		</div >
	)
}

export default Todoitems