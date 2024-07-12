// import React, { useState, useEffect } from "react";
// import ReactMarkdown from "react-markdown";

// const MarkdownComponent = () => {
//   const [markdown, setMarkdown] = useState("");

//   useEffect(() => {
//     const fetchMarkdown = async () => {
//       try {
//         const response = await fetch(
//           "../pages/blog/chapter01/argo-datastru.md"
//         );
//         const content = await response.text();
//         setMarkdown(content);
//       } catch (error) {
//         console.error("Error fetching Markdown content:", error);
//       }
//     };

//     fetchMarkdown();
//   }, []);

//   return (
//     <div>
//       <ReactMarkdown children={markdown} />
//     </div>
//   );
// };

// export default MarkdownComponent;
const fs = require("fs");
const path = require("path");

// 指定包含 Markdown 文件的目录
__dirname = "E:/learn/codelang/react/my-vite-app/";
const markdownDir = path.join(__dirname, "docs");

// 指定生成组件的目标文件
const componentsFile = path.join(__dirname, "docs/components.jsx");

// 读取 Markdown 文件目录
const files = fs.readdirSync(markdownDir);

// 创建组件文件的内容
let componentsContent = `import React , { useState }  from 'react';
import ReactMarkdown from 'react-markdown';
import { H2Component } from '../component/toc';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
const MyH2 = ({ children }) => (
  <H2Component style={{ color: 'red' }}>{children}</H2Component>
);


`;

files.forEach((file) => {
  if (path.extname(file) === ".md") {
    const markdownPath = path.join(markdownDir, file);
    let componentName = path.basename(file, ".md");
    const markdownContent = fs.readFileSync(markdownPath, "utf8");
    componentName =
      componentName.charAt(0).toUpperCase() + componentName.slice(1);
    componentsContent += `
const ${componentName} = () => {
  return (
    <ReactMarkdown children={\`${markdownContent}\`} remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]} components={{
      h2: MyH2,
      
    }}/>
  );
};

export { ${componentName} };
`;
  }
});

componentsContent += `\n`;

// 写入组件文件
fs.writeFileSync(componentsFile, componentsContent);

console.log(
  "Markdown files have been converted to React components and saved to components.js."
);
