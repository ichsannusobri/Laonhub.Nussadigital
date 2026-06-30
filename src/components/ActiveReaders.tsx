"use client";

import { useState, useEffect } from "react";

export default function ActiveReaders() {
  const [readers, setReaders] = useState(1243);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Randomize readers count every 3-7 seconds to simulate real traffic
    const interval = setInterval(() => {
      setReaders((prev) => {
        const change = Math.floor(Math.random() * 15) - 5; // -5 to +10
        return Math.max(800, Math.min(2500, prev + change));
      });
    }, Math.random() * 4000 + 3000);

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
