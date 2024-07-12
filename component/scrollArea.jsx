import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import "./styles.css";
import { Text, Flex, Box } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import AccordionDemo from "./accordion";
function ScrollAreaDemo() {
  return (

    <ScrollArea.Root
      className="ScrollAreaRoot"
      style={{ "--scrollbar-width": "thin" }}
    >
      <ScrollArea.Viewport className="ScrollAreaViewport">
        <Flex p="2" pr="0" direction="column" gap="4" >
        <div className="OUTAccordionContent">
          <Link to="/">
            <Box size="2" trim="both" className="ContentItem" >
              豆包MarsCode介绍
            </Box>
          </Link></div>
          <div className="OUTAccordionContent">
          <Box size="2"className="ContentItem" >豆包MarsCode编程助手</Box></div>
          <Box size="2" className="ContentList" >
          <div className="OUTAccordionContent">
            <Link to="/introduction" className="Item">
              <Box size="2"  p="2">
                什么是豆包MarsCode编程助手
              </Box>
              </Link>
              </div>
            <div className="OUTAccordionContent">
            <Link to="/quickstart">
              <Box size="2" trim="both" className="ContentItem" p="2">
                快速开始
              </Box>
              </Link></div>
              <div className="OUTAccordionContent">
            <Link to="/quickstart">
              <Box size="2" trim="both" className="ContentItem" p="2">
                AI能力
              </Box>
              </Link></div>
              <div className="OUTAccordionContent">
            <Link to="/quickstart">
              <Box size="2" trim="both" className="ContentItem" p="2">
                快捷键
              </Box>
            </Link></div>
              <div className="OUTAccordionContent">
            <Link to="/quickstart">
              <Box size="2" trim="both" className="ContentItem" p="2">
                帮助
              </Box>
            </Link></div>
          </Box>

          <Box size="2" trim="both" className="ContentItem">
            豆包MarsCode IDE
          </Box>
          <Box size="2" trim="both" className="ContentList">
            <AccordionDemo />
          </Box>
          
              <Link to="/introtollm">
              <Box size="2" trim="both" className="ContentItem">
                  关于云雀大模型
                </Box>
              </Link>
            
        </Flex>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar type="always" orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      
  );
}
export default ScrollAreaDemo;
