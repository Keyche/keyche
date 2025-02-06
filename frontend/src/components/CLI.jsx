import React from 'react';

const CLI = () => {
  return (
    <section id="cli" className="p-6 bg-white border border-neutral-200/20 m-6 rounded-lg">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900">KeyDB CLI</h2>
          <p className="text-neutral-600 mt-1">Interactive KeyDB Command Line Interface</p>
        </div>
        <div className="flex space-x-3">
          <select className="px-4 py-2 border border-neutral-200/20 rounded-lg bg-white">
            <option>Database 0</option>
            <option>Database 1</option>
            <option>Database 2</option>
          </select>
          <button className="px-4 py-2 border border-neutral-200/20 rounded-lg hover:bg-neutral-50 transition-colors">
            Clear
          </button>
        </div>
      </div>
      <div className="border border-neutral-200/20 rounded-lg bg-neutral-900 text-white">
        <div className="border-b border-neutral-700 p-3 flex justify-between items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex space-x-2">
            <button className="text-neutral-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <button className="text-neutral-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4 font-mono text-sm h-96 overflow-y-auto">
          <div className="mb-2">
            <span className="text-red-400">127.0.0.1:6379</span> PING
            <div className="text-green-400 ml-4">PONG</div>
          </div>
          <div className="mb-2">
            <span className="text-red-400">127.0.0.1:6379</span> SET mykey "Hello Redis"
            <div className="text-green-400 ml-4">OK</div>
          </div>
          <div className="mb-2">
            <span className="text-red-400">127.0.0.1:6379</span> GET mykey
            <div className="text-green-400 ml-4">"Hello Redis"</div>
          </div>
          <div className="mb-2">
            <span className="text-red-400">127.0.0.1:6379</span> HSET user:1 name "John Doe" age 30
            <div className="text-green-400 ml-4">(integer) 2</div>
          </div>
          <div className="mb-2">
            <span className="text-red-400">127.0.0.1:6379</span> HGETALL user:1
            <div className="ml-4">
              <div className="text-yellow-400">1) "name"</div>
              <div className="text-green-400">2) "John Doe"</div>
              <div className="text-yellow-400">3) "age"</div>
              <div className="text-green-400">4) "30"</div>
            </div>
          </div>
          <div className="mb-2">
            <span className="text-red-400">127.0.0.1:6379</span> INCR counter
            <div className="text-green-400 ml-4">(integer) 1</div>
          </div>
          <div className="flex items-center">
            <span className="text-red-400">127.0.0.1:6379</span>
            <span className="ml-1 animate-blink">▊</span>
          </div>
        </div>
        <div className="border-t border-neutral-700 p-3">
          <div className="flex items-center">
            <span className="text-red-400 mr-2"></span>
            <input
              type="text"
              className="flex-1 bg-transparent border-none outline-none text-white"
              placeholder="Enter KeyDB command..."
            />
          </div>
        </div>
      </div>
      <div className="mt-6 border border-neutral-200/20 rounded-lg">
        <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
          <span className="font-medium text-neutral-900">Command History</span>
        </div>
        <div className="p-4">
          <div className="space-y-2 font-mono text-sm">
            <div className="flex justify-between items-center p-2 hover:bg-neutral-50 rounded cursor-pointer">
              <span className="text-neutral-600">HGETALL user:1</span>
              <span className="text-neutral-400">1 min ago</span>
            </div>
            <div className="flex justify-between items-center p-2 hover:bg-neutral-50 rounded cursor-pointer">
              <span className="text-neutral-600">SET mykey "Hello Redis"</span>
              <span className="text-neutral-400">2 mins ago</span>
            </div>
            <div className="flex justify-between items-center p-2 hover:bg-neutral-50 rounded cursor-pointer">
              <span className="text-neutral-600">PING</span>
              <span className="text-neutral-400">5 mins ago</span>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes blink {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default CLI;