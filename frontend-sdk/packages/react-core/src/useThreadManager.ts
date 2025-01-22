import { useEffect, useMemo, useRef } from "react";
import { createStore } from "zustand";
import { CreateMessage, Message, ResponseTemplate, ThreadManager } from "./types";

type Props = {
  threadId: string | null;
  loadThread: (threadId: string) => Promise<Message[]>;
  onAddMessages: (props: {
    messages: CreateMessage[];
    threadManager: ThreadManager;
    abortController: AbortController;
  }) => Promise<Message[]>;
  responseTemplates: ResponseTemplate[];
};

export const useThreadManager = (props: Props): ThreadManager => {
  const propsRef = useRef(props);
  propsRef.current = props;

  const store = useMemo(() => {
    return createStore<
      ThreadManager & {
        abortController: AbortController | null;
      }
    >((set) => {
      return {
        messages: [] as Message[],
        error: null,
        abortController: null,
        isRunning: false,
        addMessages: async (...messages: CreateMessage[]) => {
          const abortController = new AbortController();
          const threadManager = store.getState();

          if (threadManager.isRunning) {
            return;
          }

          set({ abortController, isRunning: true });
          abortController.signal.addEventListener("abort", () => {
            set({ abortController: null, isRunning: false });
          });

          try {
            await propsRef.current.onAddMessages({
              messages,
              threadManager: store.getState(),
              abortController: new AbortController(),
            });
          } finally {
            set({ abortController: null, isRunning: false });
          }
        },
        updateMessage: (message: Message) => {
          const messages = store.getState().messages.map((m) => {
            if (m.id === message.id) {
              return message;
            }
            return m;
          });
          set({ messages });
        },
        onCancel: () => {
          const abortController = store.getState().abortController;
          if (abortController) {
            abortController.abort();
          }
        },
        responseTemplates: propsRef.current.responseTemplates.reduce(
          (acc, template) => {
            acc[template.name] = template;
            return acc;
          },
          {} as { [name: string]: ResponseTemplate },
        ),
      };
    });
  }, [propsRef]);

  useEffect(() => {
    const threadId = props.threadId;
    // cancel any previous requests
    store.getState().onCancel();

    store.setState({ messages: [] });

    if (threadId) {
      const abortController = new AbortController();
      store.setState({ abortController, isRunning: true });
      props
        .loadThread(threadId)
        .then((messages) => {
          store.setState({ messages });
        })
        .catch((error) => {
          store.setState({ error });
        })
        .finally(() => {
          store.setState({ abortController: null, isRunning: false });
        });
    }
  }, [props.threadId]);

  return store.getState();
};
