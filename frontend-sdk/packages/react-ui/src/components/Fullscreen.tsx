import {
  useThreadActions,
  useThreadListActions,
  useThreadListState,
  useThreadState,
} from "@crayonai/react-core";
import clsx from "clsx";
import { PanelLeft, PanelRight, Plus, Search, SendHorizontal } from "lucide-react";
import { createContext, useContext, useRef, useState } from "react";
import { useComposerState } from "../hooks/useComposerState";
import { useScrollToBottom } from "../hooks/useScrollToBottom";

export const Container = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  return <div className={clsx("cui-fullscreen-container", className)}>{children}</div>;
};

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  searchText: string;
  setSearchText: (searchText: string) => void;
};

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  setIsOpen: () => {},
  searchText: "",
  setSearchText: () => {},
});

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarContainer = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchText, setSearchText] = useState("");

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, searchText, setSearchText }}>
      <div
        className={clsx(
          "cui-fullscreen-sidebar",
          {
            "cui-fullscreen-sidebar-closed": !isOpen,
          },
          className,
        )}
      >
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
    <div className={clsx("cui-fullscreen-sidebar-header", className)}>
      <div className="cui-fullscreen-sidebar-header-title-icon">
        <img src={logoUrl} alt="Logo" className="cui-fullscreen-sidebar-logo" />
        <h1 className="cui-fullscreen-sidebar-title">{title}</h1>
      </div>
      <button className="cui-fullscreen-sidebar-header-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <PanelRight size={16} /> : <PanelLeft size={16} />}
      </button>
    </div>
  );
};

export const SearchInput = ({ className }: { className?: string }) => {
  const { searchText, setSearchText } = useContext(SidebarContext);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={clsx("cui-fullscreen-search-input", className)}
      onClick={() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }}
    >
      <Search size={16} />
      <input
        ref={inputRef}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="cui-fullscreen-search-input-input"
        placeholder="Search..."
      />
    </div>
  );
};

export const NewChatButton = ({ className }: { className?: string }) => {
  const { switchToNewThread } = useThreadListActions();

  return (
    <button
      onClick={switchToNewThread}
      className={clsx("cui-fullscreen-new-chat-button", className)}
    >
      <Plus />
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
      className={clsx("cui-fullscreen-thread-button", className)}
    >
      {title}
    </button>
  );
};

export const ThreadList = ({ className }: { className?: string }) => {
  const { threads } = useThreadListState();

  return (
    <div className={clsx("cui-fullscreen-thread-list", className)}>
      <div className="cui-fullscreen-thread-list-group ">Today</div>
      <ThreadButton
        className=""
        key={123}
        id={"thread.threadId"}
        title={"thread.titleosdnfoiwnsofnwornwijrifgjowijrnig"}
      />
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
  return <div className={clsx("cui-fullscreen-thread-container", className)}>{children}</div>;
};

export const ScrollArea = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  const ref = useRef<HTMLDivElement>(null);
  useScrollToBottom(ref);

  return (
    <div className={clsx("cui-fullscreen-scroll-area", className)}>
      <div ref={ref}>{children}</div>
    </div>
  );
};

export const Messages = ({ className }: { className?: string }) => {
  const thread = useThreadState();

  return (
    <div className={clsx("cui-fullscreen-messages", className)}>
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
        "cui-fullscreen-message",
        message.role === "user"
          ? "cui-fullscreen-message-user"
          : "cui-fullscreen-message-assistant",
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
    <div className={clsx("cui-fullscreen-composer", className)}>
      <textarea
        value={textContent}
        onChange={(e) => setTextContent(e.target.value)}
        className="cui-fullscreen-composer-input"
        placeholder="Type your message..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />
      <button onClick={handleSubmit} className="cui-fullscreen-composer-button">
        <SendHorizontal size={16} />
      </button>
    </div>
  );
};
