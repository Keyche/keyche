import React from 'react';

const Workbench = () => {
  return (
    <section id="workbench" className="p-6 bg-white border border-neutral-200/20 m-6 rounded-lg">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-neutral-900">KeyDB Workbench</h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-neutral-200/20 rounded-lg hover:bg-neutral-50 transition-colors">
            Clear
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Execute
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Query Editor and Results Panel */}
        <div className="border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <button className="p-1.5 text-neutral-600 hover:text-neutral-900">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <button className="p-1.5 text-neutral-600 hover:text-neutral-900">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                </button>
              </div>
              <select className="px-3 py-1 border border-neutral-200/20 rounded bg-white">
                <option>Database 0</option>
                <option>Database 1</option>
                <option>Database 2</option>
              </select>
            </div>
          </div>
          <div className="p-4">
            <textarea
              className="w-full h-64 font-mono text-sm p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="Enter KeyDB commands here..."
            ></textarea>
          </div>
        </div>
        {/* Results Panel */}
        <div className="border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <div className="flex items-center justify-between">
              <span className="font-medium text-neutral-900">Results</span>
              <div className="flex space-x-2">
                <button className="p-1.5 text-neutral-600 hover:text-neutral-900">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
                <button className="p-1.5 text-neutral-600 hover:text-neutral-900">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="font-mono text-sm">
              <div className="mb-4">
                <div className="text-neutral-600">1) GET user:1234</div>
                <div className="text-green-600 ml-4">"John Doe"</div>
              </div>
              <div className="mb-4">
                <div className="text-neutral-600">2) HGETALL profile:details</div>
                <div className="ml-4">
                  <div className="text-red-600">1) "email"</div>
                  <div className="text-green-600">2) "john@example.com"</div>
                  <div className="text-red-600">3) "age"</div>
                  <div className="text-green-600">4) "30"</div>
                </div>
              </div>
              <div>
                <div className="text-neutral-600">3) SMEMBERS active:sessions</div>
                <div className="ml-4">
                  <div className="text-green-600">1) "session:abc123"</div>
                  <div className="text-green-600">2) "session:def456"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* History Panel */}
      <div className="mt-6 border border-neutral-200/20 rounded-lg">
        <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
          <span className="font-medium text-neutral-900">Command History</span>
        </div>
        <div className="p-4">
          <div className="space-y-2 font-mono text-sm">
            <div className="flex justify-between items-center p-2 hover:bg-neutral-50 rounded">
              <span className="text-neutral-600">HGETALL profile:details</span>
              <span className="text-neutral-400">2 seconds ago</span>
            </div>
            <div className="flex justify-between items-center p-2 hover:bg-neutral-50 rounded">
              <span className="text-neutral-600">GET user:1234</span>
              <span className="text-neutral-400">5 minutes ago</span>
            </div>
            <div className="flex justify-between items-center p-2 hover:bg-neutral-50 rounded">
              <span className="text-neutral-600">KEYS user:*</span>
              <span className="text-neutral-400">10 minutes ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workbench;