import { useEffect, useRef, useState } from 'react';

export const useProgressBar = (
  subtotalPrice: number,
  freeDeliveryFrom: number,
  isFreeDelivery: boolean
) => {
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const percent = isFreeDelivery
      ? 1
      : 1 - (freeDeliveryFrom - subtotalPrice) / freeDeliveryFrom;

    if (!ref.current) return;
    setProgressBarWidth(percent * ref.current.offsetWidth);
  }, [subtotalPrice, window.innerWidth]);

  return { ref, progressBarWidth };
};
