
import Image from '../images/pngwing.com.png'

const Home = () => {
    return (
        <div className='home'>
            <h1>Bienvenido a Happy Cake</h1>
            <div>
                <p>El lugar de los pasteles felices</p>
                <img src= { Image } alt='Inicio' />
            </div>
        </div>
    )
}

export default Home;