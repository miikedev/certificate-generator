import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Certificate from "./pages/Certificate";
import Home from "./pages/Home";
import Root from "./pages/Root";
// You can do this:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="certificate" element={<Certificate />} />
    </Route>
  )
);
function App() {
  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App
