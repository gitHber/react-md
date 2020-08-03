export interface Node {
  type:
    | "root"
    | "heading"
    | "paragraph"
    | "strong"
    | "emphasis"
    | "text"
    | "delete"
    | "blockquote"
    | "inlineCode"
    | "code"
    | "thematicBreak"
    | "image"
    | "link"
    | "list"
    | "listItem"
    | "table"
    | "tableRow"
    | "tableCell"
    | "html";
  position?: {
    start: { line: number; column: number; offset: number };
    end: { line: number; column: number; offset: number };
    indent: [];
  };
  children?: Node[];
  [key: string]: any;
}

export interface RootNode extends Node {
  type: "root";
}

export interface HeadingNode extends Node {
  type: "heading";
  depth: number;
}

export interface TextNode extends Node {
  type: "text";
  value: string;
}

export interface TableNode extends Node {
  type: "table";
  align: [];
}
export interface ListNode extends Node {
  type: "list";
  start: number | null;
  ordered: boolean;
  spread: boolean;
}
export interface CodeNode extends Node {
  type: "code";
  lang: string;
  meta: any;
  value: string;
}
export interface ImageNode extends Node {
  type: "image";
  alt: string;
  title: any;
  url: string;
}
export interface LinkNode extends Node {
  type: "link";
  title: any;
  url: string;
}
