import './hero.css'
import CountdownTimer from '../CountDownTimer/Countdown';

export const Hero = () => {
  return (
    <div className='hero'>
      <div className='left'>
        <h1>Ready to test <br></br> your <b>hacking</b> <br></br> skills ?</h1>
        <span><b>Prove yourself during our CTF <br></br> competition !</b></span>
      </div>
      <div className='right'>
        <h1><b>The Cameroon National Hacking Days </b></h1>
        <span>From MAy 14 to May 15</span>
        <div class="announcement">
            <h2>The competition is on ! Be the ultimate winner.</h2>
            <p>In the town of Yaounde, Palais de Congrés</p>
            <div>
              <button className='registerButtonBodyPage'>Register</button>
              {/* <h1>Countdown Timer</h1> */}
              {/* <CountdownTimer/> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;