import React, { useState } from 'react';
import { PlusSquareIcon, Trash2Icon, MenuIcon, XIcon } from 'lucide-react';
import { Link } from 'react-router';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFile, getAll, getFileData, setFileName } from '../Store/Slices/FileSlice';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const fileName = useSelector((state) => state.file.allFile);

  const deleteHandler = (fileName) => {
    dispatch(deleteFile(fileName));
    dispatch(getAll());
  };

  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen} />

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 dark:bg-blue-500 p-2 rounded-md text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          sidebar 
          fixed 
          inset-y-0 
          left-0 
          w-64 
          transform 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 
          md:w-1/6 
          border-r-2 
          border-gray-200 dark:border-gray-700 
          bg-gray-100 dark:bg-gray-800 
          h-screen 
          flex 
          flex-col 
          transition-transform 
          duration-300 
          ease-in-out 
          z-40
        `}
      >
        {/* Logo Section */}
        <div className="sidebar__logo flex items-center px-4 py-4 bg-blue-600 dark:bg-gray-700 text-white shadow-md">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png"
            alt="logo"
          />
          <h1 className="text-lg font-semibold tracking-wide hidden md:block">VSCode</h1>
        </div>

        {/* Menu Section */}
        <div className="sidebar__menu mt-3 px-4">
          <div className="menu__item flex justify-between items-center py-2 px-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition">
            <p className="text-gray-900 dark:text-white font-medium text-xl md:text-2xl">Explorer</p>
            <button
              className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 transition"
              onClick={() => setIsOpen(true)}
            >
              <PlusSquareIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* File List */}
        {fileName.map((item, index) => (
          <div className="sidebar__menu px-4" key={index}>
            <div className="menu__item flex justify-between items-center py-2 px-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition">
              <p
                className="text-gray-700 dark:text-gray-300 font-medium truncate"
                onClick={() => {
                  dispatch(getFileData(item));
                  dispatch(setFileName(item));
                  setIsMobileMenuOpen(false); // Close mobile menu on file selection
                }}
              >
                {item}
              </p>
              <Trash2Icon
                className="w-5 h-5 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500 transition"
                onClick={() => deleteHandler(item)}
              />
            </div>
          </div>
        ))}

        {/* Footer Section */}
        <div className="sidebar__footer mt-auto px-4 py-4 bg-gray-200 dark:bg-gray-700 border-t border-gray-300 dark:border-gray-600">
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            Made by{' '}
            <Link to={"https://github.com/Parmanand-Parveen"} target="_blank" className="text-blue-500 hover:underline">
              Parmanand
            </Link>
          </p>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

export default SideBar;
