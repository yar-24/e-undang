import React from 'react'
import {DashboardUser} from '../../componentsApp'
import { ThemeProvider } from '../../context'

const DashboardPage = () => {

  return (
    <ThemeProvider>
      <DashboardUser/>
    </ThemeProvider>
  )
}

export default DashboardPage