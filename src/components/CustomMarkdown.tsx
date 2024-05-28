import React, { LegacyRef } from "react";
import Markdown, { Options } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import "./CustomMarkdown.css";

interface CustomMarkdownProps extends React.PropsWithChildren<Options> {}

const CustomMarkdown = (props: CustomMarkdownProps) => {
  return (
    <Markdown
      className={"custom-markdown"}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ className, children, ref, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              language={match[1]}
              {...props}
              style={{
                ...materialDark,
                pre: {
                  marginTop: 100,
                },
              }}
              ref={ref as LegacyRef<SyntaxHighlighter>}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...props}>{children}</code>
          );
        },
      }}
      {...props}
    />
  );
};

export default CustomMarkdown;
