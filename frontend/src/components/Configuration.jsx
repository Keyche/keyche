import React from 'react';

const Configuration = () => {
  return (
    <section id="configuration" className="p-6 bg-white border border-neutral-200/20 m-6 rounded-lg">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900">KeyDB Configuration</h2>
          <p className="text-neutral-600 mt-1">Manage KeyDB server settings and parameters</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-neutral-200/20 rounded-lg hover:bg-neutral-50 transition-colors">
            Reset to Default
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Network Settings */}
        <div className="border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <span className="font-medium text-neutral-900">Network</span>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm text-neutral-600 mb-1">Bind Address</label>
              <input type="text" value="127.0.0.1" className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm text-neutral-600 mb-1">Port</label>
              <input type="number" value="6379" className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm text-neutral-600 mb-1">Max Clients</label>
              <input type="number" value="10000" className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked className="text-red-600 rounded focus:ring-red-500" />
                <span className="text-sm text-neutral-600">Protected Mode</span>
              </label>
            </div>
          </div>
        </div>
        {/* Memory Settings */}
        <div className="border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <span className="font-medium text-neutral-900">Memory</span>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm text-neutral-600 mb-1">Max Memory</label>
              <input type="text" value="2gb" className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm text-neutral-600 mb-1">Max Memory Policy</label>
              <select className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>noeviction</option>
                <option>allkeys-lru</option>
                <option>volatile-lru</option>
                <option>allkeys-random</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-neutral-600 mb-1">Memory Sample Size</label>
              <input type="number" value="5" className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
          </div>
        </div>
        {/* Persistence Settings */}
        <div className="border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <span className="font-medium text-neutral-900">Persistence</span>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm text-neutral-600 mb-1">RDB Save Settings</label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="number" value="900" className="w-20 px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                  <span className="text-sm text-neutral-600">seconds if</span>
                  <input type="number" value="1" className="w-20 px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                  <span className="text-sm text-neutral-600">changes</span>
                </div>
              </div>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked className="text-red-600 rounded focus:ring-red-500" />
                <span className="text-sm text-neutral-600">AOF Enabled</span>
              </label>
            </div>
            <div>
              <label className="block text-sm text-neutral-600 mb-1">AOF Policy</label>
              <select className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>always</option>
                <option>everysec</option>
                <option>no</option>
              </select>
            </div>
          </div>
        </div>
        {/* Security Settings */}
        <div className="border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <span className="font-medium text-neutral-900">Security</span>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm text-neutral-600 mb-1">Password</label>
              <input type="password" placeholder="Enter KeyDB password" className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="text-red-600 rounded focus:ring-red-500" />
                <span className="text-sm text-neutral-600">Require Authentication</span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked className="text-red-600 rounded focus:ring-red-500" />
                <span className="text-sm text-neutral-600">Enable TLS/SSL</span>
              </label>
            </div>
          </div>
        </div>
        {/* Advanced Settings */}
        <div className="border border-neutral-200/20 rounded-lg">
          <div className="border-b border-neutral-200/20 p-3 bg-neutral-50">
            <span className="font-medium text-neutral-900">Advanced</span>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm text-neutral-600 mb-1">Timeout</label>
              <input type="number" value="0" className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm text-neutral-600 mb-1">TCP Keepalive</label>
              <input type="number" value="300" className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm text-neutral-600 mb-1">Databases</label>
              <input type="number" value="16" className="w-full px-3 py-2 border border-neutral-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Configuration;