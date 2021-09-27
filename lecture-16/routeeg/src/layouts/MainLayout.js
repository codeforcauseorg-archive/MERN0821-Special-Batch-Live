import DenseAppBar from "../components/DenseAppBar";

export default function MainLayout({children}){

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            position: "relative"
        }}>
            <DenseAppBar/>
            {children}
        </div>
    )

}