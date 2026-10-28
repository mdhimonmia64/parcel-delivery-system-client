import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Component to zoom when district is selected
const ZoomToDistrict = ({ serviceCenters }) => {
  const map = useMap();
  if (serviceCenters) {
    map.setView(serviceCenters, 12, { animate: true });
  }
  return null;
};

const BangladeshMap = ({ serviceCenters }) => {
  const bangladeshCenter = [23.685, 90.3563];
  // state for search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const markerRefs = useRef({});

  // Handle search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Find matching district (case-insensitive + partial match)
    const district = serviceCenters.find((item) =>
      item.district.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (district) {
      setSelectedDistrict([district.latitude, district.longitude]);

      // Open popup automatically
      setTimeout(() => {
        if (markerRefs.current[district.district]) {
          markerRefs.current[district.district].openPopup();
        }
      }, 300);
    } else {
      alert("District not found! Please try again.");
    }
  };
  return (
    <div className="min-h-screen bg-base-100 py-10 px-4">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-primary">
          We are available in 64 districts
        </h1>
        <p className="text-gray-600 mt-2">
          Search and explore our delivery coverage areas.
        </p>
      </div>

      {/* Search Box */}
      <div className="flex justify-center mb-6">
        <form onSubmit={handleSearch} className="flex gap-2 w-full max-w-lg">
          <input
            type="text"
            placeholder="Search district..."
            className="input input-bordered w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="flex justify-center">
        <div className="w-full max-w-6xl rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <MapContainer
            center={bangladeshCenter}
            zoom={8}
            scrollWheelZoom={true}
            className="h-[600px] w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Zoom when search matches */}
            <ZoomToDistrict position={selectedDistrict} />

            {/* Show all 64 district markers */}
            {serviceCenters?.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
                ref={(ref) => (markerRefs.current[center.district] = ref)}
              >
                <Popup>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg">{center.district}</h3>
                    <p className="text-sm text-gray-600">
                      Region: {center.region}
                    </p>
                    <p className="text-sm text-gray-600">City: {center.city}</p>
                    <p className="text-sm text-green-600 font-semibold">
                      Status: {center.status}
                    </p>
                    <p className="text-sm">
                      Covered Areas: {center.covered_area.join(", ")}
                    </p>
                    <a
                      href={center.flowchart}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 underline text-sm"
                    >
                      View Flowchart
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default BangladeshMap;