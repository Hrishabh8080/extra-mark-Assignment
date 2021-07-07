import React from 'react'
import { Link } from 'react-router-dom'
import eplicon from './img/Group 40409.png'
import backIcon from './img/Group 214.png'
import menIcon from './img/men icon.png'
import menIcon1 from './img/men 3.png'
import MedalIcon from './img/4_Medal Icon.png'

function prize() {
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
                                <strong className='mrmch_t1'>Prize</strong>
                            </div>
                            <div className='mrmchr'>
                                <Link to='/'>
                                    <img className='mrmchr_img' src={backIcon} alt="" />
                                </Link>
                                <small className='mrmchr_t1'>Back</small>
                            </div>
                        </header>
                        <section className="srmcb">
                            <header className='prmcbh'>
                                <p>Prize (Topper)</p>
                                <p>When</p>
                                <p>No. of Award</p>
                            </header>




                            <div className="prmcbb">
                            </div>
                            <div className="prmcbb">
                                <div>
                                    <img src={MedalIcon} alt="" />
                                    <div><p>Aditya Jha</p></div>
                                </div>

                                <p>After Final</p>
                                <p>  1 </p>
                            </div>
                            <div className="prmcbb">
                                <div>
                                    <img src={MedalIcon} alt="" />
                                    <div><p>Aditya Jha</p></div>
                                </div>

                                <p>After Final</p>
                                <p>  1 </p>
                            </div>
                            <div className="prmcbb">
                                <div>
                                    <img src={MedalIcon} alt="" />
                                    <div><p>Aditya Jha</p></div>
                                </div>

                                <p>After Final</p>
                                <p>  1 </p>
                            </div>
                            <div className="prmcbb">
                                <div>
                                    <img src={MedalIcon} alt="" />
                                    <div><p>Aditya Jha</p></div>
                                </div>
                                <p>After Final</p>
                                <p>  2 </p>
                            </div>
                            <div className="prmcbb">
                                <div>
                                    <img src={MedalIcon} alt="" />
                                    <div><p>Aditya Jha</p></div>
                                </div>
                                <p>After Final</p>
                                <p>  3 </p>
                            </div>
                            <div className="prmcbb">
                                <div>
                                    <img src={MedalIcon} alt="" />
                                    <div><p>Aditya Jha</p></div>
                                </div>
                                <p>After Final</p>
                                <p>  4 </p>
                            </div>
                            <div className="prmcbb">
                                <div>
                                    <img src={MedalIcon} alt="" />
                                    <div><p>Aditya Jha</p></div>
                                </div>
                                <p>After Final</p>
                                <p> 5   </p>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="mrb">
                </div>
            </section>
        </main>
    )
}

export default prize
