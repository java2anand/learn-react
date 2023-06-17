import { createElement } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header"

const RestrauntCard = () => {
  return (
    <div className="card">
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mpae4jb0klsngpyk0y0d" />
      <div className="card-content">
        <h2>Burger King</h2>
        <h3>Burgers, Americana</h3>
        <h4>4.2 stars</h4>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="restauran-list">
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
    </div>
  )
}

const Footer = () => <h4>Footer</h4>;

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
