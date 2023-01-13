import React, { useEffect, useState } from 'react'
import LanguageWrapperComponent from './components/LanguageComponentWrapper'
import { Routes, Route } from 'react-router-dom'
import Language from './pages/Language'

const lang = {
  'hindi': google.elements.transliteration.LanguageCode.HINDI,
  'odia': google.elements.transliteration.LanguageCode.ORIYA,
  'gujarati': google.elements.transliteration.LanguageCode.GUJARATI,
  'tamil': google.elements.transliteration.LanguageCode.TAMIL,
  'telugu': google.elements.transliteration.LanguageCode.TELUGU,
  'marathi': google.elements.transliteration.LanguageCode.MARATHI,

}


const App = () => {
  const [quote, setQuote] = useState({})

  useEffect(() => {
    const quoteData = async () => {
      const response = await fetchQuote()
      setQuote(response)
    }
    quoteData()

  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<LanguageWrapperComponent />} />
        <Route path='odia' element={<Language code={lang.odia} />} />
        <Route path='hindi' element={<Language code={lang.hindi} />} />
        <Route path='gujarati' element={<Language code={lang.gujarati} />} />
        <Route path='tamil' element={<Language code={lang.tamil} />} />
        <Route path='telugu' element={<Language code={lang.telugu} />} />
        <Route path='marathi' element={<Language code={lang.marathi} />} />

      </Routes>
    </div>
  )
}

export default App

async function fetchQuote() {
  const res = await fetch('https://api.quotable.io/random')
  if (res.ok) {
    const data = await res.json()
    return data
  }
  else
    console.error('something went wrong!')
}