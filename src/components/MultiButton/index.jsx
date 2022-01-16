import React from 'react';

const MultiButton = ({
  onClickOne, onClickTwo, selected,
}) => {
  const selectedCss = 'border-indigo-600 bg-indigo-600 text-white';
  const notSelectedCss = 'border-gray-400 bg-gray-400 hover:border-gray-500 hover:bg-gray-500 text-white';

  return (
    <div className="flex justify-center gap-1">
      <div className={`${selected === 1 ? selectedCss : notSelectedCss} w-32 group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase focus:outline-none sm:flex-1 shadow-sm cursor-pointer`} onClick={onClickOne} role="presentation">
        Alessandro
      </div>

      <div className="flex justify-center items-center relative">
        <p className="flex justify-center items-center z-10 w-6 h-6 absolute bg-gray-900 text-white text-xs rounded-full text-center">
          or
        </p>
      </div>

      <div className={`${selected === 2 ? selectedCss : notSelectedCss} w-32 group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase focus:outline-none sm:flex-1 shadow-sm cursor-pointer`} onClick={onClickTwo} role="presentation">
        Luca
      </div>
    </div>
  );
};

export default React.memo(MultiButton);
