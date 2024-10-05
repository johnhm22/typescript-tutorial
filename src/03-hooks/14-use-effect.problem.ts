import { useEffect } from 'react';

export const useTimeout = (timerMs: number) => {
  useEffect(() => {
    const timerId: ReturnType<typeof setTimeout> = setTimeout(() => {
      console.log('Done!');
    }, timerMs);
    clearTimeout(timerId);
  }, [timerMs]);
};
