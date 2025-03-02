import { Save } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFile } from '../Store/Slices/FileSlice';

function Read() {
  const fileData = useSelector((state) => state.file.fileData);
  const data = useSelector((state) => state.file);
  const [text, setText] = useState('');
  const [savebtn, setSavebtn] = useState(false);

  const inputChange = (e) => {
    setText(e);
    setSavebtn(true);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setText(fileData);
  }, [fileData]);

  const saveChange = () => {
    dispatch(updateFile({ fileName: data.fileName, fileData: text }));
    setSavebtn(false);
  };

  return (
    <div className="w-full lg:w-5/6 lg:ml-auto h-screen bg-gradient-to-r from-green-400 to-blue-500 dark:from-gray-800 dark:to-gray-900 flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between lg:justify-end px-4 items-center border-b-2 h-18 bg-white dark:bg-gray-800 shadow-md">
        <div className='ml-14 text-black dark:text-white items-center flex lg:hidden'>
          <img
            className="w-10 block h-10 rounded-full mr-3"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png"
            alt="logo"
          />
          <h1 className="text-lg font-semibold tracking-wide md:block">VSCode</h1> 
        </div>
        <button
          className={`${
            savebtn ? 'flex bg-blue-600 cursor-pointer hover:bg-blue-700 transition' : 'flex cursor-not-allowed bg-blue-300'
          } items-center text-white px-4 py-2 rounded-lg`}
          onClick={saveChange}
        >
          <Save className="mr-2" /> Save
        </button>
      </nav>

      {/* Input Area */}
      <div className="flex-1 p-4">
        <textarea
          value={text}
          onChange={(e) => inputChange(e.target.value)}
          placeholder="Write your text here..."
          className="w-full h-full p-4 text-gray-800 dark:text-gray-100 text-lg border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-600 focus:outline-none resize-none shadow-lg bg-white dark:bg-gray-800"
        ></textarea>
      </div>
    </div>
  );
}

export default Read;
