import React, { useEffect, useState } from 'react'
import LanguageWrapperComponent from './components/LanguageComponentWrapper'
import { Routes, Route } from 'react-router-dom'
import Language from './pages/Language'
import About from './pages/About'

const lang = {
  'hindi': google.elements.transliteration.LanguageCode.HINDI,
  'odia': google.elements.transliteration.LanguageCode.ORIYA,
  'urdu': google.elements.transliteration.LanguageCode.URDU,
  'assamese': google.elements.transliteration.LanguageCode.ASSAMESE,
  'bengali': google.elements.transliteration.LanguageCode.BENGALI,
  'kannada': google.elements.transliteration.LanguageCode.KANNADA,
  'malayalam': google.elements.transliteration.LanguageCode.MALAYALAM,
  'telugu': google.elements.transliteration.LanguageCode.TELUGU,
  'punjabi': google.elements.transliteration.LanguageCode.PUNJABI,

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
        <Route path='urdu' element={<Language code={lang.urdu} />} />
        <Route path='assamese' element={<Language code={lang.assamese} />} />
        <Route path='bengali' element={<Language code={lang.bengali} />} />
        <Route path='kannada' element={<Language code={lang.kannada} />} />
        <Route path='malayalam' element={<Language code={lang.malayalam} />} />
        <Route path='telugu' element={<Language code={lang.telugu} />} />
        <Route path='punjabi' element={<Language code={lang.punjabi} />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App

async function fetchQuote() {
  const quoteUrl = "https://quotable.io/quotes?maxLength=100"
  const res = await fetch(quoteUrl)
  if (res.ok) {
    const data = await res.json()
    return data
  }
  else
    console.error('something went wrong!')
}