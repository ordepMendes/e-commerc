import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import Theme from './Theme.ts'
import GlobalStyle from './GlobalStyle.ts'
import {RouterProvider} from 'react-router-dom';
import router from './router/router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </ThemeProvider>
 ,
)
