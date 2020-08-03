<div align="center">
<h1>@githber/react-md</h1>
A react markdown component, support customize all component！
</div>

## install

```shell
npm i -S @githber/react-md
// or
yarn add @githber/react-md
```

## usage

```js
import { Markdown } from "@githber/react-md";

export () => <Markdown
  content={`# hello`}
/>
```

## props

| param           | desc                   | type                                                                  | default |
| :-------------- | :--------------------- | :-------------------------------------------------------------------- | :------ |
| content         | md content             | string                                                                |         |
| disableCatalogs | disable Catalogs       | boolean                                                               | false   |
| h               | # Components           | React.ComponentType[] ex: ['h1', ..., 'h6']                           |         |
| code            | `Code` Component       | React.ComponentType props: {value, lang}                              |
| inlineCode      | `InlineCode` Component | React.ComponentType props: {value}                                    |
| strong          | **Strong** Component   | React.ComponentType                                                   |         |
| emphasis        | _Emphasis_ Component   | React.ComponentType                                                   |         |
| blockquote      | > Blockquote Component | React.ComponentType                                                   |         |
| delete          | ~~Delete~~ Component   | React.ComponentType                                                   |         |
| image           | !\[Image\]() Component | React.ComponentType props: {url: string; alt: string}                 |         |
| link            | [Link]() Component     | React.ComponentType                                                   |         |
| lists           | Lists Components       | { order: React.ComponentType, unorder: React.ComponentType}           |         |
| listItem        | - ListItem Component   | React.ComponentType                                                   |         |
| table           | Table Component        | React.ComponentType props: {align: (null\| left\| center \| right)[]} |         |
| tableRow        | TableRow Component     | React.ComponentType                                                   |         |
| tableCells      | TableCells Components  | { th: React.ComponentType, td: React.ComponentType} props: {align}    |         |
| paragraph       | Paragraph Component    | React.ComponentType                                                   |         |
| html            | <Html\> Wrap Component | React.ComponentType                                                   |         |
