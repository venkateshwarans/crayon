import { useStore } from "zustand";
import { ThreadActions } from "../chat/types";
import { useChatContext } from "../internal/ChatContext";

export const useThreadActions = (): ThreadActions => {
  const { threadManager } = useChatContext();

  return {
    onNew: useStore(threadManager, (store) => store.onNew),
    onReload: useStore(threadManager, (store) => store.onReload),
    onCancel: useStore(threadManager, (store) => store.onCancel),
    onAddToolResult: useStore(threadManager, (store) => store.onAddToolResult),
    convertMessage: useStore(threadManager, (store) => store.convertMessage),
  };
};
