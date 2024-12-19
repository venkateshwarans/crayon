import { useStore } from "zustand";
import { ThreadState } from "../chat/types";
import { useChatContext } from "../internal/ChatContext";

export const useThreadState = (): ThreadState => {
  const { threadManager } = useChatContext();

  return {
    isRunning: useStore(threadManager, (store) => store.isRunning),
    isDisabled: useStore(threadManager, (store) => store.isDisabled),
    messages: useStore(threadManager, (store) => store.messages),
    error: useStore(threadManager, (store) => store.error),
  };
};
