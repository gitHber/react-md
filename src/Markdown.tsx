import React, { useRef } from "react";
import { parseAst } from "./utils";
import * as Types from "./node";
import * as MdComponents from "./MdComponents";
import Code from "./Code";
import styled from "styled-components";
import Catalogs from "./Catalogs";

type Params = Parameters<typeof React.createElement>;

type Components = Partial<Record<Types.Node["type"], Params[0] | any>>;

export interface Props
  extends Components,
    React.HTMLAttributes<HTMLDivElement> {
  content: string;
  anchorEl?: React.MutableRefObject<any> | Function;
  disableCatalogs?: boolean;
  h?: Params[0][];
  lists?: {
    order: Params[0];
    unorder: Params[0];
  };
  tableCells?: {
    th: Params[0];
    td: Params[0];
  };
}

const transformAstToReact = (
  root: Types.RootNode,
  options?: Omit<
    Props,
    "content" | "heading" | "tableCell" | "list" | "root" | "text"
  >
): [(React.ReactElement | string)[], Types.Node[]] => {
  let heads = [];
  let transform = (nodes: Types.Node[], parent: Types.Node, index: number) => {
    return !nodes
      ? []
      : nodes.map((node, i) => {
          let ComponentType;
          switch (node.type) {
            case "text":
              return (node as Types.TextNode).value;
            case "html":
              return React.createElement(options[node.type], {
                dangerouslySetInnerHTML: { __html: node.value },
                key: `${node.type}-${index}${i}`,
              });
            case "code":
            case "inlineCode":
              node.children = [
                {
                  type: "text",
                  position: node.position,
                  value: node.value,
                },
              ];
              break;
            case "heading":
              node.id = `${node.type}-${index}${i}`;
              heads.push(node);

              ComponentType = options.h[(node as Types.HeadingNode).depth - 1];
              break;
            case "list":
              ComponentType = node.ordered
                ? options["lists"].order
                : options["lists"].unorder;
              break;
            case "table":
              node.children.forEach((n) => (n.rowalign = node.align));
              break;
            case "tableCell":
              ComponentType = node.isHead
                ? options["tableCells"].th
                : options["tableCells"].td;
              break;
            case "tableRow":
              node.children.forEach((n, i) => {
                n.align = node.rowalign[i];
              });
              if (node === parent.children[0]) {
                node.children.forEach((n, i) => {
                  n.isHead = true;
                });
                ComponentType = ({ children, ...props }) => (
                  <thead>
                    {React.createElement(options[node.type], props, children)}
                  </thead>
                );
              }
              break;
          }
          const { children, type, position, rowalign, ...props } = node;
          return React.createElement(
            ComponentType || options[type],
            { ...props, key: `${type}-${index}${i}` },
            ...transform(node.children, node, i)
          );
        });
  };
  return [transform(root.children, root, 0), heads];
};

const Wrap = styled.div`
  position: relative;
`;

const Markdown = React.forwardRef<any, Props>(
  (
    {
      content,
      h = [
        MdComponents.H1,
        MdComponents.H2,
        MdComponents.H3,
        MdComponents.H4,
        MdComponents.H5,
        MdComponents.H6,
      ],
      paragraph = MdComponents.Paragraph,
      code = Code,
      inlineCode = MdComponents.InlineCode,
      strong = MdComponents.Strong,
      emphasis = MdComponents.Emphasis,
      blockquote = MdComponents.Blockquote,
      thematicBreak = MdComponents.ThematicBreak,
      delete: del = MdComponents.Delete,
      image = MdComponents.Image,
      link = MdComponents.Link,
      lists = { order: MdComponents.Ol, unorder: MdComponents.Ul },
      listItem = MdComponents.ListItem,
      table = MdComponents.Table,
      tableRow = MdComponents.TableRow,
      tableCells = { th: MdComponents.Th, td: MdComponents.Td },
      html = "div",
      disableCatalogs = false,
      anchorEl,
      ...props
    },
    ref
  ) => {
    const nodeRef = useRef();
    const handleRef = (refValue) => {
      nodeRef.current = refValue;
      if (ref) {
        if (typeof ref === "function") {
          ref(refValue);
        } else {
          ref.current = refValue;
        }
      }
    };
    const root = React.useMemo(() => {
      return parseAst(content) as Types.RootNode;
    }, [content]);
    const [children, heads] = transformAstToReact(root, {
      h,
      code,
      strong,
      emphasis,
      blockquote,
      thematicBreak,
      delete: del,
      inlineCode,
      image,
      link,
      lists,
      listItem,
      table,
      tableRow,
      tableCells,
      paragraph,
      html,
    });

    return (
      <Wrap {...props} ref={handleRef}>
        {children}
        {!disableCatalogs && (
          <Catalogs
            container={nodeRef}
            logs={heads
              .map((h) => ({
                depth: h.depth,
                title: h.children[0]?.value,
                hash: h.id,
              }))
              .filter((i) => i.depth < 4)}
          />
        )}
      </Wrap>
    );
  }
);

export default React.memo(Markdown);
