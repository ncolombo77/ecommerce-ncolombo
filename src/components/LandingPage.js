import '../App.css';
import { React } from 'react'

const LandingPage = () => {

  return (
    <>
    <h1>Bienvenido a <b>Tienda de Alfajores</b>, el sitio especializado en las delicias dulces argentinas.</h1>
    <main>
        <div className="cardMain">
            <img src="./img/landing/Alfajores_Landing_4.png" alt="" />
            <p>De raíces europeas y orígenes en la época colonial, el alfajor es un producto tradicional de la pastelería argentina. Cada región del país tiene sus alfajores característicos, generalmente definidos por las materias primas de las provincias.</p>
        </div>
        <div className="cardMain">
            <p>Con el correr del tiempo, el alfajor se volvió una golosina de consumo masivo consumido por personas de todas las edades.</p>
            <img src="./img/landing/Alfajores_Landing_1.png" alt="" />
        </div>
        <div className="cardMain">
            <img src="./img/landing/Alfajores_Landing_3.png" alt="" />
            <p>En nuestra tienda nos dedicamos a vender alfajores artesanales de los fabricantes regionales más destacados del país.</p>
        </div>
    </main>
    </>
  )
}

export default LandingPage