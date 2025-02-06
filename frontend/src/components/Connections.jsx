import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewConnectionModal from './NewConnectionModal';

const Connections = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [connections, setConnections] = useState([]); // Initialize with an empty array
  const navigate = useNavigate();

  // Fetch connections from the API
  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/connection/list');
        if (!response.ok) {
          throw new Error('Failed to fetch connections');
        }
        const data = await response.json();
        setConnections(data); // Update the connections state with the fetched data
      } catch (error) {
        console.error('Error fetching connections:', error);
      }
    };

    fetchConnections();
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleAddConnection = (newConnection) => {
    setConnections([...connections, newConnection]);
    setIsModalOpen(false);
  };

  const handleConnect = (connection) => {
    navigate('/browser', { state: { connection } });
  };

  const getCacheImage = (cacheType) => {
    switch (cacheType) {
      case 'redis':
        return '/assets/redis.svg';
      case 'keydb':
        return '/assets/keydb.svg';
      case 'dragonfly':
        return '/assets/dragonfly.svg';
      default:
        return '/assets/redis.svg';
    }
  };

  return (
    <section id="connections" className="p-6 bg-white border border-neutral-200/20 m-6 rounded-lg">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-neutral-900">KeyDB Connections</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          New Connection
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {connections.map((connection, index) => (
          <div key={index} className="p-4 border border-neutral-200/20 rounded-lg hover:border-neutral-300/40 transition-colors bg-neutral-200">
            <div className="flex justify-between text-sm text-neutral-600 mb-4">
              <img src={getCacheImage(connection.cacheType)} alt={connection.cacheType} className="h-6" />
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
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-neutral-900">{connection.alias}</h3>
                <p className="text-sm text-neutral-600">{connection.host}:{connection.port}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleConnect(connection)}
                className="flex-1 px-3 py-1.5 bg-neutral-100 text-neutral-900 rounded hover:bg-neutral-50 transition-colors"
              >
                Connect
              </button>
              <button className="px-3 py-1.5 bg-neutral-100 border border-neutral-200/20 rounded hover:bg-neutral-50 transition-colors">
                Test
              </button>
            </div>
          </div>
        ))}
      </div>
      <NewConnectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddConnection={handleAddConnection}
      />
    </section>
  );
};

export default Connections;