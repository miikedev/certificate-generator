import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Certificate from "./pages/Certificate";
import Home from "./pages/Home";
import Root from "./pages/Root";
import ViewPdf from "./pages/ViewPdf";
import Err from "./pages/Err";
// You can do this:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Err />} path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="certificate" element={<Certificate />} />
      <Route path="certificate/view" element={<ViewPdf />} />
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
