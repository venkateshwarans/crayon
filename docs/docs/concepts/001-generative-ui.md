# Generative UI

:::note Prerequisites
This guide assumes familiarity with LLMs and tool calling. If you are not familiar with these concepts, please refer to the [OpenAI guide](https://platform.openai.com/docs/guides/function-calling).
:::

One of the key features of Crayon is the ability to power Generative UI interfaces beyond simple pre-defined chat interfaces. Crayon allows you to build fully generative UI interfaces
that are powered by an LLM rather than being pre-defined by the developer.

## What is generative UI?
Generative UI refers to user interfaces that are dynamically generated and adapted by AI models in real-time. Unlike traditional static interfaces, generative UI can create, modify, and arrange UI components based on user interactions and context. This enables more flexible and personalized user experiences that can evolve based on user needs.

## How does it work?
While Crayon is fairly agnostic to the implementation details, the most common way to implement Generative UI is by using tool calling.

For example, let's assume we are building a personal finance assistant. It would typically have a set of tools that can:
- Read your past transactions
- Check your current balance
- Track your upcoming bills
- And more

This data is then fed back into the LLM response which generates a readable text response for the user.

By extending this approach, we can also pass specific tools to the LLM that it should call when it wants to display certain information to the user.
For example, if the user asks for their upcoming bills and the LLM has the `render_bills` tool at its disposal, it can call this tool to display the bills in a table format.

By passing this tool call invocation to the UI, we can then render a React component that displays the bills in a table format.

## How to use it?
See the [Generative UI guide](/docs/guides/generative-ui) for more information.
