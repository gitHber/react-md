import parse from "remark-parse";
import unified from "unified";
import { Node } from "./node";

export const parseAst = (content) => {
  return unified().use(parse).parse(content) as Node;
};
