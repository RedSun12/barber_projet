import { Outlet } from 'react-router-dom';
import Navbar from './widgets/Navbar/Navbar';

export default function Root() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '70px' }}>
        <Outlet />
      </div>
    </>
  );
}
