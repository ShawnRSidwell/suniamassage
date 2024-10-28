import React from "react";

function Dropdown() {
  return (
    <div className="relative inline-block text-left">
      <label
        htmlFor="options"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Choose Massage Option:
      </label>
      <select
        id="options"
        name="options"
        className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="ayurveda">Ayurveda - 120 min</option>
        <option value="90">Deep Bliss - 90 min</option>
        <option value="75">Focused Serenity - 75 min</option>
        <option value="60">Essential Relaxation - 60 min</option>
      </select>
    </div>
  );
}

export default Dropdown;
