import React from 'react'
import { DasboardPilihTema} from '../../componentsApp'
import { ThemeProvider } from '../../context'

const PilihTemaPage = () => {
  return (
    <ThemeProvider>
      <DasboardPilihTema/>
    </ThemeProvider>
  )
}

export default PilihTemaPage