// import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { Suspense } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Tickets from './components/Tickets/Tickets';
const fetchData = async () => {
  const res = await fetch('tickets.json');
  return res.json();
};
const ticketsPromise = fetchData();
function App() {
  const [count, setCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  return (
    <>
      <Navbar></Navbar>
      <Banner count={count} resolvedCount={resolvedCount}></Banner>
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <Tickets
          ticketsPromise={ticketsPromise}
          setCount={setCount}
          setResolvedCount={setResolvedCount}
        ></Tickets>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
