import React from 'react';

const Profiler = () => {
  return (
    <section id="profiler" className="p-6 bg-white border border-neutral-200/20 m-6 rounded-lg">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900">KeyDB Profiler</h2>
          <p className="text-neutral-600 mt-1">Monitor and analyze KeyDB performance metrics</p>
        </div>
        <div className="flex space-x-3">
          <select className="px-4 py-2 border border-neutral-200/20 rounded-lg bg-white">
            <option>Last 1 hour</option>
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
          </select>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Start Profiling
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="border border-neutral-200/20 rounded-lg p-4">
          <div className="text-sm text-neutral-600 mb-1">Memory Usage</div>
          <div className="text-2xl font-semibold">2.4 GB</div>
          <div className="text-xs text-green-600 mt-1">↑ 5% from last hour</div>
        </div>
        <div className="border border-neutral-200/20 rounded-lg p-4">
          <div className="text-sm text-neutral-600 mb-1">Operations/sec</div>
          <div className="text-2xl font-semibold">15.2K</div>
          <div className="text-xs text-red-600 mt-1">↓ 2% from last hour</div>
        </div>
        <div className="border border-neutral-200/20 rounded-lg p-4">
          <div className="text-sm text-neutral-600 mb-1">Connected Clients</div>
          <div className="text-2xl font-semibold">234</div>
          <div className="text-xs text-green-600 mt-1">↑ 12% from last hour</div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <span className="font-medium text-neutral-900">Command Distribution</span>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-neutral-600">GET</span>
                  <span className="text-sm text-neutral-900">45%</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-neutral-600">SET</span>
                  <span className="text-sm text-neutral-900">30%</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-neutral-600">HGET</span>
                  <span className="text-sm text-neutral-900">15%</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-neutral-600">Others</span>
                  <span className="text-sm text-neutral-900">10%</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <span className="font-medium text-neutral-900">Memory Distribution</span>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-neutral-600">Strings</span>
                  <span className="text-sm text-neutral-900">1.2 GB</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-neutral-600">Hashes</span>
                  <span className="text-sm text-neutral-900">800 MB</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '33%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-neutral-600">Lists</span>
                  <span className="text-sm text-neutral-900">250 MB</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-neutral-600">Sets</span>
                  <span className="text-sm text-neutral-900">150 MB</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '7%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-neutral-200/20 rounded-lg">
        <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
          <span className="font-medium text-neutral-900">Top Keys by Memory Usage</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="text-left p-3 text-sm font-medium text-neutral-600">Key</th>
                <th className="text-left p-3 text-sm font-medium text-neutral-600">Type</th>
                <th className="text-left p-3 text-sm font-medium text-neutral-600">Size</th>
                <th className="text-left p-3 text-sm font-medium text-neutral-600">Encoding</th>
                <th className="text-left p-3 text-sm font-medium text-neutral-600">TTL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-200/20">
                <td className="p-3 text-sm font-mono">user:sessions</td>
                <td className="p-3 text-sm">Hash</td>
                <td className="p-3 text-sm">256 MB</td>
                <td className="p-3 text-sm">ziplist</td>
                <td className="p-3 text-sm">3600s</td>
              </tr>
              <tr className="border-t border-neutral-200/20">
                <td className="p-3 text-sm font-mono">product:catalog</td>
                <td className="p-3 text-sm">Hash</td>
                <td className="p-3 text-sm">128 MB</td>
                <td className="p-3 text-sm">hashtable</td>
                <td className="p-3 text-sm">-1</td>
              </tr>
              <tr className="border-t border-neutral-200/20">
                <td className="p-3 text-sm font-mono">cache:results</td>
                <td className="p-3 text-sm">String</td>
                <td className="p-3 text-sm">64 MB</td>
                <td className="p-3 text-sm">raw</td>
                <td className="p-3 text-sm">300s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Profiler;