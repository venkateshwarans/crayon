import { useStore } from "zustand";
import { useChatContext } from "../internal/ChatContext";
import { ThreadListState } from "../types";

export const useThreadListState = (): ThreadListState => {
  const { threadListManager } = useChatContext();
  return {
    isLoading: useStore(threadListManager, (store) => store.isLoading),
    threads: useStore(threadListManager, (store) => store.threads),
    error: useStore(threadListManager, (store) => store.error),
  };
};
