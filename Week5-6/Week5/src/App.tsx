import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDashboard from "./pages/ProductDashboard";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProductDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// src/
// │
// ├── types/
// │   └── Product.ts
// │
// ├── pages/
// │   └── ProductDashboard.tsx
// │
// ├── components/
// │   ├── SearchBar.tsx
// │   ├── StatsCards.tsx
// │   ├── ProductGrid.tsx
// │   └── ProductCard.tsx
// │
// ├── services/
// │   └── productService.ts
// │
// └── App.tsx