import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import ResetLayout from "./layouts/ResetLayout";

const SignIn = lazy(() => import("./pages/auth/SignIn"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const CodeVerification = lazy(() => import("./pages/auth/CodeVerification"));
const CreateStore = lazy(() => import("./pages/store-steps/CreateStore"));

import PagePreloader from "./components/ui/loading/PagePreloader";
import MainLayout from "./layouts/MainLayout";
import CreateProduct from "./pages/product/CreateProduct";
import Products from "./pages/product/Products";
import Categories from "./pages/category/Categories";
import CategoryDetails from "./pages/category/CategoryDetails";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PagePreloader />}>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/signin" element={<SignIn />} />
          </Route>
          <Route path="/reset" element={<ResetLayout />}>
            <Route path="/reset/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/reset/reset-password/:token"
              element={<ResetPassword />}
            />
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route path="/store">
              <Route
                path="/store/verify-email"
                element={<CodeVerification />}
              />
              <Route path="/store/create-store" element={<CreateStore />} />
            </Route>
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/create-product"
              element={<CreateProduct />}
            />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:id" element={<CategoryDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
