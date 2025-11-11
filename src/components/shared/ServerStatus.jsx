import { useState, useEffect } from 'react';
import { checkServerConnection, BASE_URL } from '../../config/api';

const ServerStatus = () => {
  const [isConnected, setIsConnected] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    checkConnection();
    const interval = setInterval(checkConnection, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const checkConnection = async () => {
    setChecking(true);
    const connected = await checkServerConnection();
    setIsConnected(connected);
    setChecking(false);
  };

  if (isConnected === null || checking) {
    return (
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
        <p className="font-medium">Checking server connection...</p>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Server Connection Failed</p>
            <p className="text-sm">Cannot connect to backend server at {BASE_URL}</p>
            <p className="text-sm mt-1">Please make sure the backend server is running.</p>
          </div>
          <button 
            onClick={checkConnection}
            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
      <p className="font-medium">✓ Server Connected</p>
      <p className="text-sm">Backend server is running at {BASE_URL}</p>
    </div>
  );
};

export default ServerStatus;