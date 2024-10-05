import { useRef } from 'react';

export const Component = () => {
  const ref = useRef<HTMLDivElement>(null);

  ref.current;

  return <div ref={ref} />;
};
