import React, { useState } from 'react';
import './Contacts.css';
import map from '../img/contacts/map.jpg'; 

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      
      console.log('Данные формы:', formData);
      
      // Имитация отправки
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Ошибка отправки:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contacts-container">
      
      <div className="contact-info">
        <h2>Контактная информация</h2>
        <p><strong>Телефон:</strong> +7 (930) 994-67-72</p>
        <p><strong>Email:</strong><a href="mailto:dimarik03.00rb@gmail.com">dimarik03.00rb@gmail.com</a> </p>
        
        <p ><strong>Адрес:</strong> г. Иркутск , ул. Белобородова 8</p>
      </div>

      <div className="contact-form">
        <h2>Форма обратной связи</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Телефон:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Сообщение:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </button>

          {submitStatus === 'success' && (
            <p className="success-message">Спасибо! Ваше сообщение отправлено.</p>
          )}
          {submitStatus === 'error' && (
            <p className="error-message">Произошла ошибка. Пожалуйста, попробуйте позже.</p>
          )}
        </form>
      </div>

      <div className="map-container">
        <h2>Мы на карте</h2>
        <div className="map-place">
          
          <img className='img-map'
                    src={map}
                    alt="Карта Сайта"
                    
                  />
        </div>
      </div>
    </div>
  );
};

export default Contacts;