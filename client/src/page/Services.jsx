import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Services.css"

const Services = () => {
    const [serviceData, setServiceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:1000/api/v1/get-all-services",
                    { withCredentials: true }
                );
                setServiceData(res.data.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching services:", err);
                setError("Не удалось загрузить услуги. Пожалуйста, попробуйте позже.");
                setLoading(false);
            }
        };
        
        fetchServices();
    }, []);

    if (loading) {
        return <div className="loading">Загрузка услуг...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="services-container">
            <h1 className="services-title">Наши услуги</h1>
            
            {serviceData.length > 0 ? (
                <div className="services-grid">
                    {serviceData.map(service => (
                        <div key={service._id} className="service-card">
                            {service.image && (
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="service-image"
                                />
                            )}
                            <div className="service-content">
                                <h2 className="service-title">{service.title}</h2>
                                <p className="service-description">{service.description}</p>
                                <p className="service-price">Цена: {service.price} </p>
                                <p className="service-example">Цена: {service.example}</p>
                                
                                
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Нет доступных услуг в данный момент.</p>
            )}
        </div>
    );
};

export default Services;