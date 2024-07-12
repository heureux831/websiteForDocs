import './App.css'
import { Box, Flex, Text, Theme } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";
import "../component/styles.css";
import "@radix-ui/themes/styles.css";
import ScrollAreaDemo from "../component/scrollArea";
import Nav from "../component/Nav";
import {H2Component,H2DisplayComponent, H2Provider} from '../component/toc';


export default function App() {
  return (
    // <Router>
    <Theme appearance='light'>
      <main>
      
        {/* <Sidebar /> */}
        <Nav />
        <Flex maxHeight="600px">
          <Flex
            direction="column"
            className="home-content"
            width="22%"
            overflowY="auto"
            // align="left"
            style={{
              padding: "24px 0 24px 24px",
              marginTop: "30px",
              borderRight: "1px solid #efefef",
              height: "100%",
              maxHeight: "calc(100vh - 8px - var(--rp-nav-height))",
              overflow: "auto",
              position: "fixed",
            }}
          >
            <ScrollAreaDemo />
          </Flex>

          <Flex
            gap="4"
            direction="column"
            className="home-main"
            width="60%"
            height="100%"
            // overflow="auto"
            style={{
              padding: "48px 0 48px 48px",
              marginTop: "64px",
              height: "100%",
              // paddingTop:"6400px",
              borderTop:"60px",
              marginRight: "18%",
              marginLeft: "22%",
              borderRight: "1px solid #efefef",
              overflowY: "auto",
              // backgroundColor: "yellow",
              flexGrow: "1",
            }}
          >
            <H2Provider>
              
              <Outlet />
              
            <Flex
              gap="1"
              direction="column"
              className="home-toc"
              width="18%"
              style={{
                position: "fixed",
                // color: "red",
                // backgroundColor: "green",
                // display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px",
                height: "100%",
                // backgroundColor: "red",
                maxHeight: "calc(100vh - 8px - var(--rp-nav-height))",
                overflowY: "auto",
                margin: "0 auto",
                right: "0",
                
                borderBottom: "1px solid #1f1f1f",
              }}
            >
              {/* <Box width="64px" height="24px" >
                <Text color="black">本文档</Text>
              </Box>
              <Box width="64px" height="24px" >
                <Text color="black">2</Text>
              </Box>
              <Box width="64px" height="64px">
                <Text color="white">3</Text>
              </Box> */}
         
     
     {/* ... other components */}
     <H2DisplayComponent />
   

            </Flex></H2Provider>
          </Flex>
        </Flex>
      </main>
      </Theme>
    /* </Router> */
  );
}
