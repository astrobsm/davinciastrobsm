import React, { useEffect, useState } from 'react';
import SummaryTable from './SummaryTable';

const AnnualSummary = () => {
  const [summaryData, setSummaryData] = useState([]);

  useEffect(() => {
    // Fetch annual summary data from an API or define it here
    // Example: fetch('/api/annual-summary').then(response => response.json()).then(data => setSummaryData(data));
  }, []);

  return (
    <div>
      <h2>Annual Summary</h2>
      <SummaryTable data={summaryData} />
    </div>
  );
};

export default AnnualSummary;