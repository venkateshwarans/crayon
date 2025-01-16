import { useChat } from "ai/react";
import { GenUITool, ThreadManager } from "../types";

type UseChatParams = Parameters<typeof useChat>[0] & { id?: never };
type UseChatReturn = ReturnType<typeof useChat>;

export const useVercelChatManager = (
  params: UseChatParams,
  tools: GenUITool[],
): ThreadManager & { useChatState: UseChatReturn } => {
  const toolsMap = tools.reduce(
    (acc, tool) => {
      acc[tool.name] = tool;
      return acc;
    },
    {} as Record<string, GenUITool>,
  );

  const vercelChatReturn = useChat({
    ...params,
    body: { ...params.body, tools },
  });
  const { messages, isLoading, addToolResult, append, reload, stop, error } = vercelChatReturn;

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
    tools: toolsMap,
  };
};
