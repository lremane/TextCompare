import {Box, Button} from "@chakra-ui/react";

const ClearTextButton = ({editorRef}) => {
    const clearText = () => {
        const editor = editorRef.current;
        editor.getOriginalEditor().setValue("");
        editor.getModifiedEditor().setValue("");
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" pt="4">
            <Button
                bg="red.500"
                onClick={clearText}>Clear
            </Button>
        </Box>

    )
}
export default ClearTextButton;