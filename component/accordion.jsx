import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./styles.css";
import { Link } from "react-router-dom";
import { Box } from "@radix-ui/themes";


const AccordionDemo = () => (
  <Accordion.Root
    className="AccordionRoot"
    type="multiple"
    defaultValue="item-1"
    collapsibl="false"
  >
    <Accordion.Item className="AccordionItem" value="item-5">
      <AccordionTrigger className="AccordionTrigger">入门</AccordionTrigger>
      <div className="AccordionContentText">
      <AccordionContent>
        <Link to="/introductiontomarscode">
          <Box size="2" trim="both" className="ContentItem">
           什么是豆包MarsCode编程助手
          </Box>
        </Link>
        </AccordionContent>
       
        <AccordionContent className = "AccordionContent">
        <Link to="/introductiontomarscode">
          <Box size="2" trim="both"className="ContentItem">
            名词解释
          </Box>
        </Link>
      </AccordionContent>
      <AccordionContent className = "AccordionContent">
        <Link to="/introductiontomarscode">
          <Box size="2" trim="both"className="ContentItem">
            控制台
          </Box>
        </Link>
      </AccordionContent>
      <AccordionContent className = "AccordionContent">
        <Link to="/introductiontomarscode">
          <Box size="2" trim="both"className="ContentItem">
            用户界面
          </Box>
        </Link>
      </AccordionContent>
      <AccordionContent className = "AccordionContent"><Link to="/introductiontomarscode"className="ContentItem">
          <Box size="2" trim="both">
            主题
          </Box>
        </Link>
        </AccordionContent><AccordionContent className = "AccordionContent"><Link to="/introductiontomarscode"className="ContentItem">
          <Box size="2" trim="both">
            快捷键
          </Box>
        </Link>
        </AccordionContent><AccordionContent className = "AccordionContent"><Link to="/introductiontomarscode"className="ContentItem">
          <Box size="2" trim="both">
            模板
          </Box>
        </Link>
        </AccordionContent><AccordionContent className = "AccordionContent"><Link to="/introductiontomarscode"className="ContentItem">
          <Box size="2" trim="both">
            插件市场
          </Box>
        </Link>
        </AccordionContent><AccordionContent className = "AccordionContent"><Link to="/introductiontomarscode"className="ContentItem">
          <Box size="2" trim="both">
           资源控制
          </Box>
        </Link>
        </AccordionContent>
        </div>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>快速开始</AccordionTrigger>
    
        <div className="AccordionContentText">
        <AccordionContent className = "AccordionContent">
          <Link to="/introductiontomarscode">
            <Box size="2" trim="both"className="ContentItem">
              使用模板开发项目
            </Box>
        </Link>
        
          </AccordionContent>
          <AccordionContent className = "AccordionContent">
          <Link to="/introductiontomarscode">
            <Box size="2" trim="both"className="ContentItem">
              使用github仓库开发项目
            </Box>
        </Link>
        
            </AccordionContent>
        </div>
      
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>AI能力</AccordionTrigger>
      <div className="AccordionContentText">
      <AccordionContent className = "AccordionContent">
        
          <Link to="/introductiontomarscode">
            <Box size="2" trim="both"className="ContentItem">
              AI对话视图
            </Box>
          </Link>
        
      </AccordionContent>
      <AccordionContent >
        
          <Link to="/introductiontomarscode">
            <Box size="2" trim="both"className="ContentItem">
              管理AI对话
            </Box>
          </Link>
        
        </AccordionContent> <AccordionContent >
        
        <Link to="/introductiontomarscode">
          <Box size="2" trim="both"className="ContentItem">
            使用AI能力
          </Box>
        </Link>
      
      </AccordionContent>
        </div>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="item-4">
      <AccordionTrigger>开发工具</AccordionTrigger>
      <div className="AccordionContentText">
      <AccordionContent className = "AccordionContent">
       
          <Link to="/introductiontomarscode">
            <Box size="2" trim="both"className="ContentItem">
              Web预览
            </Box>
          </Link>
      
      </AccordionContent>
      <AccordionContent className = "AccordionContent">
        
          <Link to="/introductiontomarscode">
            <Box size="2" trim="both"className="ContentItem">
              网络服务
            </Box>
          </Link>
        
        </AccordionContent>
        </div>
    </Accordion.Item>
  </Accordion.Root>
);


const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));
export default AccordionDemo;
