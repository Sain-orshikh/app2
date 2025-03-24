import { useState, useEffect, useRef } from "react";
import { FaChevronUp } from "react-icons/fa";
import mgl from '../../public/mongolia.png'
import en from '../../public/english.png'

import { useAtom } from "jotai";
import { Language } from "../ThemeAtom.js";
import { setLanguage } from "../ThemeAtom.js";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const dropdownRef = useRef(null);

  const [lang] = useAtom(Language);
  const [, setLang] = useAtom(setLanguage);
  const handleLanguageChange = (value) => {
    setLang(value);
  }; 

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
    setIsToggle((prev) => !prev);
    };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center px-4 py-2 border hover:bg-gray hover:cursor-pointer rounded-md"
      >
        <span>{lang}</span>
        <FaChevronUp fontSize={18} className={`ml-2 transition-transform duration-300 ${isToggle ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-20 bg-white border shadow-lg rounded-md">
          <button onClick={() => {toggleDropdown(); handleLanguageChange("EN");}} className="flex flex-row w-full py-1.5 items-center justify-center hover:bg-gray-100 rounded-t-md">
            <div className="w-[60%]">
                <img
                    src={en}
                    alt="EN"
                    className="w-6 h-6 inline-block"
                />
            </div>
            <span className="w-[50%] text-start">
                EN
            </span>
          </button>
          <button onClick={() => {toggleDropdown(); handleLanguageChange("MN");}} className="flex flex-row w-full py-1.5 items-center justify-center hover:bg-gray-100 rounded-b-md">
            <div className="w-[60%]">
                <img
                    src={mgl}
                    alt="MN"
                    className="w-6 h-6 inline-block"
                />
            </div>
            <span className="w-[50%] text-start">
                MN
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
