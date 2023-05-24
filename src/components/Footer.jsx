import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="pt-16 bg-primary">
			<div className="container mx-auto">
				<div className="text-center">
					<h2 className="h2 uppercase mb-6 font-semibold">
						Subscribe to our newsletter
					</h2>
					<p className="text-white/70 mb-6">
						Be the first to get the latest news about trends, promotions and
						much more!
					</p>
				</div>

				<div>
					<form
						className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 mt-6"
						action=""
					>
						<input
							type="text"
							placeholder="Your email adress"
							className="input text-white"
						/>
						<button className="btn btn-accent min-w-[150px]">Join</button>
					</form>

					{/* /links */}
					<div className="text-base text-white/60 flex gap-x-6 mt-6 max-w-max mx-auto">
						<a
							href="#"
							className="hover:text-white transition-all "
						>
							Returns Policy
						</a>
						<a
							href="#"
							className="hover:text-white transition-all "
						>
							Track your order
						</a>
						<a
							href="#"
							className="hover:text-white transition-all "
						>
							Shipping & delivery
						</a>
					</div>

					{/* sociales */}
					<div className="flex gap-x-6 max-w-max mx-auto text-xl mb-12 mt-6">
						<a
							href="#"
							className="hover:text-white transition-all "
						>
							<FaFacebook />
						</a>
						<a
							href="#"
							className="hover:text-white transition-all "
						>
							<FaTwitter />
						</a>
						<a
							href="#"
							className="hover:text-white transition-all "
						>
							<FaInstagram />
						</a>
						<a
							href="#"
							className="hover:text-white transition-all "
						>
							<FaYoutube />
						</a>
					</div>
				</div>
			</div>
			<div className="py-10 border-t border-t-white/10">
				{/* //copyright */}
				<div className="container mx-auto ">
					<div className="text-center text-sm text-white/60">
						<div>Copyright &copy; PhotoLand By Martin Camer.</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
