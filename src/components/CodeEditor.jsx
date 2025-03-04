import {Box, useColorModeValue} from "@chakra-ui/react";
import {DiffEditor} from "@monaco-editor/react";
import {useRef} from "react";
import ClearTextButton from "./ClearTextButton.jsx";

const CodeEditor = () => {
    const editorRef = useRef();
    const bgColor = useColorModeValue("vs-light", "vs-dark")

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.getOriginalEditor().focus();
    }

    return (
        <Box height="93vh" display="flex" flexDirection="column">
            <DiffEditor
                theme={bgColor}
                onMount={ onMount }
                options={{
                    originalEditable: true,
                }}
            />
            <ClearTextButton editorRef={editorRef}/>
        </Box>
    )
}
export default CodeEditor