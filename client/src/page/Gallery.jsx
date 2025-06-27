import React, { useState } from 'react';
import gallery_1 from '../img/gallery/gallery_1.jpg'; 
import gallery_2 from '../img/gallery/gallery_2.jpg'; 
import gallery_3 from '../img/gallery/gallery_3.jpg'; 
import gallery_4 from '../img/gallery/gallery_4.jpg'; 
import "./Gallery.css";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: "Стандарт",
      image: gallery_1,
      category: "standard"
    },
    
    {
      id: 3,
      title: "Премиум",
      image: gallery_3,
      category: "premium"
    },
    {
      id: 4,
      title: "Элитное",
      image: gallery_4,
      category: "elite"
    }
  ];

  const filters = [
    { id: 'all', name: 'Все' },
    { id: 'standard', name: 'Стандарт' },
    { id: 'premium', name: 'Премиум' },
    { id: 'elite', name: 'Элитное' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className='gallery-container'>
      <h1>Фотогалерея выполненных проектов</h1>

      <div className="filter-container">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className='gallery-grid'>
        {filteredItems.map(item => (
          <div key={item.id} className="gallery-single">
            <h2>{item.title}</h2>
            <img 
              className='img-portfolio'
              src={item.image}
              alt={`Работа_${item.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;