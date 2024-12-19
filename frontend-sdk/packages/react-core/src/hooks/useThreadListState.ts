import { useStore } from "zustand";
import { ThreadListState } from "../chat/types";
import { useChatContext } from "../internal/ChatContext";

export const useThreadListState = (): ThreadListState => {
  const { threadListManager } = useChatContext();
  return {
    isLoading: useStore(threadListManager, (store) => store.isLoading),
    threads: useStore(threadListManager, (store) => store.threads),
    error: useStore(threadListManager, (store) => store.error),
  };
};
