import styled, { css } from "styled-components";
import React from "react";

const hCss = css`
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
`;

export const H1 = styled.h1`
  font-size: 2.25em;
  padding-bottom: 0.3em;
  border-bottom: 1px solid #eaecef;
  ${hCss}
`;
export const H2 = styled.h2`
  font-size: 1.75em;
  padding-bottom: 0.3em;
  border-bottom: 1px solid #eaecef;
  ${hCss}
`;
export const H3 = styled.h3`
  font-size: 1.5em;
  ${hCss}
`;
export const H4 = styled.h4`
  font-size: 1.25em;
  ${hCss}
`;
export const H5 = styled.h5`
  font-size: 1em;
  ${hCss}
`;
export const H6 = styled.h6`
  font-size: 1em;
  color: #6a737d;
  ${hCss}
`;

export const Paragraph = styled.p`
  word-break: break-word;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const Strong = styled.strong`
  font-weight: 600;
`;

export const Emphasis = styled.em``;
export const Delete = styled.del``;

export const Blockquote = styled.blockquote`
  color: #666;
  padding: 4px 23px;
  margin: 22px 0;
  border-left: 4px solid #cbcbcb;
  background-color: #f8f8f8;
  & > :first-child {
    margin-top: 0;
  }
  & > :last-child {
    margin-bottom: 0;
  }
`;
export const ThematicBreak = styled.hr`
  border-bottom-color: #eee;
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: #e1e4e8;
  border: 0;
  overflow: hidden;
  box-sizing: content-box;
  ::before {
    display: table;
    content: "";
  }
  ::after {
    display: table;
    clear: both;
    content: "";
  }
`;

const ImageWrap = styled.figure`
  margin: 22px auto;
  text-align: center;
  img {
    cursor: zoom-in;
    max-width: 100% !important;
    margin: 0;
  }
`;
export const Image = (props) => {
  return (
    <ImageWrap>
      <img {...props} src={props.url} />
    </ImageWrap>
  );
};

export const Link = styled.a.attrs((p) => ({
  // @ts-ignore
  href: p.url,
}))`
  color: #0366d6;
  text-decoration: none;
  cursor: pointer;
`;

export const Ul = styled.ul`
  padding-left: 2em;
  margin-top: 0;
  margin-bottom: 16px;
  li {
    margin-bottom: 0;
    p {
      margin-bottom: 0;
    }
  }
`;
export const Ol = styled.ol`
  padding-left: 2em;
  margin-top: 0;
  margin-bottom: 16px;
  li {
    padding-left: 6px;
    margin-bottom: 0;
    p {
      margin-bottom: 0;
    }
  }
`;
export const ListItem = styled.li``;
export const Table = styled.table`
  width: auto;
  display: table;
  overflow: auto;
  margin-top: 0;
  margin-bottom: 16px;
  border-spacing: 0;
  border-collapse: collapse;
  thead {
    background: #f6f6f6;
    color: #000;
    text-align: left;
  }
  tr:nth-child(2n) {
    background-color: #f6f8fa;
  }
`;

export const TableRow = styled.tr`
  background-color: #fff;
  border-top: 1px solid #c6cbd1;
`;
export const Th = styled.th`
  padding: 6px 13px;
  border: 1px solid #dfe2e5;
  font-weight: 600;
`;
export const Td = styled.td`
  word-break: break-all;
  padding: 6px 13px;
  border: 1px solid #dfe2e5;
`;
export const InlineCode = styled.code`
  background-color: #fff5f5;
  word-break: break-word;
  color: #ff502c;
  font-size: 0.87em;
  padding: 0.065em 0.4em;
  border-radius: 2px;
  overflow-x: auto;
`;
