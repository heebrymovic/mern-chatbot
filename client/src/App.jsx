import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Home, Login, Register, NotFound, Chat } from './pages';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-right"
        containerStyle={{ margin: '10px' }}
        gutter={10}
        toastOptions={{
          duration: 5000,
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px'
            /* background: 'var(--color-main--0)',
            color: 'var(--color-white)'*/
          },
          success: {
            duration: 3000
          },
          error: {
            duration: 3000
          }
        }}
      />
    </>
  );
}

export default App;
