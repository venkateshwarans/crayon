import { Message as VercelMessage } from "ai";

/** Represents a chat message, extending Vercel's Message type */
export type Message = VercelMessage;

/**
 * Represents a message being created, with an optional ID
 * @extends Omit<Message, "id">
 */
export type CreateMessage = Omit<Message, "id"> & {
  id?: Message["id"];
};

/**
 * Function type for converting between message types
 * @template T - The source message type
 */
export type MessageConverter<T = Message> = (message: T) => Message;

/**
 * Represents a chat thread
 */
export type Thread = {
  /** Unique identifier for the thread */
  threadId: string;
  /** Title of the thread */
  title: string;
  /** Creation timestamp */
  createdAt: Date;
  /** Indicates if the thread is currently processing */
  isRunning: boolean;
};

/**
 * Actions available for managing a thread
 * @template T - The message type used in the thread
 */
export type ThreadActions<T = Message> = {
  onNew: (message: CreateMessage) => void;
  onReload?: (messageId: string) => undefined;
  onCancel?: () => void;
  onAddToolResult?:
    | ((props: { toolCallId: string; result: any }) => Promise<void> | void)
    | undefined;
  convertMessage: T extends Message ? MessageConverter<T> | undefined : MessageConverter<T>;
};

/**
 * Represents the state of a thread
 * @template T - The message type used in the thread
 */
export type ThreadState<T = Message> = {
  isDisabled?: boolean | undefined;
  isRunning?: boolean | undefined;
  messages: T[];
  error: Error | null | undefined;
};

/**
 * Combines thread state and actions
 * @template T - The message type used in the thread
 */
export type ThreadManager<T = Message> = ThreadState<T> & ThreadActions<T>;

/**
 * Represents the state of the thread list
 */
export type ThreadListState = {
  threads: Thread[];
  isLoading: boolean;
  error: Error | null | undefined;
};

/**
 * Actions available for managing the thread list
 */
export type ThreadListActions = {
  load: () => void;
  switchToNew: () => void;
  updateThread: (thread: Thread) => void;
  deleteThread: (threadId: string) => void;
};

/**
 * Combines thread list state and actions
 */
export type ThreadListManager = ThreadListState & ThreadListActions;

/**
 * Main chat manager combining thread and thread list management
 */
export type ChatManager = {
  threadListManager: ThreadListManager;
  threadManager: ThreadManager;
};
