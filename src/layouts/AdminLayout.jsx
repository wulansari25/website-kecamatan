import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Admin/Sidebar';
import Topbar from '../components/Admin/Topbar';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-[#F4F7F6] font-sans overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden relative">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;