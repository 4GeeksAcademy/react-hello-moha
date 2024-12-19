import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';
import '../styles/style.css'

import Cat from '../img/Cat.jpg';
import Mutterhorn from '../img/Mutterhorn.jpg';
import Music from '../img/Music.jpg';

function Home() {
  return (
    <div>
      <Navbar links={['Home', 'About', 'Services']} />
      <Jumbotron title="Bienvenido a nuestra página" subtitle="Explora nuestros servicios" buttonText="Comienza ahora" />
      
      <div className="container mt-5">
  <div className="row g-3"> {/* g-3 para espaciado entre columnas */}
    <div className="col-md-4">
      <Card title="Cat" image={Cat} text="O fortuna..." link="#" alt="Imagen de un gato" />
    </div>
    <div className="col-md-4">
      <Card title="Mutterhorn" image={Mutterhorn} text="Nunc obdurat..." link="#" alt="Imagen del Monte Matterhorn" />
    </div>
    <div className="col-md-4">
      <Card title="Music" image={Music} text="Sors immanis..." link="#" alt="Imagen relacionada con música" />
    </div>
  </div>
</div>

      
      <Footer text="© 2024 Mi Empresa" links={[{ name: 'Facebook', href: '#' }, { name: 'Twitter', href: '#' }]} />
    </div>
  );
}

export default Home;

