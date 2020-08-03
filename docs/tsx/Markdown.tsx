/**
 * title: 基本使用
 * compact: true
 */
import React, { useState, useRef, useMemo, useCallback } from "react";
import { parseAst, Markdown } from "@githber/react-md";
import { ControlledEditor } from "@monaco-editor/react";

import styled from "styled-components";
let md = `
# 这是一级标题  
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
**这是加粗的文字**

*这是倾斜的文字*

***这是斜体加粗的文字***

~~这是加删除线的文字~~

> 这是引用的内容

>> 这是引用的内容

----
*****

![新垣结衣](https://note.youdao.com/yws/api/image/normal/1492480850813?userId=m18334788273_2%40163.com)

[百度](http://baidu.com)

- 列表内容
+ 列表内容
* 列表内容

1. 列表内容1
2. 列表内容2
3. 列表内容3

姓名|技能|排行
--|--|--
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟

\`代码内容\`

\`\`\`js
    function fun(){
         echo "这是一句非常牛逼的代码";
    }
    fun();
\`\`\`

`;
const Wrap = styled.div`
  display: flex;
  & > * {
    flex: 1;
  }
`;
export default () => {
  const [content, setContent] = useState(md);

  const handleEditorDidMount = useCallback((_, editor) => {}, []);
  const ref = useRef();
  return (
    <Wrap>
      <ControlledEditor
        language="markdown"
        height="90vh"
        value={content}
        theme="dark"
        editorDidMount={handleEditorDidMount}
        onChange={(e, v) => setContent(v)}
      ></ControlledEditor>
      <Markdown
        content={content}
        style={{ height: "90vh", overflow: "auto" }}
      />
    </Wrap>
  );
};
