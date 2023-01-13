import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const language = {
    'hindi': google.elements.transliteration.LanguageCode.HINDI,
    'odia': google.elements.transliteration.LanguageCode.ORIYA
}


const Odia = () => {
    const inputRef = useRef()
    const [langState, setLangState] = useState(true)

    useEffect(() => {
        onLoad(language.odia)

    }, [])

    const triggerKey = (e) => {
        // e.preventDefault()
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            console.log('ctrl+g was pressed')
            setLangState(pre => !pre)
        }
    }

    return (
        <Box>
            <Typography align='center' component='h2' gutterBottom={true}>How to Convert Hindi Text into English Using JavaScript?</Typography>
            <Typography align='center' component='h3' gutterBottom={true} style={langState ? { background: 'green', color: '#fff' } : { background: 'gray', color: '#fff' }}>Type in Hindi (Press Ctrl+d to toggle between English and Hindi)</Typography>
            <Box id="Wrapper" align='center'>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Start writing normally in your preferred language"
                    id="transliterateTextarea"
                    style={{ minWidth: 350, width: '50vw' }}
                    onKeyDownCapture={triggerKey}
                    ref={inputRef}
                />
            </Box>
            <ButtonGroup align='center' variant="contained" aria-label="outlined primary button group">
                <Button onClick={copyToClipboard}>Copy to clipboard</Button>
                <Button onClick={downloadClipboard}>Download</Button>
            </ButtonGroup>
        </Box>
    )
}

export default Odia

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

        const filename = 'lang.com-' + Math.random().toString(36).substring(2,7) + '.txt'

        const content = textBox.value

        if(content) {
            downloadFile(filename,content)
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