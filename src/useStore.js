import { useEffect, useRef } from "react";

export function useStore(storeFactory, { onCommit } = {}) {
  const storeRef = useRef(null);

  if (storeRef.current === null) {
    storeRef.current = storeFactory();
  }

  useEffect(() => {
    if (onCommit) {
      const handler = () => onCommit(storeRef.current);
      storeRef.current.addListener('commit', handler, { single: true });
      return () => storeRef.current.removeListener('commit', handler);
    }
  }, [onCommit]);

  return storeRef.current;
}