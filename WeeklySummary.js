import React, { useEffect, useState } from 'react';
import SummaryTable from './SummaryTable';

const WeeklySummary = () => {
  const [summaryData, setSummaryData] = useState([]);

  useEffect(() => {
    // Fetch weekly summary data from an API or define it here
    // Example: fetch('/api/weekly-summary').then(response => response.json()).then(data => setSummaryData(data));
  }, []);

  return (
    <div>
      <h2>Weekly Summary</h2>
      <SummaryTable data={summaryData} />
    </div>
  );
};

export default WeeklySummary;