//icons
import { FiX } from 'react-icons/fi';
//import link
import { Link } from 'react-router-dom';
//useFetch
import useFetch from '../hooks/useFetch';

const CategoryNavMobile = ({ setCatNavMobile }) => {
	//get categories
	const { data } = useFetch('/categories');

	return (
		<div className="w-full h-full bg-primary p-8">
			{/* close icon  */}
			<div
				onClick={() => setCatNavMobile(false)}
				className="flex justify-end mb-8 cursor-pointer"
			>
				<FiX className="text-3xl" />
			</div>
			<div className="flex flex-col gap-y-8">
				{data?.map(category => {
					return (
						<Link
							className="uppercase font-medium"
							key={category.id}
							to={`products/${category.id}`}
						>
							{category.attributes.title} Cameras
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default CategoryNavMobile;
