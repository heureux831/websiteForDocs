
import {
  Box,
  TextField,
  Flex,
  Link,
  Kbd,
  Button,
  IconButton,
  Section,
  // Switch,
} from "@radix-ui/themes";
const Nav = () => {
  return (
    <Section
      style={{
        height: "64px",
        width: "100%",
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        margin: "0 auto",
        borderBottom: "1px solid #1f1f1f",
        position: "fixed",
        zIndex: 1000,
        backgroundColor:"white",
      }} className="Nav"
    >
      <Flex direction="row" display="flex" justifyContent="space-between">
        <Box gap="4" direction="row">
          <img src="https://lf-cdn.marscode.com.cn/obj/eden-cn/ljhwz_lkpkbvsj/ljhwZthlaukjlkulzlp/doc/logo.svg"></img>
        </Box>
    
        <Box  direction="row" style={{width:"30px"}}>
       
        </Box>
        <Link href="#">文档</Link>
      </Flex>
      <Flex gap="4" direction="row">
        <TextField.Root placeholder="搜索文档" radius="medium">
          <img src="search.svg"></img>
          <TextField.Slot></TextField.Slot>
          <Kbd size="5">Ctrl + K</Kbd>
        </TextField.Root>
      
        <IconButton>
          <img src="logo.svg"></img>
        </IconButton>
      </Flex>
    </Section>
  );
};
export default Nav;
