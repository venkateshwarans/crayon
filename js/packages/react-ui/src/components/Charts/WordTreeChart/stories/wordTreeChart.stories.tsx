import { Meta, StoryObj } from "@storybook/react";
import { WordTree, WordTreeProps } from "../WordTreeChart";

const meta: Meta<WordTreeProps> = {
  title: "Components/Charts/WordTree",
  component: WordTree,
  parameters: {
    layout: "centered",
    docs: {
      description: `
        \`\`\`tsx
        import { WordTree } from '@crayon-ui/react-ui/Charts/WordTree';
        \`\`\`
      `,
    },
  },
  tags: ["!dev", "autodocs"],
};

export default meta;

const implicitData = [
  ["Phrases"],
  ["cats are better than dogs"],
  ["cats eat kibble"],
  ["cats are better than hamsters"],
  ["cats are awesome"],
];

const explicitData = [
  ["id", "childLabel", "parent", "size", { role: "style" }],
  [0, "Life", -1, 1, "black"],
  [1, "Animals", 0, 1, "black"],
  [2, "Mammals", 1, 1, "black"],
  [3, "Cats", 2, 1, "black"],
  [4, "Dogs", 2, 1, "black"],
];

export const ImplicitWordTreeStory: StoryObj<WordTreeProps> = {
  name: "Implicit Word Tree",
  args: {
    data: implicitData,
    width: "100%",
    height: "100%",
    format: "implicit",
    word: "cats",
  },
};

export const ExplicitWordTreeStory: StoryObj<WordTreeProps> = {
  name: "Explicit Word Tree",
  args: {
    data: explicitData,
    width: "100%",
    height: "100%",
    format: "explicit",
  },
};

export const ImplicitWordTreeWithThemeStory: StoryObj<WordTreeProps> = {
  name: "Implicit Word Tree with Theme",
  args: {
    data: implicitData,
    width: "100%",
    height: "100%",
    format: "implicit",
    word: "cats",
    theme: "ocean",
  },
};

export const ExplicitWordTreeWithThemeStory: StoryObj<WordTreeProps> = {
  name: "Explicit Word Tree with Theme",
  args: {
    data: explicitData,
    width: "100%",
    height: "100%",
    format: "explicit",
    theme: "ocean",
  },
};