"use client";
import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import { Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Style, Icon } from "ol/style";
import { MapPin } from "lucide-react";

export default function MapDesa() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (mapInstance.current) return;

    const coordinates = [106.8456, -6.2088];

    const marker = new Feature({
      geometry: new Point(fromLonLat(coordinates)),
    });

    marker.setStyle(
      new Style({
        image: new Icon({
          src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg",
          scale: 0.05,
        }),
      })
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    mapInstance.current = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat(coordinates),
        zoom: 14,
      }),
    });

    return () => {
      mapInstance.current?.setTarget(undefined);
      mapInstance.current = null;
    };
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-100 p-4 rounded-lg justify-between items-center mb-2">
        <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
          <MapPin /> Peta Desa
        </h2>
      </div>
      <div ref={mapRef} className="w-full h-64 md:h-96 rounded-lg" />
    </div>
  );
}
