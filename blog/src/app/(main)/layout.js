import NavBar from "../../shared/navbar/Nav.jsx";
import Footer from "../../shared/footer/Footer.jsx";

export default function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className="px-10 min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}