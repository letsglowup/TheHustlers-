// components/NietzscheQuote.js

import React from 'react';

const Quote = () => {
  return (
    <div className="bg-amber-400 text-black p-8 mb-8 text-center flex flex-col justify-center items-center min-h-[180px] box-border">
      <p className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">
        "To become God is to realize you were never anything less."
      </p>
      <p className="text-lg md:text-xl lg:text-xl">
        — Ramana Maharshi
      </p>
    </div>
  );
};



export default Quote;