import { useEffect } from "react";

export const useClose = (ref, close) => {
  useEffect(() => {
    
    const listener = (event) => {
      if (!event.path.includes(ref.current)) {
        close()
      }
      return null
    }

    document.body.addEventListener('click', listener)

    return () => {
      document.body.addEventListener('click', listener)
    }
  }, [ref, close])
}