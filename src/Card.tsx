import heroMobile from "./assets/hero-mobile.jpg";
import heroDesktop from "./assets/hero-desktop.jpg";
import iconArrow from "./assets/icon-arrow.svg";
import iconError from "./assets/icon-error.svg";
import logo from "./assets/logo.svg";
const Card = () => {
	const handleBtnOnClick = () => {
		let elem = document.getElementById("email");
		if (elem === null) return;
		const ok = /^\w+\@[a-z]+\.[a-z]+$/.test(
			(elem as HTMLInputElement).value
		);
		if (!ok) {
			elem = document.getElementById("email");
			if (!elem?.classList.contains("error"))
				elem?.classList.add("error");
			elem = document.getElementById("errorMsg");
			if (!elem?.classList.contains("error"))
				elem?.classList.add("error");
			elem = document.getElementById("iconError");
			if (!elem?.classList.contains("error"))
				elem?.classList.add("error");
		}
		elem = document.getElementById("email");
		(elem as HTMLInputElement).value = "";
	};
	const handleInputOnClick = () => {
		let elem = document.getElementById("email");
		if (elem?.classList.contains("error")) elem?.classList.remove("error");
		elem = document.getElementById("errorMsg");
		if (elem?.classList.contains("error")) elem?.classList.remove("error");
		elem = document.getElementById("iconError");
		if (elem?.classList.contains("error")) elem?.classList.remove("error");
	};
	return (
		<main
			className="flex flex-col w-full px-12 h-[90%] max-w-[720px] min-w-[320px] my-4 
		md:flex-row-reverse md:w-screen md:h-screen md:my-0 md:px-0 md:max-w-none md:min-h-[720px] md:bg-[url('/src/assets/bg-pattern-desktop.svg')]"
		>
			<div className="hidden w-2/5 md:block">
				<img src={heroDesktop} alt="" className="w-full h-full" />
			</div>
			<div className="md:flex md:flex-col md:w-2/5 md:mx-auto md:pt-16 md:relative">
				<div className="md:h-fit md:absolute">
					<img src={logo} alt="" />
				</div>
				<div className="w-auto -mx-12 md:hidden">
					<img className="w-full" src={heroMobile} alt="" />
				</div>
				<div className="relative pt-16 md:pt-48">
					<h1 className="text-[3.5rem] uppercase tracking-widest font-bold text-center leading-[3.5rem] text-Dark_Grayish_Red md:text-left">
						{" "}
						<span className="text-Desaturated_Red font-light">
							We're
						</span>{" "}
						coming soon
					</h1>

					<p className="text-center py-8 md:text-left">
						Hello fellow shoppers! We're currently building our new
						fashion store. Add your email below to stay up-to-date
						with announcements and our launch deals.
					</p>

					<div className="w-full h-16 relative">
						<input
							id="email"
							onClick={handleInputOnClick}
							placeholder="Email Address"
							className="w-full h-full rounded-full placeholder:text-Desaturated_Red border-Desaturated_Red border-solid border-2 px-8 text-lg bg-transparent outline-none text-Dark_Grayish_Red"
						></input>
						<button
							onClick={handleBtnOnClick}
							className="hover:brightness-[120%] hover:shadow-xl absolute w-[25%] h-full rounded-full gradient1 right-0"
							aria-label="submitBtn"
						>
							<span className="flex w-full justify-center">
								<img
									className="h-1/2 self-center"
									src={iconArrow}
									alt=""
								/>
								<img
									id="iconError"
									src={iconError}
									alt=""
									className="absolute -left-8 hidden"
								/>
							</span>
						</button>
					</div>
					<p
						className="invisible text-Soft_Red relative left-8 top-2"
						id="errorMsg"
					>
						Please provide a valid email
					</p>
				</div>
			</div>
		</main>
	);
};

export default Card;
