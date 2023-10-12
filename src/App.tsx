import { GlobalStateContextProvider } from './context/globalStateContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuDataContextProvider } from './context/menuDataContext';
import { GlobalVariablesContextProvider } from './context/globalVariablesContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SidebarCart from './components/SidebarCart/SidebarCart/SidebarCart';
import ScrollToTop from './helpers/ScrollToTop';
import {
  AboutUsPage,
  CheckoutPage,
  ContactUsPage,
  HomePage,
  MenuPage,
  NotFoundPage,
  OrderSuccessPage,
  SpecialOfferPage,
} from './pages';

const App: React.FC = () => {
  return (
    <>
      <MenuDataContextProvider>
        <GlobalVariablesContextProvider>
          <GlobalStateContextProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Header />
              <SidebarCart />
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/menu" element={<MenuPage />}></Route>
                <Route path="/special" element={<SpecialOfferPage />}></Route>
                <Route path="/about" element={<AboutUsPage />}></Route>
                <Route path="/contact" element={<ContactUsPage />}></Route>
                <Route path="/cart" element={<CheckoutPage />}></Route>
                <Route
                  path="/ordersuccess"
                  element={<OrderSuccessPage />}
                ></Route>
                <Route path="/*" element={<NotFoundPage />}></Route>
              </Routes>
              <Footer />
            </BrowserRouter>
          </GlobalStateContextProvider>
        </GlobalVariablesContextProvider>
      </MenuDataContextProvider>
    </>
  );
};

export default App;
