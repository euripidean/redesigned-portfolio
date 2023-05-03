import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
	const location = useLocation();
	const [isSticky, setIsSticky] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 400) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navToggle = () => {
		const menuBtn = document.getElementById("menuBtn");
		const menu = document.getElementById("menu");
		if (isOpen) {
			setIsOpen(false);
			menuBtn.classList.toggle("open");
			menu.classList.toggle("hidden");
			menu.classList.toggle("flex");
		} else {
			setIsOpen(true);
			menuBtn.classList.toggle("open");
			menu.classList.toggle("hidden");
			menu.classList.toggle("flex");
		}			
	};


	return (
		<header
			id="top"
			className={`w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l pr-6 z-50 ${
				isSticky ? 'pt-scroll' : ''
			}`}
		>
			<nav
				id="site-menu"
				exact="true"
				className={`flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white lg:pt-10 lg:pl-10  ${
					isSticky ? 'nav-sticky' : ''
				}`}
			>
				<div className="w-full sm:w-auto self-end sm:self-center flex flex-row-reverse sm:flex-none flex-no-wrap justify-between items-center">
					<button
						id="menuBtn"
						className="hamburger block sm:hidden focus:outline-none p-8"
						type="button"
						onClick={navToggle}
					>
						<span className="hamburger__top-bun"></span>
						<span className="hamburger__middle-bun"></span>
						<span className="hamburger__bottom-bun"></span>
					</button>
				</div>
				<div
					id="menu"
					className={`w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 ${
						isOpen ? 'flex' : 'hidden'
					}`}
				>
					{location.pathname !== "/" && (
            <NavLink
              className={`nav-link text-dark font-light hover:font-bold text-3xl w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 ${
                ({ isActive }) => isActive ? "active" : ""
              }`}
              exact
              to="/"
            >
              home
            </NavLink>
          )}
					<NavLink
						className={`nav-link text-dark font-light hover:font-bold text-3xl w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 ${ ({isActive}) => isActive? 'active' : '' }`}
						to="/work"
					>
						work
					</NavLink>
					<NavLink
						className={`nav-link text-dark font-light hover:font-bold text-3xl w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 ${ ({isActive}) => isActive? 'active' : '' }`}
						to="/about"
					>
						about
					</NavLink>
					<NavLink
						className={`nav-link text-dark font-light hover:font-bold text-3xl w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 ${ ({isActive}) => isActive? 'active' : '' }`}
						to="/contact"
					>
						contact
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
