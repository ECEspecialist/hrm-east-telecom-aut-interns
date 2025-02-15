import { Outlet } from 'react-router-dom';
import Header from '../../Components/SidebarHeader/Header';
import SidebarAdmin from '../../Components/SidebarHeader/SidebarAdmin';
const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <SidebarAdmin/>
      <div className="main-container">
        <Header/>
        <Outlet/>
      </div>
      
    </div>
  );
}
export default AdminDashboard;