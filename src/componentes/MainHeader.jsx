import '../pages/home/home.css'
import { Link } from 'react-router-dom'
import KellyLogo from '../images/header_right.jpg'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#FreeFireDay</h4>
          <h1>Juega Con Los Mejores y Gana Diamantes</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cum facilis labore id molestias, accusamus aliquid culpa consequuntur enim dolorum. Velit commodi aspernatur veniam blanditiis ullam eaque facilis aperiam nobis!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos sequi mollitia voluptate voluptates? Ipsa, iure. Tenetur et quis id explicabo numquam nisi a iusto repudiandae laudantium, minima velit architecto ullam!
          </p>
          <Link to='/proximos-torneos' className='btn lg'  > Participar </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-square">

          </div>
          <div className="main__header-image">
            <img src={KellyLogo}  alt='kelly' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader