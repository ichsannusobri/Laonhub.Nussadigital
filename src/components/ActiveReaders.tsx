"use client";

import { useState, useEffect } from "react";

export default function ActiveReaders() {
  // Simple traffic curve based on hour of day (0-23)
  const getBaseReaders = () => {
    if (typeof window === "undefined") return 1243;
    const hour = new Date().getHours();
    const trafficCurve = [
      420, 310, 210, 160, 180, 250, 480, 720, 890, 1020, 1150, 1280,
      1350, 1220, 1180, 1310, 1540, 1810, 2050, 2190, 2310, 2450, 1950, 850
    ];
    const base = trafficCurve[hour] || 1243;
    // Add +/- 10% random variance at initial load
    const variance = Math.floor((Math.random() * 0.2 - 0.1) * base);
    return Math.max(100, base + variance);
  };

  const [readers, setReaders] = useState(1243);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setReaders(getBaseReaders());

    // Randomize readers count every 4-8 seconds
    const interval = setInterval(() => {
      setReaders((prev) => {
        const change = Math.floor(Math.random() * 11) - 5; // -5 to +5
        // Keep it realistic between 50 and 3500
        return Math.max(50, Math.min(3500, prev + change));
      });
    }, Math.random() * 4000 + 4000);

    return () => clearInterval(interval);
  }, []);

  // Prevent Hydration error by rendering a static version on the server
  if (!mounted) {
    return (
      <div className="active-readers-badge">
        <span className="pulse-dot"></span>
        <strong>1,243</strong> Active Readers
      </div>
    );
  }

  return (
    <div className="active-readers-badge">
      <span className="pulse-dot"></span>
      <strong>{readers.toLocaleString('en-US')}</strong> Active Readers
    </div>
  );
}
