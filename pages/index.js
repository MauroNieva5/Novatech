import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


const Navbar = () => <nav class="navbar navbar-expand-lg navbar-light w-100 border-5 border-bottom border-dark" style={{'position': 'fixed', 'backgroundColor' : '#ffffff'}}>
<a class="navbar-brand logoNavBar" href="#"><img src='/logo.png' style={{width: '100%', 'max-width' : '125px', 'margin-top' : '15px;'}}/></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link href="#Nosotros">
          <a class="nav-link text-dark">Nosotros</a>
        </Link>
      </li>
      <li class="nav-item">
        <Link href="#Soporte">
          <a class="nav-link text-dark">Soporte T.I</a>
        </Link>
      </li>
      <li class="nav-item">
        <Link href="#Desarrollo">
          <a class="nav-link text-dark">Desarrollo</a>
        </Link>
      </li>
      <li class="nav-item">
        <Link href="#Servicios">
          <a class="nav-link text-dark">Servicios en la Nube</a>
        </Link>
      </li>
      <li class="nav-item">
        <Link href="#Staff">
          <a class="nav-link text-dark">Staff Augmentation</a>
        </Link>
      </li>
      <li class="nav-item">
        <Link href="#Contactanos">
          <a class="nav-link text-dark">Contactanos</a>
        </Link>
      </li>
    </ul>
  </div>
</nav>

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div id="Nosotros" style={{'height':'800px'}}>
        <h1>Nosotros</h1>
      </div>
      <div id="Soporte" style={{'height':'800px'}}>
        <h1>Soporte T.I</h1>
      </div>
      <div id="Desarrollo" style={{'height':'800px'}}>
        <h1>Desarrollo</h1>
      </div>
      <div id="Servicios" style={{'height':'800px'}}>
        <h1>Servicios en la Nube</h1>
      </div>
      <div id="Staff" style={{'height':'800px'}}>
        <h1>Staff Augmentation</h1>
      </div>
      <div id="Contactanos" style={{'height':'800px'}}>
        <h1>Contactanos</h1>
      </div>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}


