import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [area, setArea] = useState('');
  const [tileType, setTileType] = useState('standard');
  const [services, setServices] = useState({
    demolition: false,
    plumbing: false,
    electrical: false,
    tiling: true,
    painting: false
  });
  const [total, setTotal] = useState(null);

  const tilePrices = {
    standard: 50,
    premium: 80,
    luxury: 120
  };

  const servicePrices = {
    demolition: 200,
    plumbing: 300,
    electrical: 250,
    tiling: 0, // уже включено в стоимость плитки
    painting: 150
  };

  const serviceLabels = {
    demolition: 'Демонтаж',
    plumbing: 'Сантехника',
    electrical: 'Электрика',
    tiling: 'Укладка плитки',
    painting: 'Покраска'
  };

  const calculateTotal = () => {
    if (!area || isNaN(area) || area <= 0) {
      alert('Пожалуйста, введите корректную площадь');
      return;
    }

    let sum = area * tilePrices[tileType];
    
    Object.keys(services).forEach(service => {
      if (services[service] && service !== 'tiling') {
        sum += servicePrices[service];
      }
    });

    setTotal(sum);
  };

  const handleServiceChange = (service) => {
    setServices({
      ...services,
      [service]: !services[service]
    });
  };

  return (
    <div className="calculator-container">
      <h2>Калькулятор для рассчёта ремонта ванной комнаты</h2>
      <div className="calculator-form">
        <div className="form-group">
          <label>Введите ваш размер (м²):</label>
          <input 
            type="number" 
            value={area}
            onChange={(e) => setArea(e.target.value)}
            min="1"
            placeholder="Введите площадь"
          />
        </div>

        <div className="form-group">
          <label>Площадь ванной</label>
          <select value={tileType} onChange={(e) => setTileType(e.target.value)}>
            <option value="standard">Стандарт (50/м² руб)</option>
            <option value="premium">Премиум (80/м² руб)</option>
            <option value="luxury">Элитный (120/м² руб)</option>
          </select>
        </div>

        <div className="form-group services-group">
          <label>Дополнительные услуги</label>
          {Object.keys(services).map(service => (
            <div key={service} className="service-option">
              <input
                type="checkbox"
                id={service}
                checked={services[service]}
                onChange={() => handleServiceChange(service)}
                disabled={service === 'tiling'} // укладка плитки обязательна
              />
              <label htmlFor={service}>
                {serviceLabels[service]}: 
                {servicePrices[service]}
                {service === 'tiling' && ' (включено)'}
              </label>
            </div>
          ))}
        </div>

        <button className="calculate-btn" onClick={calculateTotal}>
          Посчитать
        </button>

        {total !== null && (
          <div className="result">
            <h3>Примерная стоимость:</h3>
            <p>{total.toFixed(2)} руб</p>
            <small>Это приблизительная оценка. Итоговая стоимость может отличаться.</small>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;