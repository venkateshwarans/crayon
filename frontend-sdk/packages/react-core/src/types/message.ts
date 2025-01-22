type common = {
  id: string;
  isVisuallyHidden?: boolean;
};

export type UserMessage = common & {
  role: "user";
} & (
    | {
        type: "prompt";
        message?: string;
      }
    | {
        type: "action";
        message?: string;
        context?: {
          formState?: Record<string, any>;
        };
        actionDetails?: string;
      }
  );

export type AssistantMessage = common & {
  role: "assistant";
  context?: {
    uiState?: Record<string, any>;
  };
  message?: string;
  responseTemplate?: {
    name: string;
    templateProps: any;
  };
};

export type Message = UserMessage | AssistantMessage;

/**
 * Represents a message being created, with an optional ID
 * @extends Omit<Message, "id">
 */
export type CreateMessage = Omit<Message, "id">;
