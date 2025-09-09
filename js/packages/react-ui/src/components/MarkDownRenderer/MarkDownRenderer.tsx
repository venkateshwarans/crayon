import clsx from "clsx";
import { memo } from "react";
import ReactMarkdown, { Components, type Options } from "react-markdown";
import { oneLight, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeKatex from "rehype-katex";
import remarkBreaks from "remark-breaks";
import remarkEmoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import { CodeBlock } from "../CodeBlock";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../Table";
import { useTheme } from "../ThemeProvider";

const variantStyles = {
  clear: "",
  card: "crayon-markdown-renderer-card",
  sunk: "crayon-markdown-renderer-card-sunk",
};

export interface MarkDownRendererProps {
  variant?: "clear" | "card" | "sunk";
  textMarkdown: string;
  options?: Options;
  className?: string;
}

export const MarkDownRenderer = memo((props: MarkDownRendererProps) => {
  const { mode } = useTheme();
  const theme = mode === "dark" ? vscDarkPlus : oneLight;
  const components: Components = {
    code({ className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");

      if (match || (!className && String(children).includes("\n"))) {
        const language = match?.[1] ?? "text";
        const codeString = String(children).trim();
        return <CodeBlock language={language} codeString={codeString} theme={theme} />;
      }

      return (
        <code className={clsx("crayon-markdown-renderer-code", className)} {...props}>
          {children}
        </code>
      );
    },
    a({ href, children, ...props }) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="crayon-markdown-renderer-link"
          {...props}
        >
          {children}
        </a>
      );
    },
    table: Table,
    thead: TableHeader,
    th: TableHead,
    tbody: TableBody,
    tr: TableRow,
    td: TableCell,
  };

  // Create a properly typed configuration for markdown rendering
  const markdownProps = {
    ...props.options,
    components: { ...components, ...props.options?.components },
    // Apply all remark plugins for enhanced markdown features
    remarkPlugins: [
      ...(props.options?.remarkPlugins || []),
      remarkGfm,
      // Use a custom configuration for remarkMath to only use $$ for math
      [remarkMath, { singleDollarTextMath: false }] as any,
      remarkEmoji,
      // Apply remarkBreaks with options
      remarkBreaks
    ],
    // Apply KaTeX for math rendering
    rehypePlugins: [...(props.options?.rehypePlugins || []), rehypeKatex],
  };

  return (
    <div
      className={clsx(
        props["variant"] && variantStyles[props["variant"] as keyof typeof variantStyles],
        "crayon-markdown-renderer",
        props.className,
      )}
    >
      <ReactMarkdown {...markdownProps}>{props.textMarkdown}</ReactMarkdown>
    </div>
  );
});
