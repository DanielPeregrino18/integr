import BtnNavbar from "./BtnNavbar";
import BtnPerfil from "./BtnPerfil";
import MotorBusqueda from "./MotorBusqueda";

export default function NavBar(){
    return(
        <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 h-14 flex flex-row justify-between pt-3">
            <span> Pathfinder</span>
            <div>
                <BtnNavbar text={"Inicio"} />
                <BtnNavbar text={"Universidades"} />
                <BtnNavbar text={"Carreras"} />
            </div>
            <MotorBusqueda />   
            <BtnPerfil />
        </div>
    );
}