import utchImage from '../imgs/utch.jpg';
export default function Header() {
    const myStyle = {
     backgroundImage: `url(${utchImage})`,
    };
  
    return (
     <header className="bg-cover bg-center bg-no-repeat h-64 w-full overflow-hidden" style={myStyle}>
        <div className="container mx-auto h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white ">Universidad Tecnologica de Chihuahua</h1>
        </div>
      </header>
    );
  }