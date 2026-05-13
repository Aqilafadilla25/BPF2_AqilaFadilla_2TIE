import "./assets/tailwind.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import VisitorLayout from './layouts/VisitorLayout';
import VisitorPage from './Pages/Visitor/VisitorLandingPage';

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

import MainLayout from "../src/layouts/MainLayout";
import AuthLayout from "../src/layouts/AuthLayout";
import Loading from "../src/components/Loading";

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* 1. ROUTE KHUSUS VISITOR (UTS) - DIPISAH AGAR BISA FULL SCREEN */}
        <Route path="/visitor" element={<VisitorLayout />}>
           <Route index element={<VisitorPage />} />
        </Route>

        {/* 2. ROUTE DASHBOARD (TAMPILAN LAMA) - TETAP AMAN */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
        </Route>

        {/* 3. ROUTE AUTH (LOGIN/REGISTER) - TETAP AMAN */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* 4. ERROR PAGE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
