import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Detalle from "./pages/Detalle"
import Pagina404 from "./pages/404"
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/detalle/:name" element={<Detalle />} />
              <Route path="*" element={<Pagina404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
