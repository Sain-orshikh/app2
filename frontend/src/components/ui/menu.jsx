import { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import mgl from '../../public/mongolia.png'
import en from '../../public/english.png'

import { useAtom } from "jotai";
import { Language } from "../ThemeAtom.js";
import { setLanguage } from "../ThemeAtom.js";

const Menu = () => {
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
  
  const [isAnimating, setIsAnimating] = useState(false);
  const handleMenuClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 100);
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleMenuClick}
      >
        <HiOutlineMenuAlt3 fontSize={35} className="hover:cursor-pointer text-gray-700"/>
      </button>

      {isAnimating && (
        <motion.div
        initial={{ x: "100%" }} // Start off-screen left
        animate={{ x: "0%" }} // Move to center
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-50"
        >
          Hi!!!
        </motion.div>
      )}
    </div>
  );
};

export default Menu;
