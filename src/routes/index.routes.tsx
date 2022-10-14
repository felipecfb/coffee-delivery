import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { OrderConfirm } from '../pages/OrderConfirm'
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirm" element={<OrderConfirm />} />
      </Routes>
    </BrowserRouter>
  )
}
