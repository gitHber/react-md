import styled, { css } from "styled-components";
import React from "react";

export const H1 = styled.h1`
  font-size: 30px;
  margin-bottom: 5px;
  color: #333;
  margin-top: 35px;
  line-height: 1.5;
  padding-bottom: 5px;
`;
export const H2 = styled.h2`
  font-size: 24px;
  margin-bottom: 5px;
  color: #333;
  margin-top: 25px;
  line-height: 1.5;
  padding-bottom: 12px;
  border-bottom: 1px solid #ececec;
`;
export const H3 = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  margin-top: 35px;
  line-height: 1.5;
  padding-bottom: 0;
`;
export const H4 = styled.h4`
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
  margin-top: 35px;
  line-height: 1.5;
  padding-bottom: 5px;
`;
export const H5 = styled.h5`
  font-size: 15px;
  margin-bottom: 10px;
  color: #333;
  margin-top: 35px;
  line-height: 1.5;
  padding-bottom: 5px;
`;
export const H6 = styled.h6`
  font-size: 12px;
  margin-bottom: 10px;
  margin-top: 5px;
  color: #333;
  line-height: 1.5;
  padding-bottom: 5px;
`;

export const Paragraph = styled.p`
  word-break: break-word;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.75;
  line-height: inherit;
  margin-top: 22px;
  margin-bottom: 22px;
`;

export const Strong = styled.strong`
  font-weight: 700;
`;

export const Emphasis = styled.em``;
export const Delete = styled.del``;

export const Blockquote = styled.blockquote`
  color: #666;
  padding: 1px 23px;
  margin: 22px 0;
  border-left: 4px solid #cbcbcb;
  background-color: #f8f8f8;
`;
export const ThematicBreak = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin-top: 2.7rem;
  margin-bottom: 2.7rem;
  box-sizing: content-box;
  height: 0;
  overflow: visible;
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
  color: #0269c8;
  border-bottom: 1px solid #d1e9ff;
  text-decoration: none;
  cursor: pointer;
`;

export const Ul = styled.ul`
  padding-left: 28px;
  li {
    margin-bottom: 0;
  }
`;
export const Ol = styled.ol`
  padding-left: 28px;
  li {
    padding-left: 6px;
    margin-bottom: 0;
  }
`;
export const ListItem = styled.li``;
export const Table = styled.table`
  font-size: 1rem;
  width: auto;
  max-width: 100%;
  overflow: auto;
  border: 1px solid #f6f6f6;
  border-collapse: separate;
  box-sizing: border-box;
  border-spacing: 2px;
  thead {
    background: #f6f6f6;
    color: #000;
    text-align: left;
  }
  tr:nth-child(2n) {
    background-color: #fcfcfc;
  }
`;

export const TableRow = styled.tr`
  td,
  th {
    padding: 1rem 0.6rem;
    line-height: 2rem;
  }
`;
export const Th = styled.th``;
export const Td = styled.td`
  min-width: 10rem;
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
