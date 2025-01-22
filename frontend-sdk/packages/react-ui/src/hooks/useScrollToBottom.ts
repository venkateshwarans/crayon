import { RefObject, useEffect } from "react";

export const useScrollToBottom = <T extends HTMLElement | null>(
  ref: RefObject<T>,
  // if the triggerValue changes, scroll to bottom
  triggerValue: any,
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.scrollTo({
      top: element.scrollHeight,
      behavior: "smooth",
    });
  }, [ref, triggerValue]);
};
