import {Box, useColorModeValue} from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor.jsx";

function App() {
    const bgColor = useColorModeValue("#eeeeee", "#303136")

    return (
        <Box minH="100vh" bg={bgColor} px={6} py={6}>
            <CodeEditor/>
        </Box>
    );
}

export default App
