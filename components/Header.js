import Image from "next/image";
import {
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UserIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-2 md:grid-cols-3 
    bg-white shadow-md p-5 md:px-10"
    >
      <div
        className="relative flex item-center 
      h-10 cursor-pointer my-auto "
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div
        className="hidden md:flex items-center md:border-2 
      rounded-full md:shadow-lg py-2"
      >
        <input
          type="text"
          placeholder="Where you going?"
          className="flex-grow pl-5 bg-transparent 
          outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon
          className="md:inline-flex h-8 
        bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>
      <div className="flex items-center space-x-4 justify-end">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div
          className="flex border-2 rounded-full p-2 
        items-center space-x-2 cursor-pointer justify-end"
        >
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
