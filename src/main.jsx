import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// No mobile existe a StickyMobileBar (~72px) cobrindo o fundo da viewport.
// Ajustamos o ScrollTrigger globalmente para disparar as animações mais cedo,
// antes dos elementos ficarem cobertos pela barra inferior.
const isMobile = window.innerWidth < 768

ScrollTrigger.defaults({
  start: isMobile ? 'top 72%' : 'top 85%',
})

// Recalcula o ScrollTrigger sempre que a janela for redimensionada
// (ex: rotação de tela no celular)
window.addEventListener('resize', () => {
  const mobile = window.innerWidth < 768
  ScrollTrigger.defaults({
    start: mobile ? 'top 72%' : 'top 85%',
  })
  ScrollTrigger.refresh()
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
