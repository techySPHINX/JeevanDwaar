import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Plus,
  Minus,
  RotateCcw,
  Target,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MapMitra {
  id: string;
  name: string;
  position: { x: number; y: number; lat: number; lng: number };
  rating: number;
  distance: number;
  shgGroup: string;
  isSelected?: boolean;
}

interface InteractiveMapProps {
  mitras: MapMitra[];
  selectedMitra: string | null;
  onMitraSelect: (mitraId: string) => void;
  currentLocation: { lat: number; lng: number } | null;
  isHindi: boolean;
}

export function InteractiveMap({
  mitras,
  selectedMitra,
  onMitraSelect,
  currentLocation,
  isHindi,
}: InteractiveMapProps) {
  const [zoom, setZoom] = useState(12);
  const [center, setCenter] = useState({ x: 250, y: 200 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredMitra, setHoveredMitra] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Simulate map grid/streets
  const mapGrid = Array.from({ length: 20 }, (_, i) => i * 25);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 2, 18));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 2, 8));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - center.x, y: e.clientY - center.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setCenter({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setCenter({ x: 250, y: 200 });
    setZoom(12);
  };

  const centerOnLocation = () => {
    if (currentLocation) {
      setCenter({ x: 250, y: 200 });
      setZoom(14);
    }
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden border border-gray-200">
      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <Card className="p-1 shadow-lg">
          <div className="flex flex-col">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleZoomIn}
              className="h-8 w-8 p-0"
            >
              <Plus size={16} />
            </Button>
            <div className="h-px bg-border my-1" />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleZoomOut}
              className="h-8 w-8 p-0"
            >
              <Minus size={16} />
            </Button>
          </div>
        </Card>

        <Button
          variant="outline"
          size="sm"
          onClick={centerOnLocation}
          className="h-8 w-8 p-0 bg-white shadow-lg"
        >
          <Target size={14} />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={resetView}
          className="h-8 w-8 p-0 bg-white shadow-lg"
        >
          <RotateCcw size={14} />
        </Button>
      </div>

      {/* Map Layer Toggle */}
      <div className="absolute top-4 left-4 z-20">
        <Button variant="outline" size="sm" className="bg-white shadow-lg">
          <Layers size={14} className="mr-1" />
          {isHindi ? "मैप" : "Map"}
        </Button>
      </div>

      {/* Interactive Map Canvas */}
      <div
        ref={mapRef}
        className={`relative w-full h-full ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          transform: `translate(${center.x - 250}px, ${
            center.y - 200
          }px) scale(${zoom / 12})`,
          transformOrigin: "center",
        }}
      >
        {/* Map Grid/Streets */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ width: "500px", height: "400px" }}
        >
          {/* Horizontal grid lines (streets) */}
          {mapGrid.map((y, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={y}
              x2="500"
              y2={y}
              stroke="#e5e7eb"
              strokeWidth="1"
              opacity="0.6"
            />
          ))}
          {/* Vertical grid lines (streets) */}
          {mapGrid.map((x, i) => (
            <line
              key={`v-${i}`}
              x1={x}
              y1="0"
              x2={x}
              y2="400"
              stroke="#e5e7eb"
              strokeWidth="1"
              opacity="0.6"
            />
          ))}

          {/* Main roads */}
          <line
            x1="0"
            y1="200"
            x2="500"
            y2="200"
            stroke="#9ca3af"
            strokeWidth="3"
          />
          <line
            x1="250"
            y1="0"
            x2="250"
            y2="400"
            stroke="#9ca3af"
            strokeWidth="3"
          />

          {/* Landmarks */}
          <rect
            x="100"
            y="80"
            width="40"
            height="30"
            fill="#10b981"
            opacity="0.7"
            rx="4"
          />
          <text x="120" y="98" textAnchor="middle" fontSize="8" fill="white">
            Metro
          </text>

          <rect
            x="320"
            y="150"
            width="60"
            height="40"
            fill="#3b82f6"
            opacity="0.7"
            rx="4"
          />
          <text x="350" y="172" textAnchor="middle" fontSize="8" fill="white">
            Hospital
          </text>

          <rect
            x="180"
            y="280"
            width="50"
            height="35"
            fill="#f59e0b"
            opacity="0.7"
            rx="4"
          />
          <text x="205" y="300" textAnchor="middle" fontSize="8" fill="white">
            Mall
          </text>
        </svg>

        {/* Current Location Pin */}
        {currentLocation && (
          <motion.div
            className="absolute z-10"
            style={{
              left: "240px",
              top: "190px",
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute inset-0 w-4 h-4 bg-blue-600 rounded-full animate-ping opacity-75"></div>
            </div>
          </motion.div>
        )}

        {/* Mitra Location Pins */}
        {mitras.map((mitra, index) => (
          <motion.div
            key={mitra.id}
            className="absolute z-10 cursor-pointer"
            style={{
              left: `${mitra.position.x}px`,
              top: `${mitra.position.y}px`,
              transform: "translate(-50%, -100%)",
            }}
            initial={{ scale: 0, y: -20 }}
            animate={{
              scale: selectedMitra === mitra.id ? 1.2 : 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => onMitraSelect(mitra.id)}
            onMouseEnter={() => setHoveredMitra(mitra.id)}
            onMouseLeave={() => setHoveredMitra(null)}
          >
            {/* Pin Shadow */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-black opacity-20 rounded-full blur-sm"></div>

            {/* Main Pin */}
            <div
              className={`relative ${
                selectedMitra === mitra.id
                  ? "filter drop-shadow-lg"
                  : "filter drop-shadow-md"
              }`}
            >
              <MapPin
                size={32}
                className={`${
                  selectedMitra === mitra.id
                    ? "text-red-600 fill-red-500"
                    : "text-green-600 fill-green-500"
                } transition-colors duration-200`}
              />

              {/* Rating Badge */}
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-yellow-900">
                {mitra.rating}
              </div>
            </div>

            {/* Hover Info Card */}
            {(hoveredMitra === mitra.id || selectedMitra === mitra.id) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-48 z-20"
              >
                <Card className="p-3 shadow-xl border border-gray-200 bg-white">
                  <div className="text-sm">
                    <div className="font-bold text-gray-900">{mitra.name}</div>
                    <div className="text-xs text-gray-600 mb-1">
                      {mitra.shgGroup}
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {mitra.distance} km
                      </Badge>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-xs font-medium">
                          {mitra.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Speech bubble arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </Card>
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Distance Radius Circles */}
        {selectedMitra && currentLocation && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <circle
              cx="250"
              cy="200"
              r="50"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.5"
            />
            <circle
              cx="250"
              cy="200"
              r="100"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.3"
            />
          </svg>
        )}
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 z-20">
        <Card className="p-3 bg-white/90 backdrop-blur-sm shadow-lg">
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span>{isHindi ? "आपका स्थान" : "Your Location"}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-green-600 fill-green-500" />
              <span>{isHindi ? "SHG मित्र" : "SHG Mitra"}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-red-600 fill-red-500" />
              <span>{isHindi ? "चयनित मित्र" : "Selected Mitra"}</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Zoom Level Indicator */}
      <div className="absolute bottom-4 right-4 z-20">
        <Card className="p-2 bg-white/90 backdrop-blur-sm shadow-lg">
          <div className="text-xs text-gray-600">
            {isHindi ? "ज़ूम:" : "Zoom:"} {zoom}x
          </div>
        </Card>
      </div>
    </div>
  );
}
