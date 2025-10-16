import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import foto1 from '../assets/images/foto1.jpg';
import foto2 from '../assets/images/foto2.jpg';
import foto3 from '../assets/images/foto3.jpg';

const images = [foto1, foto2, foto3];

function Carousel() {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Seguridad: evitar índices fuera de rango
  useEffect(() => {
    if (index < 0) setIndex(images.length - 1);
    if (index >= images.length) setIndex(0);
  }, [index]);

  // Eventos de mouse
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    currentX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    const diff = currentX.current - startX.current;
    if (diff > 60) setIndex((prev) => (prev - 1 + images.length) % images.length);
    else if (diff < -60) setIndex((prev) => (prev + 1) % images.length);
    setIsDragging(false);
  };

  // Eventos táctiles
  const handleTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (currentX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff > 60) setIndex((prev) => (prev - 1 + images.length) % images.length);
    else if (diff < -60) setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="carousel"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ✅ Mostrar imagen solo si existe */}
      {images[index] && (
        <img src={images[index]} alt="banner iglesia" className="carousel-image" />
      )}

      {/* 🔹 Indicadores */}
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
