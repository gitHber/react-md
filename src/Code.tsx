import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

export interface Props {
  value: string;
  lang: string;
  style?: any;
  customStyle?: any;
  lineProps?: lineTagPropsFunction | React.HTMLProps<HTMLElement>;
  codeTagProps?: React.HTMLProps<HTMLElement>;
  useInlineStyles?: boolean;
  showLineNumbers?: boolean;
  startingLineNumber?: number;
  lineNumberStyle?: any;
  [spread: string]: any;
}

const Code: React.FC<Props> = ({ value, lang, showLineNumbers, ...props }) => {
  return (
    <SyntaxHighlighter
      language={lang}
      showLineNumbers={
        showLineNumbers === undefined
          ? Boolean(showLineNumbers)
          : showLineNumbers
      }
      {...props}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default Code;
