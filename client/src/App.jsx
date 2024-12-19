import './App.css'
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />}/>
          <Route path='/login' element={<div>Login Page</div>} />
        </Route>
      </Routes>

    </>
  )
}

export default App
