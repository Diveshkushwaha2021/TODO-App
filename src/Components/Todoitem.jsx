import React from 'react'

const Todoitem = ({ todoName, todoDate, onDeleteClick }) => {
	return (
		<div className='block'>
			<div className='grid grid-cols-3  my-3 ml-2'>
				<div className='text-left'>{todoName}</div>
				<div className=''>{todoDate}</div>
				<div className='mx-auto'>
					<button className='flex w-20 justify-center rounded-md bg-red-600
					 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500
					  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
						onClick={() => (onDeleteClick(todoName))}>
						Delete
					</button>
				</div>
			</div>
		</div>
	)
}


export default Todoitem