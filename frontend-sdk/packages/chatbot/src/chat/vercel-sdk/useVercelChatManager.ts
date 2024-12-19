import { useChat } from "ai/react";
import { ThreadManager } from "../types";

type UseChatParams = Parameters<typeof useChat>[0] & { id?: never };
type UseChatReturn = ReturnType<typeof useChat>;

export const useVercelChatManager = (
  params: UseChatParams
): ThreadManager & { useChatState: UseChatReturn } => {
  const vercelChatReturn = useChat(params);
  const { messages, isLoading, addToolResult, append, reload, stop, error } =
    vercelChatReturn;

  return {
    messages,
    isRunning: isLoading,
    error,
    onNew: append,
    onReload: () => {
      reload();
    },
    onCancel: stop,
    onAddToolResult: addToolResult,
    convertMessage: undefined,
    useChatState: vercelChatReturn,
  };
};
