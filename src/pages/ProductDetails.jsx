//useParams
import { useParams } from 'react-router-dom';
//useFetch hook
import useFetch from '../hooks/useFetch';
//components
import RelatedProducts from '../components/RelatedProducts';
//context
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const ProductDetails = () => {
	const { addToCart } = useContext(CartContext);

	const { id } = useParams();
	// console.log(id);

	// /products?populate=*&filters[categories][id][$eq]=${id}`
	//get products
	const { data: product } = useFetch(
		`/products?populate=*&filters[id][$eq]=${id}`
	);

	// console.log(data);
	if (!product) {
		return <div className="container mx-auto">loading...</div>;
	}

	//category title
	const categoryTitle =
		product[0].attributes.categories.data[0].attributes.title;
	// console.log(categoryTitle);

	return (
		<div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
					<div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
						<img
							src={`http://localhost:1337${product[0].attributes.image.data.attributes.url}`}
							alt=""
							className="w-full max-w-[65%]"
						/>
					</div>
					<div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
						<div className="uppercase text-accent text-lg font-medium mb-2">
							{/* title  category*/}
							{product[0].attributes.categories.data[0].attributes.title} {''}
							cameras
						</div>
						<h2 className="h2 mb-4">{product[0].attributes.title}</h2>
						<p className="mb-12">{product[0].attributes.description}</p>
						<div className="flex items-center gap-x-8 ">
							<p className="text-3xl text-accent font-semibold">
								${product[0].attributes.price}
							</p>
							<button
								onClick={() => addToCart(product, id)}
								className="btn btn-accent"
							>
								Add to cart
							</button>
						</div>
					</div>
				</div>

				{/* related products */}
				<RelatedProducts categoryTitle={categoryTitle} />
			</div>
		</div>
	);
};

export default ProductDetails;
