import React from "react";

const Support = () => {
  return (
    <div>
      <div className="  shadow-md hover:shadow-lg mt-16 bg-white rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Potrebujete poradiť?
        </h2>
        <p className="text-gray-600 mb-4">
          Naši odborníci vám radi pomôžu s výberom vhodného príslušenstva pre
          vaše potreby.
        </p>
        <div className="flex items-center text-[#d61414] font-medium">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          +421 907 931 597
        </div>
      </div>
    </div>
  );
};

export default Support;
