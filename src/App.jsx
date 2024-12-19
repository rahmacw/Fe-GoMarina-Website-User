import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Halaman Pengguna
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Product from "./pages/Product";
import SignIn from "./pages/Signin";

// Halaman Admin
import Dashboard from "./pages/admin/Dashboard";
import Pesanan from "./pages/admin/Pesanan";
import Produk from "./pages/admin/Produk";
import KelolaKonten from "./pages/admin/KelolaKonten";
// import TambahKonten from "./pages/admin/TambahKonten";
import KelolaPembayaran from "./pages/admin/KelolaPembayaran";
// import DetailPembayaran from "./pages/admin/DetailPembayaran";
import LaporanPenjualan from "./pages/admin/LaporanPenjualan";

// Komponen Header dan Sidebar
import HeaderAdmin from "./components/admin/HeaderAdmin";
import Sidebar from "./components/admin/Sidebar";

// Layout untuk Admin
const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <HeaderAdmin /> {/* Menambahkan Header */}
      <div className="admin-content">
        <Sidebar /> {/* Menambahkan Sidebar */}
        <main className="admin-main">{children}</main> {/* Konten Utama */}
      </div>
    </div>
  );
};

const App = () => {
  // Status login (menggunakan localStorage untuk simulasi login)
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  return (
    <Routes>
      {/* Routes untuk Pengguna */}
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="product" element={<Product />} />
        <Route
          path="sign-in"
          element={<SignIn setIsAuthenticated={setIsAuthenticated} />}
        />
      </Route>

      {/* Routes untuk Admin */}
      <Route path="/dashboard">
        <Route
          index
          element={
            isAuthenticated ? (
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            ) : (
              <Navigate to="/sign-in" replace />
            )
          }
        />
        <Route
          path="produk"
          element={
            isAuthenticated ? (
              <AdminLayout>
                <Produk />
              </AdminLayout>
            ) : (
              <Navigate to="/sign-in" replace />
            )
          }
        />
        <Route
          path="pesanan"
          element={
            isAuthenticated ? (
              <AdminLayout>
                <Pesanan />
              </AdminLayout>
            ) : (
              <Navigate to="/sign-in" replace />
            )
          }
        />
        <Route
          path="kelolakonten"
          element={
            isAuthenticated ? (
              <AdminLayout>
                <KelolaKonten />
              </AdminLayout>
            ) : (
              <Navigate to="/sign-in" replace />
            )
          }
        />
        {/* <Route
          path="tambahkonten"
          element={
            isAuthenticated ? (
              <AdminLayout>
                <TambahKonten />
              </AdminLayout>
            ) : (
              <Navigate to="/sign-in" replace />
            )
          }
        /> */}
        <Route
          path="kelolapembayaran"
          element={
            isAuthenticated ? (
              <AdminLayout>
                <KelolaPembayaran />
              </AdminLayout>
            ) : (
              <Navigate to="/sign-in" replace />
            )
          }
        />
        {/* <Route
          path="detailpembayaran"
          element={
            isAuthenticated ? (
              <AdminLayout>
                <DetailPembayaran />
              </AdminLayout>
            ) : (
              <Navigate to="/sign-in" replace />
            )
          }
        /> */}
        <Route
          path="laporanpenjualan"
          element={
            isAuthenticated ? (
              <AdminLayout>
                <LaporanPenjualan />
              </AdminLayout>
            ) : (
              <Navigate to="/sign-in" replace />
            )
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
