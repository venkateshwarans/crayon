import { RefObject, useEffect } from "react";

export const useScrollToBottom = <T extends HTMLElement | null>(ref: RefObject<T>) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Function to scroll to bottom
    const scrollToBottom = () => {
      element.scrollTop = element.scrollHeight;
    };

    // Create ResizeObserver to watch for height changes
    const observer = new ResizeObserver(() => {
      scrollToBottom();
    });

    // Start observing the element
    observer.observe(element);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [ref]);
};
