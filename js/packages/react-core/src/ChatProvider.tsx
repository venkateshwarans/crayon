import { FC, useMemo } from "react";
import { ChatContext } from "./internal/ChatContext";
import { useThreadListManagerStore } from "./internal/useThreadListManagerStore";
import { useThreadManagerStore } from "./internal/useThreadManagerStore";
import { ChatManager } from "./types";

/**
 * @category Components
 *
 * @remarks
 * ChatProvider is a React component that provides chat management context to its children.
 * It serves as the top-level provider for thread and thread list management functionality.
 *
 * @example
 * ```tsx
 * <ChatProvider
 *   threadManager={myThreadManager}
 *   threadListManager={myThreadListManager}
 * >
 *   <App />
 * </ChatProvider>
 * ```
 *
 * @param props - The component props
 * @param props.threadManager - The thread manager instance for handling individual chat threads
 * @param props.threadListManager - The thread list manager instance for handling multiple chat threads
 * @param props.children - The child components that will have access to the chat context
 * @returns A ChatContext.Provider wrapping the children components
 */
export const ChatProvider: FC<React.PropsWithChildren<ChatManager>> = ({
  threadManager: inputThreadManager,
  threadListManager: inputThreadListManager,
  children,
}: React.PropsWithChildren<ChatManager>) => {
  const threadManagerStore = useThreadManagerStore(inputThreadManager);
  const threadListManagerStore = useThreadListManagerStore(inputThreadListManager);

  const ctxValue = useMemo(
    () => ({
      threadListManager: threadListManagerStore,
      threadManager: threadManagerStore,
    }),
    [threadListManagerStore, threadManagerStore],
  );

  return <ChatContext.Provider value={ctxValue}>{children}</ChatContext.Provider>;
};
