import aboutData from "../data/AboutData";

function Table() {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="overflow-x-auto">
          <div className="min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b-2  bg-[#60A76F] border-gray-100 text-left text-xs font-extrabold text-gray-600 uppercase tracking-wider"
                  >
                    Element
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b-2 bg-[#60A76F] border-gray-100 text-left text-xs font-extrabold text-gray-600 uppercase tracking-wider"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {aboutData.map((person) => (
                  <tr key={person.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap font-semibold tracking-wider">
                        {person.element}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {person.description}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
