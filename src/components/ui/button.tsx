import React from "react";

  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow"
    >
      {children}
    </button>
  );
}
