import React from 'react';
import Helmet from 'react-helmet'
import Layout from '../components/layout'





const test = () => (
    
    <Layout>
        <Helmet>
            <title>Test - Forty by HTML5 UP</title>
            <meta name="description" content="Test Page" />
        </Helmet>

        <div id="main">
            <section id="banner" className="style2">
                <div className="inner">
                    <header className="major">
                        <h1>The web of tomorrow needs IPFS today</h1>
                    </header>
            <div className="content">
                <p>A peer-to-peer hypermedia protocol to make the web faster, safer, and more open.</p>
            </div>
                </div>
             </section> 
                    <section id="two" className="spotlights">
                        <section>
                        <div className="col-4"><br></br><br></br><br></br><span className="image fit"><img src="https://ipfs.io/images/ipfs-illustration-http.svg" alt="" /></span></div>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>HTTP is inefficient and expensive</h3>
                                    </header>
                                    <p>HTTP downloads a file from a single computer at a time, instead of getting pieces 
                                        from multiple computers simultaneously. With video delivery, a P2P approach could 
                                        save 60% in bandwidth costs.IPFS makes it possible to distribute high volumes of 
                                        data with high efficiency. And zero duplication means savings in storage.</p>
                                        <ul className="actions"><li><a href="https://ipfs.io/" className="button" target="blank">Learn more</a></li>
                            </ul>
                                </div>
                            </div>
                        </section>
                        <section>
                        <div className="col-4"><br></br><br></br><br></br><span className="image fit"><img src="https://ipfs.io/images/ipfs-illustration-history.svg" alt="" /></span></div>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>Humanity's history is deleted daily</h3>
                                    </header>
                                    <p>The average lifespan of a web page is 100 days. Remember GeoCities? The web doesn't anymore. 
                                        It's not good enough for the primary medium of our era to be so fragile.IPFS keeps every version 
                                        of your files and makes it simple to set up resilient networks for mirroring of data.</p>
                                        <ul className="actions"><li><a href="https://ipfs.io/" className="button" target="blank">Learn more</a></li>
                            </ul>  
                                </div>
                            </div>
                        </section>
                        <section>
                        <div className="col-4"><br></br><br></br><br></br><span className="image fit"><img src="https://ipfs.io/images/ipfs-illustration-centralized.svg" alt="" /></span></div>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>The web's centralization limits opportunity</h3>
                                    </header>
                                    <p>The Internet has been one of the great equalizers in human history and a real accelerator of innovation. 
                                        But the increasing consolidation of control is a threat to that.IPFS remains true to the original vision 
                                        of the open and flat web, but delivers the technology which makes that vision a reality.</p>
                                        <ul className="actions"><li><a href="https://ipfs.io/" className="button" target="blank">Learn more</a></li>
                            </ul>
                                </div>
                            </div>
                        </section>
                        <section>
                        <div className="col-4"><br></br><br></br><br></br><span className="image fit"><img src="https://ipfs.io/images/ipfs-illustration-network.svg" alt="" /></span></div>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>Our apps are addicted to the backbone</h3>
                                    </header>
                                    <p>Developing world. Offline. Natural disasters. Intermittent connections. All trivial compared to interplanetary 
                                        networking. The networks we're using are so 20th Century. We can do better.IPFS powers the creation of diversely 
                                        resilient networks which enable persistent availability with or without Internet backbone connectivity.</p>
                                        <ul className="actions"><li><a href="https://ipfs.io/" className="button" target="blank">Learn more</a></li>
                            </ul>
                                </div>
                            </div>
                        </section>
                        <section>

                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>IPFS simply explained</h3>
                                <div className="col-4"><span className="image fit"> 
                                <iframe title="video" width="500" height="250" src="https://www.youtube.com/embed/5Uj6uR3fp-U">
                                </iframe></span></div>
                            </header>
                        </div>
                    </div>
                    <div className="content">
                        <p>IPFS wants to decentralize the web and make it "Interplanetary", But how does that work?
                            Let's take a look at how IPFS works, how it can solve issue's like censorship and if it 
                            would really work across multiple planets</p>
                    </div>
                </section>
                    </section>
                    
                </div>
                

    </Layout>
);

export default test;