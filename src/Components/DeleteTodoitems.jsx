import React from 'react'

const DeleteTodoitems = () => {
	let todoName = "Vist To Chandigard";
	let todoDate = "13/05/24";
	return (
		<div className='container'>
			<div className='flex gap-6'>
				<div className='col-6'>{todoName}</div>
				<div>{todoDate}</div>
				<div className='flex justify-center items-center'>
					<button className='flex w-32justify-center rounded-md bg-indigo-600
					 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500
					  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
						Delete
					</button>
				</div>
			</div>
		</div>
	)
}

export default DeleteTodoitems