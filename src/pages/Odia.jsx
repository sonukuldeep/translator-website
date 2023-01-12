import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const language = {
    'hindi': google.elements.transliteration.LanguageCode.HINDI,
    'odia': google.elements.transliteration.LanguageCode.ORIYA
}


const Odia = () => {

    const keyRef = useRef()
    const [btnState, setBtnState] = useState(true)

    useEffect(() => {
        onLoad(language.odia)

    }, [])

    useEffect(() => {
        setBtnState(pre => !pre)
    }, [keyRef.current])

    const triggerKey = (e) => {
        e.preventDefault()

    }

    return (
        <Box>
            <Typography align='center' component='h2' gutterBottom={true}>How to Convert Hindi Text into English Using JavaScript?</Typography>
            <Typography align='center' component='h3' gutterBottom={true}>Type in Hindi (Press Ctrl+g to toggle between English and Hindi)</Typography>
            <button onClick={triggerKey} style={btnState ? { background: 'green', color: '#fff' } : { background: 'gray', color: '#fff' }}>Toggle</button>
            <Box id="Wrapper" align='center'>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Start writing normally in your preferred language"
                    id="transliterateTextarea"
                    style={{ minWidth: 350, width: '50vw' }}
                    ref={keyRef}
                />
            </Box>
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
        shortcutKey: 'ctrl+g',
        transliterationEnabled: true
    };
    var control =
        new google.elements.transliteration.TransliterationControl(options);
    control.makeTransliteratable(['transliterateTextarea']);
}