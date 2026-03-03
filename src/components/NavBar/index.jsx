import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useShoppingCartProvider } from "../../Context";
import { BsCart4 } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const { openCheckoutMenu, cartProducts } = useShoppingCartProvider();
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-apple-blue font-medium transition-colors"
      : "text-apple-secondary hover:text-apple-text transition-colors";

  const mobileLinkClass = ({ isActive }) =>
    `block py-3 px-4 rounded-xl text-sm transition-colors ${
      isActive
        ? "bg-apple-bg text-apple-blue font-medium"
        : "text-apple-text hover:bg-apple-bg"
    }`;

  return (
    <nav className="fixed z-20 top-0 w-full bg-white/80 backdrop-blur-xl border-b border-apple-border">
      {/* Main bar */}
      <div className="flex justify-between items-center py-4 px-5 lg:px-10">
        {/* Left group: Logo + category links */}
        <div className="flex items-center gap-8">
          <div className="text-lg font-bold tracking-tight text-apple-text">
            <NavLink to="/" onClick={close}>Shopi</NavLink>
          </div>

          <ul className="hidden lg:flex items-center gap-6 text-sm">
            <li><NavLink to="/" className={linkClass}>All</NavLink></li>
            <li><NavLink to="/mens-clothing" className={linkClass}>Men's clothing</NavLink></li>
            <li><NavLink to="/electronics" className={linkClass}>Electronics</NavLink></li>
            <li><NavLink to="/womens-clothing" className={linkClass}>Women's clothing</NavLink></li>
            <li><NavLink to="/jewelery" className={linkClass}>Jewelery</NavLink></li>
          </ul>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Desktop account links */}
          <ul className="hidden lg:flex items-center gap-4 text-sm">
            <li className="text-apple-secondary text-xs hidden xl:block">marlonsalazar@mail.com</li>
            <li><NavLink to="/my-orders" className={linkClass}>My Orders</NavLink></li>
            <li><NavLink to="/my-account" className={linkClass}>My Account</NavLink></li>
            <li><NavLink to="/sign-in" className={linkClass}>Sign In</NavLink></li>
          </ul>

          {/* Cart button — always visible */}
          <button
            onClick={openCheckoutMenu}
            className="relative flex items-center gap-2 bg-apple-bg hover:bg-apple-border text-apple-text rounded-full px-3.5 py-2 transition-colors text-sm"
          >
            <BsCart4 className="w-4 h-4" />
            {cartProducts.length > 0 && (
              <span className="flex items-center justify-center bg-apple-blue text-white text-[10px] font-semibold rounded-full min-w-[18px] h-[18px] px-1">
                {cartProducts.length}
              </span>
            )}
          </button>

          {/* Hamburger — mobile/tablet only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-apple-text hover:bg-apple-bg transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile/tablet dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-apple-border bg-white/95 backdrop-blur-xl px-4 pb-5">
          <div className="pt-3">
            <p className="text-[10px] font-semibold text-apple-secondary uppercase tracking-widest px-4 pb-1">
              Categories
            </p>
            <NavLink to="/" onClick={close} className={mobileLinkClass}>All</NavLink>
            <NavLink to="/mens-clothing" onClick={close} className={mobileLinkClass}>Men's clothing</NavLink>
            <NavLink to="/electronics" onClick={close} className={mobileLinkClass}>Electronics</NavLink>
            <NavLink to="/womens-clothing" onClick={close} className={mobileLinkClass}>Women's clothing</NavLink>
            <NavLink to="/jewelery" onClick={close} className={mobileLinkClass}>Jewelery</NavLink>

            <div className="border-t border-apple-border my-3" />

            <p className="text-[10px] font-semibold text-apple-secondary uppercase tracking-widest px-4 pb-1">
              Account
            </p>
            <NavLink to="/my-orders" onClick={close} className={mobileLinkClass}>My Orders</NavLink>
            <NavLink to="/my-account" onClick={close} className={mobileLinkClass}>My Account</NavLink>
            <NavLink to="/sign-in" onClick={close} className={mobileLinkClass}>Sign In</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
