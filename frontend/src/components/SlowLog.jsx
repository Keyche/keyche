import React from 'react';

const SlowLog = () => {
  return (
    <section id="slowlog" className="p-6 bg-white border border-neutral-200/20 m-6 rounded-lg">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900">Slow Log</h2>
          <p className="text-neutral-600 mt-1">Monitor and analyze slow KeyDB operations</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-neutral-200/20 rounded-lg hover:bg-neutral-50 transition-colors">
            Clear Log
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Refresh
          </button>
        </div>
      </div>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-neutral-200/20 rounded-lg p-4">
          <div className="text-sm text-neutral-600 mb-1">Slowlog Length</div>
          <div className="text-2xl font-semibold">128</div>
        </div>
        <div className="border border-neutral-200/20 rounded-lg p-4">
          <div className="text-sm text-neutral-600 mb-1">Slowlog Threshold</div>
          <div className="text-2xl font-semibold">10ms</div>
        </div>
        <div className="border border-neutral-200/20 rounded-lg p-4">
          <div className="text-sm text-neutral-600 mb-1">Latest Entry</div>
          <div className="text-2xl font-semibold">2 mins ago</div>
        </div>
      </div>
      <div className="border border-neutral-200/20 rounded-lg">
        <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
          <div className="flex justify-between items-center">
            <span className="font-medium text-neutral-900">Slow Operations</span>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Filter commands..."
                  className="w-64 px-4 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <svg className="w-5 h-5 absolute right-3 top-2.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="text-left p-3 text-sm font-medium text-neutral-600">ID</th>
                <th className="text-left p-3 text-sm font-medium text-neutral-600">Timestamp</th>
                <th className="text-left p-3 text-sm font-medium text-neutral-600">Duration</th>
                <th className="text-left p-3 text-sm font-medium text-neutral-600">Command</th>
                <th className="text-left p-3 text-sm font-medium text-neutral-600">Client</th>
                <th className="text-left p-3 text-sm font-medium text-neutral-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-200/20">
                <td className="p-3 text-sm">1234</td>
                <td className="p-3 text-sm">2023-12-01 14:23:45</td>
                <td className="p-3 text-sm font-medium text-amber-600">25ms</td>
                <td className="p-3 text-sm font-mono">HGETALL user:profile:*</td>
                <td className="p-3 text-sm">127.0.0.1:52134</td>
                <td className="p-3">
                  <button className="text-neutral-600 hover:text-neutral-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </button>
                </td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
        <div className="border-t border-neutral-200/20 p-3 bg-neutral-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-neutral-600">
              Showing 1-3 of 128 entries
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-neutral-200/20 rounded hover:bg-white transition-colors disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-3 py-1 border border-neutral-200/20 rounded hover:bg-white transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlowLog;