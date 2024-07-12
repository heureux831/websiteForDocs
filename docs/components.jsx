import React , { useState }  from 'react';
import ReactMarkdown from 'react-markdown';
import { H2Component } from '../component/toc';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
const MyH2 = ({ children }) => (
  <H2Component style={{ color: 'red' }}>{children}</H2Component>
);



const Introduction = () => {
  return (
    <ReactMarkdown children={`# 什么是 豆包 MarsCode 编程助手[

豆包 MarsCode 编程助手，具备以智能代码补全为代表的 AI 功能。支持了多种编程语言以及主流的 IDE，它能够在开发过程中对单行代码乃至整个函数提供编写提议。除此之外，它还对代码解释、单元测试生成以及问题修复等功能提供支持，进而提升了开发的效率与质量。更多信息，请参考豆包 MarsCode 编程助手的文档。

## 使用场景

- **智能代码操作**

豆包 MarsCode 编程助手提供代码自动补全与生成、问题修复、代码优化等能力，帮助你更高效地完成开发任务。

- **智能问答**

基于丰富的研发知识，豆包 MarsCode 编程助手可以快速且准确地回答研发相关问题。

## 功能介绍

豆包 MarsCode 编程助手支持的功能如下表所示。更详细的使用说明参考《[AI 能力](https://docs.marscode.cn/ai-extension/use-ai-capabilities)》一文。

| 功能       | 说明                                  |
| :------- | :---------------------------------- |
| 代码补全     | 阅读并理解当前代码，然后提供后续代码片段，也支持通过注释生成代码片段。 |
| 代码补全 Pro | 基于上一次的编辑内容及代码情况，预测下一个改动点并提供推荐代码。    |
| 代码生成     | 理解自然语言并生成所需代码。                      |
| 代码编辑     | 编辑指定代码，包括重构、优化、修改部分逻辑等              |
| 代码解释     | 精准解释项目代码，快速上手开发。                    |
| 代码注释生成   | 生成函数级注释或更详细的行间注释。                   |
| 单元测试生成   | 为指定代码片段生成单元测试。                      |
| 智能修复     | 发现代码中的问题并修复。                        |
| 智能问答     | 针对研发领域定向优化问答质量，提供更精准的问答结果。          |

## 支持的操作系统

Windows、macOS、Linux。

## 支持的 IDE

豆包 MarsCode 编程助手支持的 IDE 如下：

|IDE 名称|说明|
|:--|:--|
|Visual Studio Code|支持 1.67.0 及以上版本。|
|JetBrains|包括 IntelliJ IDEA、Pycharm、Goland、Android Studio、WebStorm、Clion、Rider、Phpstorm、DataGrip 等。版本须为 221.5080.210 及以上。|

## 支持的语言/框架

豆包 MarsCode 编程助手支持的主流语言和框架如下：

|类型|支持的语言/框架|
|:--|:--|
|后端|Go、Python、C++、C、C#、Java、PHP、Rust|
|前端|HTML、TypeScript、JavaScript、CSS|
|应用端|Kotlin、Objective-C、Swift|
|其他|Lua、SAS、CUDA、Perl、Ruby、Shell、SQL、R|
`} remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]} components={{
      h2: MyH2,
      
    }}/>
  );
};

export { Introduction };

const Introductiontomarscode = () => {
  return (
    <ReactMarkdown children={`# 什么是豆包 MarsCode IDE

豆包 MarsCode IDE 是一个云端 AI IDE 平台。通过内置的 AI 编程助手，开箱即用的开发环境，你可以更专注于各类项目开发。

## 核心优势

- **原生的 AI 能力：** 豆包 MarsCode IDE 内置了 AI 助手，提供代码自动补全与生成、问题修复、代码优化等能力，帮助你更高效地完成开发任务。
- **开箱即用：** 提供数十种不同语言、框架的开发模板，开箱即用，让你专注于项目开发。
- **随时随地的开发：** 作为云端 IDE，你只需要一台可以访问浏览器的计算机、笔记本或者平板电脑便可以打开豆包 MarsCode 完成开发工作。
- **不受本地资源限制：** 不再需要担心本地计算机对项目开发的能力支持，豆包 MarsCode 弹性的云端资源满足任何项目的需要。

## 主要功能

### 原生的 AI 能力

内置了 AI 编程助手，以开发为中心，提供代码补全、代码生成、代码编辑、注释生成、代码解释等能力，助力开发效率提升。此外，AI 编程助手可以从仓库中获取上下文，从而提升输出质量。

![图片](https://lf-cdn.marscode.com.cn/obj/eden-cn/ljhwz_lkpkbvsj/ljhwZthlaukjlkulzlp/doc/d4cee6279695457aa34673546d777618~tplv-goo7wpa0wc-image.image)

|AI 功能|说明|
|:--|:--|
|代码补全|阅读并理解当前代码，然后提供后续代码片段，也支持通过注释生成代码片段。|
|代码生成|理解自然语言并生成代码，提供的 AI 直接写入编辑器的原生交互体验。|
|代码解释|精准解释项目代码，快速上手开发。|
|代码注释生成|生成函数级注释或更详细的行间注释。|
|单测生成|生成单元测试用例。|
|缺陷修复|发现代码中的问题并修复。|
|AI 问答|针对开发领域定向优化问答质量，提供更精准的问答结果。|

参考以下文档了解更多原生 AI 能力：

- [AI 对话](https://docs.marscode.cn/ai-assistant/chat-with-the-ai-assistant)
- [管理 AI 对话](https://docs.marscode.cn/ai-assistant/manage-your-chats)
- [使用 AI 能力](https://docs.marscode.cn/ai-assistant/use-ai-capabilities)

### 开箱即用的开发环境

提供 C、C++、C#、Go、JavaScript、Java、Node.js、Rust、TypeScript 等语言的开发环境和模板，避免繁琐的环境配置，让你将更多精力放在产品开发上。

![图片](https://lf-cdn.marscode.com.cn/obj/eden-cn/ljhwz_lkpkbvsj/ljhwZthlaukjlkulzlp/doc/acbd46bd4ed6417d904059872ccce7c7~tplv-goo7wpa0wc-image.image)

若想了解模板和项目开发的详细说明，参考以下文档：

- [模板](https://docs.marscode.cn/get-started/templates)
    
- [使用模板开发项目](https://docs.marscode.cn/tutorials/develop-projects-from-templates)
    
- [使用 GitHub 仓库开发项目](https://docs.marscode.cn/tutorials/develop-projects-from-github-repositories)`} remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]} components={{
      h2: MyH2,
      
    }}/>
  );
};

export { Introductiontomarscode };

const Introtollm = () => {
  return (
    <ReactMarkdown children={`# 关于云雀大模型

## 一、模型的算法机制

欢迎你使用豆包 MarsCode！你可以使用豆包 MarsCode 来编写软件应用程序、脚本和其他基于代码的产品。 豆包 MarsCode 接入了利用深度神经网络、强化学习等技术训练的大规模语言模型以及其他模型及服务，为你提供了一系列工具，包括编码、调试、部署工具，以及集成AI的能力，大大降低了软件开发成本。

为了向你提供服务及不断优化豆包 MarsCode 的服务， 豆包 MarsCode 可能会收集你与AI进行互动的记录，你的行为信息（包括你的搜索、点击、浏览等操作记录），你提供的反馈信息。上述信息将作为效果指标， 豆包 MarsCode 将进行分析与计算，从而为你提供更好的服务。

**算法名称：** 云雀大模型算法

**算法基本原理：** 云雀大模型算法是一种基于Transformer架构的语言模型，通过前文预测下一个最可能的词语来实现文本生成。其中运用的新技术主要是基于Transformer架构的语言模型和基于人类反馈的强化学习，前者建模了大量蕴含在自然语言中的知识，后者使得模型可以通过对话方式提供合适的内容。

**算法运行机制：** 云雀大模型算法在用户提出问题后，识别用户的需求，展示对应的结果。该模型首先通过大规模无监督的预训练学习语言的统计规律和知识，然后进行有监督的微调让模型学会遵循用户的指令，最后通过强化学习训练让模型生成合适的内容。

**算法应用场景：** 云雀大模型算法主要应用于今日头条、抖音、剪映、番茄小说、西瓜视频、飞书、豆包、 豆包 MarsCode 、悟空浏览器、懂车帝等网站或应用程序。

**算法目的意图：** 云雀大模型算法旨在提升用户获取信息效率，扩展知识边界，通过提供优质问答等服务，帮助用户深入了解世界。

**备案编号：[网信算备110108823483901230031号](https://www.cac.gov.cn/2023-09/01/c_1695224377544009.htm)；[生成式人工智能服务备案号：Beijing-YunQue-20230821](https://www.cac.gov.cn/2024-04/02/c_1713729983803145.htm)**

## 二、模型的控制与管理

如果你认为模型的回复可以改进或纠正，你可通过下述联系方式告知我们。感谢你的反馈！

## 三、管理你的个人信息[

我们非常重视你对个人信息的管理，如果你对相关法律赋予的个人信息权利的行使，有任何主张、要求或者疑问，你可以通过【[Dataprivacy@bytedance.com](mailto:Dataprivacy@bytedance.com)】与我们联系，我们将尽快审核所涉问题，并在验证你的用户身份后的十五个工作日内回复。 如果我们停止运营，我们将及时停止收集你个人信息的活动，将停止运营的通知以逐一送达或公告的形式通知你，并对所持有的你的个人信息进行删除或匿名化处理。

## 四、模型服务的局限性以及对你的特别提示

**生成式人工智能可以为社会带来当前和潜在的好处，但是，由于技术限制或伦理问题，我们也十分关注模型被滥用的可能。如你选择继续使用豆包 MarsCode ，你应充分知悉并同意以下：**

1. **鉴于机器学习和人工智能的性质， 豆包 MarsCode 使用的大语言模型难以保证模型生成内容的真实性、准确性、可靠性，模型可能会提供不正确、虚假的输出。输出仅供一般信息和参考之用，不构成你及你的终端用户应该依赖的信息或建议，也不应成为你及你的终端用户采取或避免采取任何行动的依据。在你及你的终端用户根据输出采取或避免采取任何行动之前，应当严肃考虑进一步咨询专业人士的建议。**
2. **虽然我们努力采取合理的安全措施来过滤模型产出的不当/有害内容，保障其输出结果尽量符合规范预期，但无法完全排除仍有失误出现的情况。如果你遇到模型输入不当/有害内容，请及时与我们反馈，我们将及时处理虚假、危险、偏见信息，以进一步优化模型。**
3. **你应对你的行为负责，应确保你设定、输入、添加的内容未侵害他人权利，且请勿输入涉嫌违法、不良的内容。**
4. **特别提示，你不得利用基于深度学习等新技术新应用制作、发布、传播虚假信息。你在发布或传播利用基于深度学习等新技术新应用生成的信息时， 应当以显著方式予以标识或提示。你不应删除或者以令人误导的方式修改本软件基于深度学习、虚拟现实等新技术新应用添加的标识。**

## 五、联系我们

我们的联系邮箱：[feedback@mail.marscode.cn](mailto:feedback@mail.marscode.cn)`} remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]} components={{
      h2: MyH2,
      
    }}/>
  );
};

export { Introtollm };

const Quickstart = () => {
  return (
    <ReactMarkdown children={`# 快速开始

本文介绍如何在 Visual Studio Code 和 JetBrains IDE 中安装并使用豆包 MarsCode 编程助手。

## 前置条件

已安装符合要求的 Visual Studio Code 或 JetBrains IDE，具体参考《[什么是豆包 MarsCode 编程助手](https://docs.marscode.cn/ai-extension/what-is-marscode-extension)》一文。若未安装，前往以下地址完成安装：

- [Visual Studio Code IDE](https://code.visualstudio.com/Download)
- [JetBrains IDE](https://www.jetbrains.com.cn/)

## 操作步骤

### Visual Studio Code

1. 打开 Visual Studio Code。
    
2. 点击左侧导航栏中的 **扩展** 按钮，进入插件市场。
    
3. 搜索 “豆包”、“MarsCode” 关键词，找到插件并安装。
    
4. 重启 Visual Studio Code。
    
5. 使用快捷键（Windows: Ctrl + U; macOS: Command + U）打开豆包 MarsCode 编程助手侧边对话框。
    
6. 点击 **登录** 按钮，登录你的账号。
    
7. 返回 IDE。 插件准备完成，你可以开始体验 AI 能力。
    
    ![图片](https://lf-cdn.marscode.com.cn/obj/eden-cn/ljhwz_lkpkbvsj/ljhwZthlaukjlkulzlp/doc/a028bba9213b4cd681f78d9e6933c3db~tplv-goo7wpa0wc-image.image)
    

### JetBrains

1. 打开 JetBrains IDE（以 IntelliJ IDEA 为例）。
2. 进入插件市场。
3. 搜索 “豆包”、“MarsCode” 关键词，找到插件并安装。
4. 重启 IDE。
5. 使用快捷键（Ctrl + U）打开豆包 MarsCode 编程助手的侧边对话框。
6. 点击 **登录** 按钮，登录你的账号。
7. 返回 IDE。 插件准备完成，你可以开始体验 AI 能力。`} remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]} components={{
      h2: MyH2,
      
    }}/>
  );
};

export { Quickstart };

