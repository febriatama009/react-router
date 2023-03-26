import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
// import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import OrderSummary from "./pages/OrderSummary";
import NoMatchUrls from "./pages/NoMatchUrls";
import Products from "./pages/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import AdminDetails from "./components/AdminDetails";
import Profile from "./pages/Profile";
import { AuthProvider } from "./components/auth";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar /> <br /> <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback="Load Data...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="/order-summary" element={<OrderSummary />} />

          <Route path="/products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>

          <Route path="/user" element={<UsersList />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<AdminDetails />} />
          </Route>

          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NoMatchUrls />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
