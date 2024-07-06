import React from 'react';

export const SubmitBtn = () => {
  return (
    <button
      type="submit"
      className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Submit
    </button>
  );
};

export const CancelBtn = () => {
  return (
    <button
      type="button"
      className="text-sm font-semibold leading-6 text-gray-900"
    >
      Cancel
    </button>
  );
};
