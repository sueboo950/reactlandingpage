import React, { useEffect, useState } from 'react';
import HomePage from './components/HomePage';

const Index = () => {
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

export default Index;
