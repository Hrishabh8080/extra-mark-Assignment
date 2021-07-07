import './App.css';
import { Link } from 'react-router-dom'

import eplicon from './img/Group 40409.png'
import backIcon from './img/Group 214.png'
import peopleIcon from './img/Group 31180.png'
import scoreIcon from './img/Group 31257.png'
import prizeIcon from './img/Group 41104.png'
import videoIcon from './img/video.png'
import crickerIcon from './img/Group 31220.png'
import cricketnumIcon from './img/Group 31237.png'
import { useState } from 'react';
function App() {

  // const [videoPopup, setVideoPopup] = useState(true);



  return (
    <main className="main">

      <section className="ml"></section>
      <section className="mr">
        <div className='mrh'></div>
        <div className="mrmc">
          <div>
            <header className="mrmch">
              <div className='mrmchl'>
                <img className='mrmch_img' src={eplicon} alt="" />
                <strong className='mrmch_t1'>EPL</strong>
              </div>
              <div className='mrmchr'>
                <img className='mrmchr_img' src={backIcon} alt="" />
                <small className='mrmchr_t1'>Back</small>
              </div>
            </header>
            <section className="mrmcb">
              <div className="mrmcbl">
                <div className="mrmcblt">
                  <div className="mrmcbltt small">
                    <div className="mrmcbltt1 ">
                      <p>About EPL</p>
                      <br />
                      <img src={peopleIcon} width="160px" alt="" />
                      <img className="mrmcbltt1_img " src={videoIcon} alt="" />
                      <p>Let's Take A Tour</p>
                      <br />
                      <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo?</small>
                    </div>
                    <div className="mrmcbltt2 ">
                      <small className='medium' >EPL is designed by experts. This will test your preparedness, peer ranking and get real time performance analytics.</small>
                      <br />
                      <br />
                      <small>
                        <ul>
                          <li>Attempt the Extramarks Premier League and have fun attempting cricket related questions.</li>
                          <li>Get your global rank and score instantly. </li>
                        </ul>
                      </small>
                    </div>
                  </div>
                  <div className="mrmcbltb">
                    <div className="mrmcbltbl">
                      <div>
                        <p className='medium'>Screenboard</p>
                        <p className='small'>Rank 5</p>
                      </div>
                      <img src={scoreIcon} alt="" />
                      <Link to='/scoreboard'>
                        <button className='mrmcbltbl_btn'>View Now</button>
                      </Link>
                    </div>
                    <div className="mrmcbltbr">
                      <p className='medium'>Prizes</p>
                      <img src={prizeIcon} alt="" /> <br />
                      <Link to='/prize'>
                        <button className='mrmcbltbl_btn'>View Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mrmcbr">
                <img className="mrmcbr_img1" src={crickerIcon} alt="" />
                <p className='small' style={{ color: 'black' }}>Step to win exiting prize</p>
                <img className="mrmcbr_img2" src={cricketnumIcon} alt="" />
                <p className="mrmcbr_text1 ">Starts In: 01  18   55   31 </p>
                <button >Lets Play</button>
                <p className="mrmcbr_text2 ">Play Quiz Previous Questions</p>
              </div>
            </section>
          </div>
        </div>
        <div className="mrb">
        </div>
      </section>
    </main>
  );
}

export default App;
