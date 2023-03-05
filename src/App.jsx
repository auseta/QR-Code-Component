import React from 'react';
import { motion } from 'framer-motion'
import QrContainer from './components/QrContainer/QrContainer'
import { GlobalStyles } from './styles/GlobalStyles';

function App() {

  return (
    <>
      <motion.div 
        className='App'
        initial={{ y: -600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <QrContainer />
      </motion.div>
      <GlobalStyles />
    </>
  )
}

export default App
