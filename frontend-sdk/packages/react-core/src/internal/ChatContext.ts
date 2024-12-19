import { createContext, useContext } from "react";
import { ThreadListManager, ThreadManager } from "../types";
import { StoreApi } from "zustand";
import invariant from "tiny-invariant";

export const ChatContext = createContext<{
  threadListManager: StoreApi<ThreadListManager>;
  threadManager: StoreApi<ThreadManager>;
} | null>(null);

export const useChatContext = () => {
  const chatCtxValue = useContext(ChatContext);
  invariant(chatCtxValue, "chat context not found");

  return chatCtxValue;
};
