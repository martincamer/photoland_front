//icons
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
//useNavigateHook

import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState('');
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsAnimating(false);
		}, 1000);
		//clear timeout
		return () => clearTimeout(timeout);
	});

	const handleSearchInput = e => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		// console.log(searchTerm);
		if (searchTerm.length > 0) {
			navigate(`/search?query=${searchTerm}`);
			document.querySelector('input').value = '';
			setSearchTerm('');
		} else {
			//if input is empty set animation to true
			setIsAnimating(true);
			// console.log('please search form something');
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={` ${
				isAnimating ? 'animate-shake' : 'animate-none'
			} relative w-full`}
		>
			<input
				onChange={handleSearchInput}
				className="input text-white"
				type="text"
				placeholder="Serch for a prodcut..."
			/>
			<button className="btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none">
				<FiSearch className="text-2xl" />
			</button>
		</form>
	);
};

export default SearchForm;
