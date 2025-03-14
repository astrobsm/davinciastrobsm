import React, { useEffect, useState } from 'react';
import SummaryTable from './SummaryTable';

const QuarterlySummary = () => {
  const [summaryData, setSummaryData] = useState([]);

  useEffect(() => {
    // Fetch quarterly summary data from an API or define it here
    // Example: fetch('/api/quarterly-summary').then(response => response.json()).then(data => setSummaryData(data));
  }, []);

  return (
    <div>
      <h2>Quarterly Summary</h2>
      <SummaryTable data={summaryData} />
    </div>
  );
};

export default QuarterlySummary;