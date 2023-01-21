import React, { useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from '../styles/utility.module.css';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import LanguageLayout from '../components/keyboards/CustomKeys.js'


const Lang = ({ code }) => {
    const [langState, setLangState] = useState(true)
    const { pathname } = useLocation()
    const languageTitle = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)
    const inputRef = useRef();

    const triggerKey = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            setLangState(pre => !pre)
        }

    }

    useEffect(() => {
        onLoad(code)
    }, [])

    // keyboard
    const [input, setInput] = useState("");
    const [layout, setLayout] = useState("default");
    const keyboard = useRef();
    
    const onChange = input => {

        const modifiedInput = inputRef.current.value + input.substr(-1)

        setInput(modifiedInput);

    };

    const handleShift = () => {
        const newLayoutName = layout === "default" ? "shift" : "default";
        setLayout(newLayoutName);
    };

    const onKeyPress = button => {
        // console.log("Button pressed", button);

        /**
         * If you want to handle the shift and caps lock buttons
         */
        if (button === "{shift}" || button === "{lock}") handleShift();
    };

    const onChangeInput = event => {
        // let input = inputRef.current.value;
        let input = event.target.value;
        setInput(input);
        keyboard.current.setInput(input);

    };

    return (
        <Box className={styles.backgroundGradient} sx={{ marginTop: '20px' }}>
            <Box align='center' sx={{ margin: '20px 0', color: '#fff' }}>
                <Typography sx={{ fontSize: 'x-large' }} component='h2' gutterBottom={true}>Type {languageTitle} text in English</Typography>
                <Typography component='span' gutterBottom={true} sx={langState ? { backgroundColor: 'primary.main', padding: '5px', borderRadius: '4px' } : { backgroundColor: 'gray', padding: '5px', borderRadius: '4px' }}>Type normally (Press Ctrl+d to toggle between English and {languageTitle})</Typography>
            </Box>
            <Box align='center' sx={{ margin: '20px 0' }}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={copyToClipboard}>Copy to clipboard</Button>
                    <Button onClick={downloadClipboard}>Download</Button>
                </ButtonGroup>
            </Box>
            <Box id="Wrapper" align='center'>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Start writing normally in your chosen language"
                    id="transliterateTextarea"
                    style={{ minWidth: 350, width: '50vw' }}
                    onKeyDownCapture={triggerKey}
                    value={input}
                    onChange={onChangeInput}
                    ref={inputRef}
                // onBlur={lostFocus}
                />
            </Box>
            <Keyboard
                keyboardRef={r => (keyboard.current = r)}
                layoutName={layout}
                onChange={onChange}
                onKeyPress={onKeyPress}
                layout={LanguageLayout[languageTitle.toLocaleLowerCase()]}
            />
        </Box>
    )
}

export default Lang

google.load("elements", "1", {
    packages: "transliteration"
});
function onLoad(targetLanguage) {
    var options = {
        sourceLanguage:
            google.elements.transliteration.LanguageCode.ENGLISH,
        destinationLanguage:
            targetLanguage,
        shortcutKey: 'ctrl+d',
        transliterationEnabled: true
    };
    var control =
        new google.elements.transliteration.TransliterationControl(options);
    control.makeTransliteratable(['transliterateTextarea']);
}

function copyToClipboard() {
    // Get the text field
    const textBox = document.getElementById("transliterateTextarea");

    // Select the text field
    textBox.select();
    textBox.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(textBox.value);

    // Alert the copied text
    alert("Text is copied to clipboard");
}

function downloadClipboard() {
    // Get the text field
    const textBox = document.getElementById("transliterateTextarea");

    const filename = 'lang.com-' + Math.random().toString(36).substring(2, 7) + '.txt'

    const content = textBox.value

    if (content) {
        downloadFile(filename, content)
    }
}

function downloadFile(filename, content) {
    // It works on all HTML5 Ready browsers as it uses the download attribute of the <a> element:
    const element = document.createElement('a');

    //A blob is a data type that can store binary data
    // “type” is a MIME type
    // It can have a different value, based on a file you want to save
    const blob = new Blob([content], { type: 'plain/text' });
    //createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
    const fileUrl = URL.createObjectURL(blob);

    //setAttribute() Sets the value of an attribute on the specified element.
    element.setAttribute('href', fileUrl); //file location
    element.setAttribute('download', filename); // file name
    element.style.display = 'none';

    //use appendChild() method to move an element from one element to another
    document.body.appendChild(element);
    element.click();

    //The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
    document.body.removeChild(element);
};