import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  { useState, useEffect } from 'react';
import { SidebarWithBurgerMenu } from "./pages/SidebarWithBurgerMenu/SidebarWithBurgerMenu";
import Crop from "./pages/Crop/Crop";
import Home from "./pages/Home";
import MyOrder from "./pages/MyOrder/MyOrder";
import { Nav } from "./pages/Nav/Nav";
import "./App.css";
import MyCart from "./pages/MyCart/MyCart";
import PrivacyPolicy from "./pages/privacyPolicy/privacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import AboutUs from "./pages/aboutUs/aboutUs";
import PaytabCallback from "./pages/paymentResult/PaytabCallback";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PaytabCallbackWrapper() {
  const query = useQuery();
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    const data = {
      acquirerMessage: query.get('acquirerMessage'),
      acquirerRRN: query.get('acquirerRRN'),
      cartId: query.get('cartId'),
      customerEmail: query.get('customerEmail'),
      respCode: query.get('respCode'),
      respMessage: query.get('respMessage'),
      respStatus: query.get('respStatus'),
      signature: query.get('signature'),
      token: query.get('token'),
      tranRef: query.get('tranRef')
    };
    setPaymentData(data);
  }, [query]);

  return <PaytabCallback paymentData={paymentData} />;
}
function App() {
  return (
    <>
      <Router>
        {/* <div className='absolute'> <SidebarWithBurgerMenu /></div> */}

        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Crop" element={<Crop />} />
          <Route path="/MyOrder" element={<MyOrder />} />
          <Route path="/MyCart" element={<MyCart />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/termsAndConditions" element={<TermsAndConditions />} />
          <Route path="/aboutUs" element={<AboutUs />} />

          {/* <Route path="/MyCartDemo/:cartId" component={PaytabCallback} /> */}

          <Route path="/MyCartDemo/:cartId" element={<PaytabCallbackWrapper />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
