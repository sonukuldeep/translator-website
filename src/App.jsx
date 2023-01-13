import React from 'react'
import LanguageWrapperComponent from './components/LanguageComponentWrapper'
import { Routes, Route } from 'react-router-dom'
import Language from './pages/Language'
import data from './assets/mockData.js'

const lang = {
  'hindi': google.elements.transliteration.LanguageCode.HINDI,
  'odia': google.elements.transliteration.LanguageCode.ORIYA,
  'gujarati': google.elements.transliteration.LanguageCode.GUJARATI,
  'tamil': google.elements.transliteration.LanguageCode.TAMIL,
  'telugu': google.elements.transliteration.LanguageCode.TELUGU,
  'marathi': google.elements.transliteration.LanguageCode.MARATHI,

}


const App = () => {
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

function filterData(languageName) {
  const filter = data.filter(item => (item.lang.toLowerCase() === languageName))
  if (filter.length === 0) {
    console.log(`check input ${languageName} not found in data`)
    return null
  }
  return filter[0]
}

