import { Message as VercelMessage } from "ai";
import { z } from "zod";

export type Message = VercelMessage;

export type CreateMessage = Omit<Message, "id"> & {
  id?: Message["id"];
};

export type MessageConverter<T = Message> = (message: T) => Message;

export interface GenUITool<T extends z.ZodSchema = z.ZodSchema> {
  name: string;
  description: string;
  parameters: T;
  Component: React.ComponentType<
    z.infer<T> & {
      toolCallId: string;
      addToolResult: (args: { toolCallId: string; result: unknown }) => void;
    }
  >;
}

export type Thread = {
  threadId: string;
  title: string;
  createdAt: Date;
  isRunning: boolean;
};

export type ThreadActions<T = Message> = {
  // add new message
  onNew: (message: CreateMessage) => void;
  // reload current chat message
  onReload?: (messageId: string) => undefined;
  // stop current processing
  onCancel?: () => void;
  onAddToolResult?:
    | ((props: { toolCallId: string; result: any }) => Promise<void> | void)
    | undefined;
  // convert message to message renderes message type
  convertMessage: T extends Message ? MessageConverter<T> | undefined : MessageConverter<T>;
};

export type ThreadState<T = Message> = {
  isDisabled?: boolean | undefined;
  isRunning?: boolean | undefined;
  messages: T[];
  error: Error | null | undefined;
  tools: { [id: string]: GenUITool };
};

export type ThreadManager<T = Message> = ThreadState<T> & ThreadActions<T>;

export type ThreadListState = {
  threads: Thread[];
  isLoading: boolean;
  error: Error | null | undefined;
};

export type ThreadListActions = {
  // trigger load thread
  load: () => void;
  // switch to new thread
  switchToNew: () => void;
  selectThread: (threadId: string) => void;
  updateThread: (thread: Thread) => void;
  deleteThread: (threadId: string) => void;
};

export type ThreadListManager = ThreadListState & ThreadListActions;

export type ChatManager = {
  threadListManager: ThreadListManager;
  threadManager: ThreadManager;
};
