import { XIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAll, uploadFile } from '../Store/Slices/FileSlice';

function Modal(props) {

  const initialForm = {
    fileName: "",
    fileData: ""
  };

  const [form, setForm] = useState(initialForm);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(uploadFile(form));
    dispatch(getAll());
    props.setOpen(false);
    setForm(initialForm);
  };

  return (
    <form className={` ${props.open ? 'flex' : 'hidden'} fixed inset-0 items-center justify-center`} onSubmit={submitHandler}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-96 p-6 border-2 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Create a File</h1>
          <button
            aria-label="Close"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
            onClick={() => props.setOpen(false)}
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <input
          type="text"
          value={form.fileName}
          onChange={(e) => setForm({ ...form, fileName: e.target.value })}
          placeholder="File name"
          className="w-full p-3 border rounded-lg border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none mb-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition font-medium"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default Modal;
