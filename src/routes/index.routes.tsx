import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layout/DefaultLayout'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { OrderConfirm } from '../pages/OrderConfirm'
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirm" element={<OrderConfirm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
