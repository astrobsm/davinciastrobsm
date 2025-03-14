import React, { useEffect, useState } from 'react';

const StockLevel = ({ products, sales }) => {
  const [stockLevels, setStockLevels] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const calculateStockLevels = () => {
      const stock = products.map((product) => {
        const totalIntake = product.intakes.reduce((sum, intake) => sum + intake.quantity, 0);
        const totalSales = sales.filter((sale) => sale.productCode === product.code)
                                .reduce((sum, sale) => sum + sale.quantity, 0);
        const stockLevel = totalIntake - totalSales;
        return {
          ...product,
          stockLevel,
        };
      });
      setStockLevels(stock);
    };

    calculateStockLevels();
  }, [products, sales]);

  useEffect(() => {
    const checkLowStockLevels = () => {
      const lowStockAlerts = stockLevels.filter(product => product.stockLevel <= product.reorderPoint);
      setAlerts(lowStockAlerts);
    };

    checkLowStockLevels();
    const interval = setInterval(checkLowStockLevels, 6 * 60 * 60 * 1000); // Check every 6 hours

    return () => clearInterval(interval);
  }, [stockLevels]);

  const handleAlertSettled = (productCode) => {
    setAlerts(alerts.filter(alert => alert.code !== productCode));
  };

  const getStockStatus = (stockLevel, reorderPoint) => {
    if (stockLevel >= 4 * reorderPoint) {
      return { status: 'Optimal', color: 'green' };
    } else if (stockLevel >= 2 * reorderPoint) {
      return { status: 'Good', color: 'blue' };
    } else if (stockLevel <= reorderPoint) {
      return { status: 'Low', color: 'red' };
    } else {
      return { status: 'Unknown', color: 'gray' };
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Stock Level</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid navy', padding: '10px', backgroundColor: 'navy', color: 'white' }}>Product Code</th>
            <th style={{ border: '1px solid navy', padding: '10px', backgroundColor: 'navy', color: 'white' }}>Product Name</th>
            <th style={{ border: '1px solid navy', padding: '10px', backgroundColor: 'navy', color: 'white' }}>Available Quantity</th>
            <th style={{ border: '1px solid navy', padding: '10px', backgroundColor: 'navy', color: 'white' }}>Stock Status</th>
          </tr>
        </thead>
        <tbody>
          {stockLevels.map((product) => {
            const { status, color } = getStockStatus(product.stockLevel, product.reorderPoint);
            return (
              <tr key={product.code}>
                <td style={{ border: '1px solid navy', padding: '10px' }}>{product.code}</td>
                <td style={{ border: '1px solid navy', padding: '10px' }}>{product.name}</td>
                <td style={{ border: '1px solid navy', padding: '10px' }}>{product.stockLevel}</td>
                <td style={{ border: '1px solid navy', padding: '10px', color: color }}>{status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {alerts.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Low Stock Alerts</h2>
          <ul>
            {alerts.map(alert => (
              <li key={alert.code}>
                {alert.name} (Code: {alert.code}) is below reorder point. Available Quantity: {alert.stockLevel}
                <button onClick={() => handleAlertSettled(alert.code)}>Mark as Settled</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StockLevel;