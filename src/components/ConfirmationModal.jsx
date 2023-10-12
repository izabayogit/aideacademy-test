import { useDeleteContext } from "@/context/DeleteContext";
import React, { useState } from "react";

// Define the Modal component
export const ConfirmationModal = () => {
  const { openModal, closeModal } = useDeleteContext();

  if (!openModal) {
    return null;
  }

  return (
    <div className="backdrop-opacity-10 backdrop-invert bg-black/40 fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full">
      <div className="relative md:w-[380px] max-w-2xl max-h-[500px] m-auto top-[50%] translate-y-[-60%]">
        <div className="relative bg-white rounded-lg shadow  m-auto">
          <div className="flex items-start justify-between p-4  rounded-t ">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Delete Comment
            </h3>
            <button
              onClick={closeModal}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              data-modal-hide="staticModal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500">
              Are you sure you want to delete this comment ? This will remove
              the comment and can&apos;t be undone.
            </p>
          </div>
          {/* Modal footer */}
          <div className="flex justify-around p-6 space-x-2  border-gray-200 rounded-b ">
            <button
              onClick={closeModal}
              type="button"
              className="uppercase md:min-w-[150px]  whitespace-nowrap   text-white bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-slate-600 "
            >
              No,Cancel
            </button>
            <button
              onClick={closeModal}
              type="button"
              className="bg-red-400 uppercase md:min-w-[150px] whitespace-nowrap  text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:bg-red-500 focus:z-10 "
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
