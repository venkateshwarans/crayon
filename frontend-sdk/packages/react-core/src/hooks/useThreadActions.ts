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
    addMessages: useStore(threadManager, (store) => store.addMessages),
    updateMessage: useStore(threadManager, (store) => store.updateMessage),
    onCancel: useStore(threadManager, (store) => store.onCancel),
  };
};
