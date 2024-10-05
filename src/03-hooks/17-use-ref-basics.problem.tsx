import { useEffect, useRef } from 'react';

// function useRef<T>(initialValue: T | null): RefObject<T>;

// useRef<undefined>(): React.MutableRefObject<undefined | undefined>

export const Component = () => {
  const id = useRef<string>();

  // React.MutableRefObject<undefined>.current: undefined

  useEffect(() => {
    id.current = 'Random value!';
  }, []);

  return <div></div>;
};
