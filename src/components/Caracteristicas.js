import logo from "../imgs/utchlog.jpg";

export default function Caracteristicas(){

    return (
        <div className="flex flex-row">
            <div className="basis 1/2 w-full h-64 flex justify-center">
                <img src={logo} className="h-64"></img>
            </div>
            <div className="border-4 border-sky-800 basis 1/2 w-full">
                    <h1 className="font-bold text-center">Caracteristicas</h1>
                    <p className="p-5">
                        La universidad tecnologica de chihuahua se destaca por su enfoque en la formacion tecnologica
                        y la vinculacion con la industria, Ofrece programas academicos alineados con las necesidades
                        del sector productivo, promoviendo la exelencia academica y la insercion laboral de sus 
                        egresados. Ademas, cuenta con infraestructura moderna y docentes especializados.
                    </p>
            </div>
        </div>
    );
}