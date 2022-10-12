import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Purchase } from './pages/Purchase'
import { Success } from './pages/Success'

export function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
