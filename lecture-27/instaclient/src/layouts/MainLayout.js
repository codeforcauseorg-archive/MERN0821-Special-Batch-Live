import LabelBottomNavigation from "../components/LabelBottomNavigation";
import "./mainlayout.css";
import ButtonAppBar from "../components/ButtonAppBar";

export default function MainLayout({ children }) {
  return (
    <div className="mainLayout">
      <ButtonAppBar />
      <div
        className="base"
        style={{
            height: "100%",
            overflow: "auto",
          }}
      >
        {children}
      </div>
      <LabelBottomNavigation />
    </div>
  );
}
