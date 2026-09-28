/**
 * ============================================================
 * CustomCursor - Animated cursor follower (desktop only)
 * ============================================================
 */
import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with fine pointer (desktop)
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasPointer) return;

    setVisible(true);

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleOver = (e) => {
      if (
        e.target.closest('a, button, [role="button"], input, textarea, select, .cursor-hover')
      ) {
        setHovering(true);
      }
    };

    const handleOut = () => setHovering(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleOver);
    window.addEventListener('mouseout', handleOut);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleOver);
      window.removeEventListener('mouseout', handleOut);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`custom-cursor ${hovering ? 'hovering' : ''}`}
      style={{ left: position.x, top: position.y }}
    />
  );
}
