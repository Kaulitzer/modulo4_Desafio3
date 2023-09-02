import React, { useState, useEffect } from 'react';

const Alert = ({ mensaje, tipo }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return visible ? (
    <div className={`alert alert-${tipo}`}>{mensaje}</div>
  ) : null;
};

export default Alert;
