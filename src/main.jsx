import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes } from 'react-router'
import { Route } from 'react-router'
import { ProductDetail } from './components/store/ProductDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />

          <Route path='/store'>
            <Route index element={<App />} />
            <Route path=':id' element={<ProductDetail />} />
          </Route>

        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
