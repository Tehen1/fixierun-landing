import React, { useEffect, useRef } from 'react';

interface MapProps {
  isTracking: boolean;
}

export const Map: React.FC<MapProps> = ({ isTracking }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<Array<[number, number]>>([]);

  useEffect(() => {
    // Initialize map (you can use libraries like Mapbox or Google Maps here)
    const initMap = async () => {
      // Map initialization code
    };

    if (mapRef.current) {
      initMap();
    }
  }, []);

  useEffect(() => {
    if (isTracking) {
      // Start tracking location
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          pathRef.current.push([latitude, longitude]);
          // Update map with new position
        },
        (error) => {
          console.error('Error getting location:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    }
  }, [isTracking]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full bg-gray-100 rounded-lg"
    >
      <div className="flex items-center justify-center h-full text-gray-500">
        Map placeholder
      </div>
    </div>
  );
};
