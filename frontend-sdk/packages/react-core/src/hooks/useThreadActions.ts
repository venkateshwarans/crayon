import { useStore } from "zustand";
import { useChatContext } from "../internal/ChatContext";
import { ThreadActions } from "../types";

/**
 * @category Hooks
 *
 * @remarks
 * useThreadActions
 */
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
