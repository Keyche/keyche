import React from 'react';

const Analytics = () => {
  return (
    <section id="analytics" className="p-6 bg-white border border-neutral-200/20 m-6 rounded-lg">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900">KeyDB Analytics</h2>
          <p className="text-neutral-600 mt-1">Real-time performance monitoring and analysis</p>
        </div>
        <div className="flex space-x-3">
          <select className="px-4 py-2 border border-neutral-200/20 rounded-lg bg-white">
            <option>Last Hour</option>
            <option>Last 24 Hours</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="border border-neutral-200/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-neutral-600">Total Operations</div>
            <span className="text-green-600 text-xs">↑ 12%</span>
          </div>
          <div className="text-2xl font-semibold">1.2M</div>
          <div className="mt-2 text-xs text-neutral-500">+145K since last period</div>
        </div>
        <div className="border border-neutral-200/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-neutral-600">Memory Usage</div>
            <span className="text-red-600 text-xs">↑ 8%</span>
          </div>
          <div className="text-2xl font-semibold">4.8 GB</div>
          <div className="mt-2 text-xs text-neutral-500">+0.4 GB since last period</div>
        </div>
        <div className="border border-neutral-200/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-neutral-600">Connected Clients</div>
            <span className="text-green-600 text-xs">↑ 5%</span>
          </div>
          <div className="text-2xl font-semibold">482</div>
          <div className="mt-2 text-xs text-neutral-500">+24 since last period</div>
        </div>
        <div className="border border-neutral-200/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-neutral-600">Average Response Time</div>
            <span className="text-green-600 text-xs">↓ 15%</span>
          </div>
          <div className="text-2xl font-semibold">0.8ms</div>
          <div className="mt-2 text-xs text-neutral-500">-0.2ms since last period</div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <span className="font-medium text-neutral-900">Operations Per Second</span>
          </div>
          <div className="p-4 h-64 bg-neutral-50">
            <div className="w-full h-full bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-500">
              Operations/sec Chart
            </div>
          </div>
        </div>
        <div className="border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <span className="font-medium text-neutral-900">Memory Usage Trend</span>
          </div>
          <div className="p-4 h-64 bg-neutral-50">
            <div className="w-full h-full bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-500">
              Memory Usage Chart
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <span className="font-medium text-neutral-900">Top Commands</span>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="text-sm text-neutral-600">
                  <th className="text-left pb-3">Command</th>
                  <th className="text-left pb-3">Calls</th>
                  <th className="text-left pb-3">Usage</th>
                  <th className="text-left pb-3">Latency</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-neutral-200/20">
                  <td className="py-2">GET</td>
                  <td>458K</td>
                  <td>42.3%</td>
                  <td>0.5ms</td>
                </tr>
                <tr className="border-t border-neutral-200/20">
                  <td className="py-2">SET</td>
                  <td>312K</td>
                  <td>28.9%</td>
                  <td>0.8ms</td>
                </tr>
                <tr className="border-t border-neutral-200/20">
                  <td className="py-2">HGET</td>
                  <td>156K</td>
                  <td>14.4%</td>
                  <td>0.6ms</td>
                </tr>
                <tr className="border-t border-neutral-200/20">
                  <td className="py-2">DEL</td>
                  <td>89K</td>
                  <td>8.2%</td>
                  <td>0.4ms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <span className="font-medium text-neutral-900">Key Distribution</span>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-neutral-600">Strings</span>
                  <span className="text-sm text-neutral-900">45%</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-neutral-600">Hashes</span>
                  <span className="text-sm text-neutral-900">30%</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-neutral-600">Lists</span>
                  <span className="text-sm text-neutral-900">15%</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-neutral-600">Sets</span>
                  <span className="text-sm text-neutral-900">10%</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;