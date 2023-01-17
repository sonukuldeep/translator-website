import React, { useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from '../styles/utility.module.css'
import KioskBoard from 'kioskboard';
import keys from '../components/keyboards/CustomKeys.js'

const Lang = ({ code }) => {
    const inputRef = useRef()
    const [langState, setLangState] = useState(true)
    const [virtualKeyboard, setVirtualKeyboard] = useState(false)
    const { pathname } = useLocation()
    const languageTitle = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)

    const triggerKey = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            setLangState(pre => !pre)
        }

        if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
            document.querySelector('#KioskBoard-VirtualKeyboard')?.classList.toggle('kioskboard-slide-remove')
            e.preventDefault()
        }
    }

    useEffect(() => {

        onLoad(code)
        if (inputRef.current && JSON.parse(localStorage.getItem('virtualKeyboard'))) {
            KioskBoard.run(inputRef.current, {
                language: "en",
                theme: "light",
                keysArrayOfObjects: keys.odia,
                allowRealKeyboard: true,
                allowMobileKeyboard: true,
            })
        }
        setVirtualKeyboard(JSON.parse(localStorage.getItem('virtualKeyboard')))

        const storedText = JSON.parse(localStorage.getItem('text'))
        if (storedText)
            inputRef.current.value = storedText
            localStorage.removeItem('text')
    }, [])

    const virtualKeyboardHandler = () => {
        const virtualKeyboardStatus = JSON.parse(localStorage.getItem('virtualKeyboard'))
        localStorage.setItem('virtualKeyboard', JSON.stringify(!virtualKeyboardStatus))
        localStorage.setItem('text',JSON.stringify(inputRef.current.value))
        window.location.reload(false);
    }

    return (
        <Box className={styles.backgroundGradient} sx={{ marginTop: '20px' }}>
            <Box align='center' sx={{ margin: '20px 0', color: '#fff' }}>
                <Typography sx={{ fontSize: 'x-large' }} component='h2' gutterBottom={true}>Type {languageTitle} text in English and see the magic</Typography>
                <Typography component='span' gutterBottom={true} sx={langState ? { backgroundColor: 'primary.main', padding: '5px', borderRadius: '4px' } : { backgroundColor: 'gray', padding: '5px', borderRadius: '4px' }}>Type in Hindi (Press Ctrl+d to toggle between English and Hindi)</Typography>
                <Typography sx={{ marginTop: '7px' }}>Press Ctrl+m to toggle virtual keyboard temporerily</Typography>
            </Box>
            <Box align='center' sx={{ margin: '20px 0' }}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={copyToClipboard}>Copy to clipboard</Button>
                    <Button onClick={downloadClipboard}>Download</Button>
                    <Button onClick={virtualKeyboardHandler}>Virtual keyboard {virtualKeyboard ? 'Enabled' : 'Disabled'}</Button>
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
                    ref={inputRef}
                />
            </Box>
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