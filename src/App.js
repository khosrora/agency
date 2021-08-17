import { lazy, Suspense } from "react"
import { GlobalStyle } from "./assets/css/GlobalStyles"

const Home = lazy(() => import("./pages/Home"))
const Header = lazy(() => import("./components/Header/Header"))
const Footer = lazy(() => import("./components/Footer/Footer"))
const ScrollToTop = lazy(() => import("./components/ScrollToTop/ScrollToTop"))


function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalStyle />
        <Header />
        <Home />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </>
  );
}

export default App;
