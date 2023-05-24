import { useContext } from 'react';
//link
import { Link } from 'react-router-dom';
//icons
import { IoClose } from 'react-icons/io5';
//components
import Qty from '../components/Qty';
//context
import { CartContext } from '../context/cartContext';

const CartItem = ({ item }) => {
	const { removeFromCart } = useContext(CartContext);

	return (
		<div className="flex gap-x-8">
			<div className="flex gap-x-4 mb-3">
				<Link
					to={`product/${item.id}`}
					className="w-[70px] h-[70px]"
				>
					<img
						src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
						alt=""
					/>
				</Link>
			</div>
			<div>
				{/* title y delete card */}
				<div className=" flex gap-x-4 flex-1">
					<Link to={`product/${item.id}`}>{item.attributes.title}</Link>
					<div
						className="cursor-pointer text-[24px] hover:text-accent transition-all duration-200"
						onClick={() => removeFromCart(item.id)}
					>
						<IoClose />
					</div>
				</div>
				{/* quantity  */}
				<div className="flex items-center gap-x-12">
					<div className="flex gap-x-4 mb-2">
						<Qty item={item} />
					</div>
					<div className="text-accent text-xl">
						$ {item.attributes.price * item.amount}
					</div>
					{/* & price */}
				</div>
				<div>
					<span className="text-accent">
						${item.attributes.price} per price
					</span>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
