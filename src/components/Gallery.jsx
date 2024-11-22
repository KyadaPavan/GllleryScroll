import React, { useState, useEffect, useCallback, useRef } from "react";
import { Loader2 } from "lucide-react";
import "./Gallery.css";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loader = useRef(null);

  const ACCESS_KEY = "hPrqDRe2p2FXt0ePbbLoiytUUZ2ITo8iaKmKjqXsGps";

  const seenKeys = new Set();

  const filteredPhotos = photos.filter((photo, slug, created_at) => {
    const key = `${photo.id}-${photo.slug}-${photo.created_at}`;
    if (seenKeys.has(key)) {
      return false; // Skip this photo
    }
    seenKeys.add(key);
    return true;
  });

  const fetchPhotos = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`
      );
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      setError(null);
    } catch (err) {
      setError("Error loading images. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [page]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [handleObserver]);

  useEffect(() => {
    fetchPhotos();
  }, [page, fetchPhotos]);

  return (
    <div className="container">
      <h1 className="heading">Auto Scroll Gallery</h1>
      {error && <div className="error-message">{error}</div>}

      <div className="gallery-grid">
        {photos.map((photo) => (
          <div
            key={`${photo.id}-${photo.slug}-${photo.created_at}-${Date.now()}`}
            className="gallery-item"
          >
            <img
              src={photo.urls.regular}
              alt={photo.alt_description || "Unsplash photo"}
              loading="lazy"
            />
            <div className="photo-info">
              <p>Photo by {photo.user.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div ref={loader} className="loader-container">
        {loading && (
          <div className="loader">
            <Loader2 className="loader-icon" />
            <span>Loading more images...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
