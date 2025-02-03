import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './viewers.components/Homepage';

// Component for server-side rendering check
const ClientOnlyHomePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect will run only once after the component mounts
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null or a loading spinner if needed
  }

  return <HomePage />;
};

// Check if running in a browser environment before accessing document
if (typeof document !== 'undefined') {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.render(<ClientOnlyHomePage />, rootElement);
  }
}

// Export for Next.js or other SSR framework usage
export default ClientOnlyHomePage;
