import React, { useMemo, useState } from "react";
import styled from "styled-components";

interface Log {
  title: string;
  hash: string;
  depth: number;
  children?: Log[];
  parent?: Log | null;
}
export interface Props {
  logs: Log[];
  depth?: number;
  container?: React.MutableRefObject<any>;
}

const getTreeByLogs = (logs) => {
  if (!logs.length) return [];
  let newLogs = [logs[0]];
  for (let i = 1; i < logs.length; i++) {
    let log = logs[i];
    let prevIndex = i - 1;
    let preLog = logs[prevIndex];
    let parent = preLog.parent;
    if (log.depth > preLog.depth) {
      preLog.children = preLog.children ? [...preLog.children, log] : [log];
      log.parent = preLog;
    } else if (log.depth === preLog.depth) {
      if (parent) {
        parent.children.push(log);
      } else {
        newLogs.push(log);
      }
    } else {
      // 层级往上
      do {
        if (!parent) {
          newLogs.push(log);
          break;
        }
        if (log.depth < parent.depth) {
          parent = parent.parent;
          continue;
        } else if (log.depth > parent.depth) {
          preLog.children = preLog.children ? [...preLog.children, log] : [log];
        } else {
          if (parent.parent) {
            parent.parent.children.push(log);
          } else {
            newLogs.push(log);
          }
          break;
        }
      } while (true);
    }
  }
  return newLogs;
};

const Wrap = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  transition: top 250ms ease-in-out;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0;
    padding: 0;
    font-size: 1.167rem;
    font-weight: 400;
    line-height: 1.3;
    color: #333;
    list-style: none;
    a {
      display: block;
      color: inherit;
      text-decoration: none;
      position: relative;
      padding: 4px 0 4px 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      ::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -2px;
        width: 4px;
        height: 4px;
        background-color: currentColor;
        border-radius: 50%;
      }
    }
  }
  a.active {
    color: #007fff;
    background-color: #ebedef;
  }
  .ul1 {
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 7px;
      bottom: 0;
      width: 2px;
      background-color: #ebedef;
      opacity: 0.5;
    }
    li {
      font-weight: 600;
      color: #000;
      font-size: 16px;

      a {
        margin: 6px 0;
        padding: 4px 0 4px 21px;
        ::before {
          left: 5px;
          margin-top: -3px;
          width: 6px;
          height: 6px;
        }
      }
    }
  }
  .ul2 {
    li {
      font-weight: 400;
      font-size: 14px;

      a {
        padding-left: 36px;
        ::before {
          left: 24px;
          width: 4px;
          height: 4px;
        }
      }
    }
  }
  .ul3 {
    li {
      font-weight: 400;
      font-size: 14px;
      a {
        padding-left: 51px;
        ::before {
          left: 39px;
          width: 4px;
          height: 4px;
        }
      }
    }
  }
`;

const Catalogs: React.FC<Props> = ({ logs, container, ...props }) => {
  const [currentHash, setCurrentHash] = useState(null);
  const ref = React.useRef(null);
  const tree = useMemo(() => getTreeByLogs(logs), [logs]);
  React.useEffect(() => {
    if (container.current) {
      const listener = (e) => {
        let { top, left } = ref.current.getBoundingClientRect();
        if (e.target.scrollTop > 10) {
          ref.current.style.position = "fixed";
          ref.current.style.left = left + "px";
          ref.current.style.top = "0";
        } else {
          ref.current.style.position = "";
          ref.current.style.left = "";
          ref.current.style.top = "";
        }
      };
      container.current.addEventListener("scroll", listener);

      return () => container.current.removeEventListener("scroll", listener);
    }
  }, []);
  React.useEffect(() => {
    if (container.current) {
      const listener = (e) => {
        let findCurrent = (arr: Log[]) => {
          for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            let ele = document.getElementById(item.hash);
            let { bottom, top } = ele.getBoundingClientRect();
            if (bottom > 0) {
              setCurrentHash(item.hash);
              break;
            }
            if (item.children) {
              findCurrent(item.children);
            }
          }
        };
        findCurrent(logs);
      };
      container.current.addEventListener("scroll", listener);

      return () => container.current.removeEventListener("scroll", listener);
    }
  }, [logs]);

  const children = useMemo(() => {
    function flat(tree, c) {
      return (
        <ul className={`ul${c}`}>
          {tree.map((l: Log) => (
            <li key={l.hash} className={`li${c}`}>
              <a
                className={l.hash === currentHash ? "active" : ""}
                href={`#${l.hash}`}
                title={l.title}
              >
                {l.title}
              </a>
              {l.children && flat(l.children, c + 1)}
            </li>
          ))}
        </ul>
      );
    }
    return flat(tree, 1);
  }, [logs, currentHash]);
  return <Wrap ref={ref}>{children}</Wrap>;
};
export default Catalogs;
