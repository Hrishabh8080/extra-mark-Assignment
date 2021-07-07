import React from 'react'

import {Link} from 'react-router-dom'
import eplicon from './img/Group 40409.png'
import backIcon from './img/Group 214.png'
import menIcon from './img/men icon.png'
import menIcon1 from './img/men 3.png'
import MedalIcon from './img/4_Medal Icon.png'

function Scoreboard() {
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
                                <strong className='mrmch_t1'>Scoreboard</strong>
                            </div>
                            <div className='mrmchr'>
                                <Link to='/'>
                                    <img className='mrmchr_img' src={backIcon} alt="" />
                                </Link>
                                    <small className='mrmchr_t1'>Back</small>
                            </div>
                        </header>
                        <section className="srmcb">
                            <header className='srmcbh'>
                                <img src={menIcon} alt="" />
                                <p>Your Runs - 50   |   Your Rank - 6</p>
                            </header>


                            <div className="srmcbb">
                                <div>
                                    <img src={MedalIcon} alt="" />
                                    <img src={menIcon1} alt="" />
                                    <div><p>Aditya Jha</p><p>10 Run</p></div>
                                </div>
                                <p> Rank 1 </p>
                            </div>
                            <div className="srmcbb">
                                <div>
                                    <img src={MedalIcon} alt="" />
                                    <img src={menIcon1} alt="" />
                                    <div><p>Aditya Jha</p><p>10 Run</p></div>
                                </div>
                                <p> Rank 2 </p>
                            </div>
                            <div className="srmcbb">
                                <div>
                                    <img src={MedalIcon} alt="" />
                                    <img src={menIcon1} alt="" />
                                    <div><p>Aditya Jha</p><p>10 Run</p></div>
                                </div>
                                <p> Rank 3 </p>
                            </div>
                            <div className="srmcbb">
                                <div>
                                    <img src={MedalIcon} alt="" />
                                    <img src={menIcon1} alt="" />
                                    <div><p>Aditya Jha</p><p>10 Run</p></div>
                                </div>
                                <p> Rank 4 </p>
                            </div>
                            <div className="srmcbb">
                                <div>
                                    <img src={MedalIcon} alt="" />
                                    <img src={menIcon1} alt="" />
                                    <div><p>Aditya Jha</p><p>10 Run</p></div>
                                </div>
                                <p> Rank 5   </p>
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

export default Scoreboard
