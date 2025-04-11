import React, { useEffect } from 'react';

// Sample data for the chart - same data you'd pass to AreaChart
const data = [
  { month: 'Jan', sales: 100, revenue: 200 },
  { month: 'Feb', sales: 200, revenue: 400 },
  { month: 'Mar', sales: 150, revenue: 300 },
  { month: 'Apr', sales: 300, revenue: 600 },
  { month: 'May', sales: 250, revenue: 500 },
];

export const ChartTest: React.FC = () => {
  // Log the data to console - simulating what your console.log in AreaChart would do
  useEffect(() => {
    console.log('Data that would be passed to AreaChart:', data);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Chart Data Test</h2>
      <p className="mb-4">Check the browser console to see the data that would be passed to AreaChart.</p>
      
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Raw Data:</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
};
