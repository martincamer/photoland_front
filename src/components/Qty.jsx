//contenxt
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const Qty = ({ item }) => {
	const { handleSelect, handleInput } = useContext(CartContext);
	return (
		<div className="flex gap-x-6 items-center text-primary">
			{item.amount < 10 ? (
				<select
					onChange={e => handleSelect(e, item.id)}
					value={item.amount}
					className="p-2 rounded-lg w-[100px] h-12 outline-none text-primary bg-white"
				>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
			) : (
				<input
					onBlur={e => handleInput(e, item.id)}
					type="text"
					className="text-primary placeholder:text-primary h-12 rounded-lg bg-white p-4 w-[120px] outline-accent"
					placeholder={`${item.amount}`}
				/>
			)}
		</div>
	);
};

export default Qty;
