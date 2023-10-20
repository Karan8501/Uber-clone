import React, { useState } from 'react';

const AddButton = ({ children }) => {


    return (
        <button
            className="relative flex gap-1 text-[#fff] bg-black align-middle justify-center text-sm uppercase tracking-wide cursor-pointer font-bold py-2 px-4 min-w-[248px] rounded ml-1 leading-7 transition-all duration-200 hover:bg-red-600 hover:text-black"

        >
            {children}
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-slate-800 group-hover:bg-opacity-30 group-hover:w-full group-hover:h-full transition-all duration-300 rounded-full"></span>
        </button>
    );
};

export default AddButton;
