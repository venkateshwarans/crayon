import {
  useThreadActions,
  useThreadListActions,
  useThreadListState,
  useThreadState,
} from "@crayonai/react-core";
import clsx from "clsx";
import { createContext, useContext, useRef, useState } from "react";
import { useComposerState } from "../hooks/useComposerState";
import { useScrollToBottom } from "../hooks/useScrollToBottom";

export const Container = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  return <div className={clsx("h-screen w-screen", className)}>{children}</div>;
};

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  setIsOpen: () => {},
});

export const SidebarContainer = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={clsx("w-[264px] h-full border border-black/60 shrink-0", className)}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

export const SidebarHeader = ({
  logoUrl,
  title,
  className,
}: {
  logoUrl: string;
  title: string;
  className?: string;
}) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <div className={clsx("flex items-center p-4 border-b border-black/60", className)}>
      <img src={logoUrl} alt="Logo" className="h-6 w-6 mr-2" />
      <h1 className="flex-1">{title}</h1>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "←" : "→"}</button>
    </div>
  );
};

export const NewChatButton = ({ className }: { className?: string }) => {
  const { switchToNew } = useThreadListActions();

  return (
    <button onClick={switchToNew} className={clsx("w-full p-2 hover:bg-gray-100", className)}>
      New Chat
    </button>
  );
};

export const ThreadButton = ({
  id,
  title,
  className,
}: {
  id: string;
  title: string;
  className?: string;
}) => {
  const { selectThread } = useThreadListActions();

  return (
    <button
      onClick={() => selectThread(id)}
      className={clsx("w-full p-2 text-left hover:bg-gray-100", className)}
    >
      {title}
    </button>
  );
};

export const ThreadList = ({ className }: { className?: string }) => {
  const { threads } = useThreadListState();

  return (
    <div className={clsx("flex flex-col", className)}>
      {threads.map((thread) => (
        <ThreadButton key={thread.threadId} id={thread.threadId} title={thread.title} />
      ))}
    </div>
  );
};

export const ThreadContainer = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={clsx("flex-grow flex-shrink-1 h-full flex flex-col", className)}>
      {children}
    </div>
  );
};

export const ScrollArea = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  const ref = useRef<HTMLDivElement>(null);
  useScrollToBottom(ref);

  return (
    <div
      ref={ref}
      className={clsx("flex-grow flex-shrink-1 h-full flex flex-col overflow-y-auto", className)}
    >
      {children}
    </div>
  );
};

export const Messages = ({ className }: { className?: string }) => {
  const thread = useThreadState();

  return (
    <div className={clsx("flex flex-col gap-4 p-4", className)}>
      {thread.messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export const Message = ({ message, className }: { message: any; className?: string }) => {
  return (
    <div
      className={clsx(
        "p-4 rounded",
        message.role === "user" ? "bg-blue-100 ml-8" : "bg-gray-100 mr-8",
        className,
      )}
    >
      {message.content}
    </div>
  );
};

export const Composer = ({ className }: { className?: string }) => {
  const { textContent, setTextContent } = useComposerState();
  const { onNew } = useThreadActions();

  const handleSubmit = () => {
    if (!textContent.trim()) return;

    onNew({
      role: "user",
      content: textContent,
    });

    setTextContent("");
  };

  return (
    <div className={clsx("flex gap-2 p-4 border-t", className)}>
      <textarea
        value={textContent}
        onChange={(e) => setTextContent(e.target.value)}
        className="flex-1 p-2 border rounded"
        placeholder="Type your message..."
        rows={1}
      />
      <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
        Send
      </button>
    </div>
  );
};
