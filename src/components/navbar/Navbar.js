import { Link } from "react-router-dom";
import menu from "../../assets/menu.png";
import searchImage from "../../assets/search.svg";
import logoImage from "../../assets/youtube.png";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="bg-zinc-50 shadow-md">
      <div className="max-w-full mx-auto px-5 lg:px-3 flex justify-between py-3">
        <div className="flex">
          <img className="h-10" src={menu} alt="Learn with Sumit" />
          <Link to="/">
            <img className="h-10 ml-5" src={logoImage} alt="Learn with Sumit" />
          </Link>
        </div>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <Search />
          <img
            className="inline h-4 cursor-pointer"
            src={searchImage}
            alt="Search"
          />
        </div>
      </div>
    </nav>
  );
}
