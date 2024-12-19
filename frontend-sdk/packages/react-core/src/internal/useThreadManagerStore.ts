import { useEffect, useRef, useState } from "react";
import { create } from "zustand";
import { ThreadManager } from "../types";

// this is to create zustand store on top of input thread manager,
// it enables us to expose dev friendly api using context and not give up on optimisations
export const useThreadManagerStore = (inputThreadManager: ThreadManager) => {
  const inputThreadManagerRef = useRef(inputThreadManager);
  inputThreadManagerRef.current = inputThreadManager;

  const [threadManagerStore] = useState(() =>
    create<ThreadManager>(() => ({
      isDisabled: inputThreadManager.isDisabled,
      isRunning: inputThreadManager.isRunning,
      messages: inputThreadManager.messages,
      error: inputThreadManager.error,

      onNew: (...props) => inputThreadManagerRef.current.onNew(...props),
      onCancel: () => inputThreadManagerRef.current.onCancel?.(),
      convertMessage: (message) =>
        inputThreadManagerRef.current.convertMessage?.(message) || message,
      onAddToolResult: (props) => inputThreadManagerRef.current.onAddToolResult?.(props),
    })),
  );

  useEffect(() => {
    threadManagerStore.setState({
      isDisabled: inputThreadManager.isDisabled,
      isRunning: inputThreadManager.isRunning,
      messages: inputThreadManager.messages,
      error: inputThreadManager.error,
    });
    // no dependency array, since we want to update these values on each rerender
  });

  return threadManagerStore;
};
