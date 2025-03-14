import React, { useEffect, useState } from 'react';
import SummaryTable from './SummaryTable';

const MonthlySummary = () => {
  const [summaryData, setSummaryData] = useState([]);

  useEffect(() => {
    // Fetch monthly summary data from an API or define it here
    // Example: fetch('/api/monthly-summary').then(response => response.json()).then(data => setSummaryData(data));
  }, []);

  return (
    <div>
      <h2>Monthly Summary</h2>
      <SummaryTable data={summaryData} />
    </div>
  );
};

export default MonthlySummary;