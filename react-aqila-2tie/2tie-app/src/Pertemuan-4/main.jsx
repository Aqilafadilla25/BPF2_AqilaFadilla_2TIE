import { createRoot } from "react-dom/client";
import "./tailwind.css";
import TailwiwindCSS  from "./TailwindCss";
import UserForm from "./UserForm";
import HitungGajiForm from "./HitungGajiForm";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <TailwiwindCSS/>
            <UserForm/>
            <HitungGajiForm/>

        </div>
    );