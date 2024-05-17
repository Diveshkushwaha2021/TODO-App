import React, { useState } from 'react'
import { IoAddSharp } from "react-icons/io5";

const AddTodo = ({ onInputChange }) => {

	const [todoName, setTodoName] = useState();
	const [todoDueDate, settodoDueDate] = useState();

	const handlerNameChange = (event) => {
		setTodoName(event.target.value);
		console.log("name", event.target.value)
	}
	const handlerDateChange = (event) => {
		settodoDueDate(event.target.value);
		console.log("Date", event.target.value)

	}
	const handleAddButtonClicked = () => {
		onInputChange(todoName, todoDueDate);
		setTodoName("");
		settodoDueDate("");
	}

	return (
		<div className='container'>
			<div className='grid grid-cols-3 my-3  '>
				<input type='text' id="" placeholder='Enter todo items here'
					className='border px-2 rounded-md ' required value={todoName} onChange={handlerNameChange} />
				<input type='date' id="" className='border px-2 rounded-sm' required value={todoDueDate} onChange={handlerDateChange} />
				<div className='mx-auto'>
					<button className=' flex w-20 justify-center rounded-md bg-green-600
					 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500
					  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
						onClick={handleAddButtonClicked}>
						Add <IoAddSharp className='m-1.5' />
					</button>
				</div>

			</div>

		</div >
	)
}

export default AddTodo