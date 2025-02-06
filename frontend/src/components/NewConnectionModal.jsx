import React, { useState } from 'react';

const NewConnectionModal = ({ isOpen, onClose, onAddConnection }) => {
  const [alias, setAlias] = useState('');
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [cacheType, setCacheType] = useState('redis');

  const handleTestConnection = async () => {
    const connectionData = {
      host: host,
      port: parseInt(port, 10),
      password: password || '', // Optional field
      cacheType: cacheType,
      alias: alias,
    };

    try {
      const response = await fetch('http://localhost:8080/api/connection/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(connectionData),
      });

      if (response.ok) {
        setSuccessMessage('Connection test successful!');
        setErrorMessage('');
      } else {
        const errorData = await response.json();
        setErrorMessage(`Error: ${errorData.message || 'Failed to test connection'}`);
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Error: Failed to connect to the server.');
      setSuccessMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const connectionData = {
      host: host,
      port: parseInt(port, 10),
      password: password || '', // Optional field
      cacheType: cacheType,
      alias: alias,
    };

    try {
      const response = await fetch('http://localhost:8080/api/connection/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(connectionData),
      });

      if (response.ok) {
        onAddConnection(connectionData); // Add connection to the grid
        setSuccessMessage('Connection added successfully!');
        setErrorMessage('');
        setTimeout(() => {
          onClose(); // Close the modal after success
        }, 1500);
      } else {
        const errorData = await response.json();
        setErrorMessage(`Error: ${errorData.message || 'Failed to add connection'}`);
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Error: Failed to connect to the server.');
      setSuccessMessage('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">New Connection</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-700">Cache Type</label>
            <div className="mt-2 flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="redis"
                  checked={cacheType === 'redis'}
                  onChange={() => setCacheType('redis')}
                  className="form-radio h-4 w-4 text-red-600"
                />
                <img src="/assets/redis.svg" alt="Redis" className="ml-2 h-6" />
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="keydb"
                  checked={cacheType === 'keydb'}
                  onChange={() => setCacheType('keydb')}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <img src="/assets/keydb.svg" alt="KeyDB" className="ml-2 h-6 bg-black" />
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="dragonfly"
                  checked={cacheType === 'dragonfly'}
                  onChange={() => setCacheType('dragonfly')}
                  className="form-radio h-4 w-4 text-green-600"
                />
                <img src="/assets/dragonfly.svg" alt="Dragonfly" className="ml-2 h-6" />
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-700">Database Alias</label>
            <input
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-700">Host</label>
            <input
              type="text"
              value={host}
              onChange={(e) => setHost(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-700">Port</label>
            <input
              type="number"
              value={port}
              onChange={(e) => setPort(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-700">Username (Optional)</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-700">Password (Optional)</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm"
            />
          </div>
          {errorMessage && (
            <div className="mb-4 text-sm text-red-600">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="mb-4 text-sm text-green-600">
              {successMessage}
            </div>
          )}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleTestConnection}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Test Connection
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Add Connection
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewConnectionModal;