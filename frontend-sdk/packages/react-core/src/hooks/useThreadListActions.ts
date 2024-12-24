import { useStore } from "zustand";
import { useChatContext } from "../internal/ChatContext";
import { ThreadListActions } from "../types";

export const useThreadListActions = (): ThreadListActions => {
  const { threadListManager } = useChatContext();
  return {
    load: useStore(threadListManager, (store) => store.load),
    switchToNew: useStore(threadListManager, (store) => store.switchToNew),
    selectThread: useStore(threadListManager, (store) => store.selectThread),
    deleteThread: useStore(threadListManager, (store) => store.deleteThread),
    updateThread: useStore(threadListManager, (store) => store.updateThread),
  };
};
