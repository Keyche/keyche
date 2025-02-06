import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to access state

const Browser = () => {
  const location = useLocation();
  const { connection } = location.state || {}; // Access the connection details
  const [keys, setKeys] = useState([]);
  const [selectedKeyDetails, setSelectedKeyDetails] = useState(null);

  useEffect(() => {
    if (connection) {
      // Fetch keys from the API
      const fetchKeys = async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/api/keys?host=${connection.host}&port=${connection.port}`
          );
          const data = await response.json();
          setKeys(data); // Assuming the API returns { keys: [...] }
        } catch (error) {
          console.error('Error fetching keys:', error);
        }
      };

      fetchKeys();
    }
  }, [connection]);

  const handleKeyClick = async (key) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/keys/${key}?host=${connection.host}&port=${connection.port}`
      );
      const data = await response.json();
      setSelectedKeyDetails(data); // Assuming the API returns the key details
    } catch (error) {
      console.error('Error fetching key details:', error);
    }
  };

  const renderValue = (value) => {
    if (typeof value === 'string' || typeof value === 'number') {
      return <div className="font-mono bg-neutral-50 p-2 rounded">{value}</div>;
    } else if (Array.isArray(value)) {
      return (
        <table className="w-full">
          <thead className="bg-neutral-50">
            <tr>
              <th className="text-left p-2 text-sm font-medium text-neutral-600">Field</th>
              <th className="text-left p-2 text-sm font-medium text-neutral-600">Value</th>
            </tr>
          </thead>
          <tbody className="font-mono text-sm">
            {value.map((item, index) => (
              <tr key={index} className="border-t border-neutral-200/20">
                <td className="p-2 text-red-600">{index}</td>
                <td className="p-2">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (typeof value === 'object') {
      return (
        <table className="w-full">
          <thead className="bg-neutral-50">
            <tr>
              <th className="text-left p-2 text-sm font-medium text-neutral-600">Field</th>
              <th className="text-left p-2 text-sm font-medium text-neutral-600">Value</th>
            </tr>
          </thead>
          <tbody className="font-mono text-sm">
            {Object.entries(value).map(([field, val]) => (
              <tr key={field} className="border-t border-neutral-200/20">
                <td className="p-2 text-red-600">{field}</td>
                <td className="p-2">{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  return (
    <section id="browser" className="p-6 bg-white border border-neutral-200/20 m-6 rounded-lg">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-neutral-900">KeyDB Browser</h2>
        <div className="flex space-x-3">
          <div className="relative">
            <input
              type="search"
              placeholder="Search keys..."
              className="w-64 px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <svg className="w-5 h-5 absolute right-3 top-2.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <select className="px-4 py-2 border border-neutral-200/20 rounded-lg bg-white">
            <option>Database 0</option>
            <option>Database 1</option>
            <option>Database 2</option>
          </select>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Refresh
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {/* Key Tree */}
        <div className="col-span-3 border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <span className="font-medium text-neutral-900">Keys</span>
          </div>
          <div className="p-2">
            <div className="space-y-1">
              {keys.map((key, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-neutral-50 rounded cursor-pointer"
                  onClick={() => handleKeyClick(key)}
                >
                  {key}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Key Details */}
        <div className="col-span-9 border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <div className="flex justify-between items-center">
              <span className="font-medium text-neutral-900">Key: {selectedKeyDetails?.key || 'Select a key'}</span>
              <div className="flex space-x-2">
                <button className="p-1.5 text-neutral-600 hover:text-neutral-900">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button className="p-1.5 text-neutral-600 hover:text-red-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <div className="flex space-x-4 mb-4">
                <div className="flex-1">
                  <div className="text-sm text-neutral-600 mb-1">Type</div>
                  <div className="font-mono bg-neutral-50 p-2 rounded">{selectedKeyDetails?.type || '-'}</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-neutral-600 mb-1">TTL</div>
                  <div className="font-mono bg-neutral-50 p-2 rounded">{selectedKeyDetails?.ttl || '-'}</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-neutral-600 mb-1">Size</div>
                  <div className="font-mono bg-neutral-50 p-2 rounded">{selectedKeyDetails?.size || '-'}</div>
                </div>
              </div>
            </div>
            <div className="border border-neutral-200/20 rounded-lg">
              <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
                <span className="font-medium text-neutral-900">Value</span>
              </div>
              <div className="p-4">
                {selectedKeyDetails ? renderValue(selectedKeyDetails.value) : 'No key selected'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browser;