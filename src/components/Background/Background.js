import './background.css'
import image2 from '../../assets/image2.jpg'
import ParticlesComponent from '../particles';

export const Background = () => {
  return (
    <div>
        <img src={image2} className='background' alt="" />
        <ParticlesComponent id="particles" />
    </div>
  )
}

export default Background
