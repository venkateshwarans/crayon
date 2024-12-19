import { useMemo } from "react";
import { ChatContext } from "./internal/ChatContext";
import { ChatManager } from "./types";
import { useThreadListManagerStore } from "./internal/useThreadListManagerStore";
import { useThreadManagerStore } from "./internal/useThreadManagerStore";

export const ChatProvider = ({
  threadManager: inputThreadManager,
  threadListManager: inputThreadListManager,
  children,
}: React.PropsWithChildren<ChatManager>) => {
  const threadManagerStore = useThreadManagerStore(inputThreadManager);
  const threadListManagerStore = useThreadListManagerStore(
    inputThreadListManager
  );

  const ctxValue = useMemo(
    () => ({
      threadListManager: threadListManagerStore,
      threadManager: threadManagerStore,
    }),
    [threadListManagerStore, threadManagerStore]
  );

  return (
    <ChatContext.Provider value={ctxValue}>{children}</ChatContext.Provider>
  );
};
