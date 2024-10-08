import lupa from "../magnifier.svg";

export default function MotorBusqueda(){

    return (
        <span className="w-64 flex flex-row h-7"> <img src={lupa} className="h-5 w-5" alt="logo" /><input type="text" className="rounded-lg border-2 border-black w-64"/></span>

    );
}