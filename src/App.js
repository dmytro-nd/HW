import logo from './logo.svg';
import './App.css';

const OurTile = ({count, statDesc}) =>
<div class="col">
  <div class="our-tile">
    <div class="numbers">
      <h3>
        {count}
      </h3>
    </div>
    <div class="tile-description">
      <h4>
        {statDesc}
      </h4>
    </div>
  </div>
</div>

const ApartmentCard = ({address="Random Street, Apt B453, New York", price=3500, bathrooms=2, bedrooms=2}) =>
<div class="app-tile">
  <div class="pic"></div>
  <div class="app-discription-group">
    <div class="app-disc-title">
      <a href="#">
        {address}
      </a>
    </div>
    <div class="app-disc">
      <div class="app-price">
          <h5>
              ${price}
          </h5>
      </div>
      <div class="app-disc-else">
        <div class="app-bath">
          <i class="icon-bath"></i>
          <div class="bath-count">
            <h5>{bathrooms} BA</h5>
          </div>
        </div>
        <div class="app-bedroom">
          <i class="icon-bed"></i>
          <div class="bed-count">
            <h5>{bedrooms} BD</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

const HiwTile = ({stepCount, stepDesc}) =>
<div class="hiw-tile">
  <h1 class="step-count">{stepCount}</h1>
  <div class="step-desc">
    <h1 class="step-desc-title-count">{stepCount}
    </h1>
    <h3 class="step-desc-title">{stepDesc}</h3>
    <p class="step-desc-fill">In this space market-facing, yet UI work flows , or bake it in. Red flag we need the day</p>
    <a href="#">{stepDesc}</a>
  </div>
</div>

const ServUnit = ({serveTitle}) =>
<div class="serv-unit">
  <h3 class="unit-title">{serveTitle}</h3>
  <p class="text-fill">In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence.</p>
</div>


const AgentsCard = ({imageSource="chrome-untrusted://new-tab-page/custom_background_image?url=chrome-untrusted%3A%2F%2Fnew-tab-page%2Fbackground.jpg%3Fts%3D1627324930", agentName="Mr. Luke Skywalker", facebookLink="facebook.com", twitterLink="twitter.com", dribleLink="drible.com"}) =>
<div class="agents-tile">
        <div class="pic">
          <img src="{imageSource}"></img>
        </div>
        <div class="a-tile-desc">
            <h3 class="agents-label">Agent</h3>
            <div class="a-info">
                <h3 class="a-name">{agentName}</h3>
                <ul class="sm-list">
                    <li>
                        <a href="{facebookLink}">
                            <i class="icon-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="{twitterLink}">
                            <i class="icon-tweeter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="{dribleLink}">
                            <i class="icon-dribbble"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

const VisualCont = ({picLink, tagID, location="Melbourne, Australia"}) => 
<div class="visual-content">
  <div class="pic">
    <img src={picLink}></img>
  </div>
  <div class="geo-tag" id={tagID}>
    <i class="icon-map-tag"></i>
    <a href="a">{location}</a>
  </div>
</div>

const AddBlock = ({picLink, tagID, location, btn}) =>
<div class="add-block">
  <VisualCont picLink={picLink} tagID={tagID} location={location}/>
  <div class="add-desc">
    <h3 class="add-title">Super Awesome Add</h3>
    <p class="text-fill">In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence.</p>
    <button id={btn} class="btn">Show Me More</button>
  </div>
</div>

const LiLink = ({linkHref="#", itemTitle}) =>
<li><a href={linkHref}>{itemTitle}</a></li>

const FootLinkList = ({children, linkLabel, titleName}) =>
<div class={linkLabel}>
  <h4 class={linkLabel}title>{titleName}</h4>
  <ul class={linkLabel}list>
    {children}
  </ul>
</div>

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <header class="header">
            <div class="conteiner">
                <div class="header-box">
                    <div class="header-logo">
                        <a href="#">
                            <img src="pics\luxestate.png" alt="pic"/>
                        </a>
                    </div>
                    <div class="header-nav">
                        <div class="header-log-in">
                            <ul class="login-list">
                                <li>
                                    <a href="#">Join Us</a>
                                </li>
                                <li>
                                    <a href="#" class="btn">Getting Started</a>
                                </li>
                            </ul>
                        </div>
                        <nav class="nav">
                            <input id="menu__toggle" type="checkbox" />
                            <label class="menu__btn" for="menu__toggle">
                                <span></span>
                            </label>
                            <ul class="nav-list">
                                <li><a class="menu__item" href="#">About</a></li>
                                <li><a class="menu__item" href="#">Appartments</a></li>
                                <li><a class="menu__item" href="#">How It Works</a></li>
                                <li><a class="menu__item" href="#">Agents</a></li>
                                <li><a class="menu__item" href="#">Contuct Us</a></li>
                                <li>
                                    <a id="join-us" class="btn menu__item" href="#">Join Us</a>
                                </li>
                                <li>
                                    <a href="#" class="btn menu__item">Getting Started</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>  
        </header> 
        <main class="main">
            <section class="section-banner">
                <div class="conteiner" id="banner-conteiner">
                    <div class="banner-wrap">
                        <i class="icon-scroll-down"></i>
                        <a href="#our" class="link-down">Scroll Down</a>
                        <div class="banner-form">
                            <h1 class="title">Find Your New Modern Appartnment</h1>
                            <form action="#">
                                <div class="form-group">
                                    <input type="search" placeholder="Search locations"/>
                                    <button class="btn" type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                        <div class="banner-description">
                            <ul class="contact-list">
                                <li>
                                    <i class="icon-phone"></i>
                                    <a href="tel:+0000000000">(000) 123-4567</a>
                                </li>
                                <li>
                                    <i class="icon-map-tag"></i>
                                    <a href="a">Melbourne, Australia</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-our" id="our">
                <div class="conteiner">
                    <div class="our-wrap">
                        <div class="our-description">
                            <h2 class="our-title">
                                Our’s Company Statistics
                            </h2>
                            <p class="text-fill">
                                In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence. 
                                <br/>
                                <br/>
                                We need to get all stakeholders up to speed and in the right place hard stop, or technologically savvy or pre launch. Pro-sumer software commitment to the cause offline this discussion and wiggle room blue sky. Beef up teams were able to drive adoption and awareness. Screw the pooch killing it. 
                            </p>
                        </div>
                        <div class="our-tiles row">
                          <OurTile count='748' statDesc='Appartments' />
                          <OurTile count='3854' statDesc='Clients' />
                          <OurTile count='24' statDesc='Employees' />
                          <OurTile count='14' statDesc='Awards' />
                        </div>
                    </div>
                </div>
            </section>
            <section class="afr">
                <div class="conteiner">
                    <h2 class="afr-title">More Then 500+ Appartments For Rent</h2>
                    <div class="appartment-tiles">
                      <ApartmentCard/>
                      <ApartmentCard/>
                      <ApartmentCard/>
                      <ApartmentCard/>
                      <ApartmentCard/>
                      <ApartmentCard/>
                    </div>
                    <div class="banner-form">
                        <form id="afr-form" action="#">
                            <div class="form-group">
                                <input id="afr-input" type="search" placeholder="Search locations"/>
                                <button class="btn" type="submit">Search</button>
                            </div>
                        </form>
                        <button id="vaa" class="btn">View All Appartments</button>
                    </div>
                </div>
            </section>
            <section class="hiw">
                <div class="conteiner">
                    <div class="hiw-desc">
                        <h2 class="hiw-title">How it works?</h2>
                        <p class="text-fill">In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. 
                        </p>
                    </div>
                    <div class="hiw-tiles-group">
                      <HiwTile stepCount="01" stepDesc="Find Location" />
                      <HiwTile stepCount="02" stepDesc="Find Appartment" />
                      <HiwTile stepCount="03" stepDesc="Make Contact" />
                    </div>
                </div>
            </section>
            <section class="services">
                <div class="conteiner">
                    <div class="serv-sec-title">
                        <h2 class="serv-title">Services</h2>
                        <p class="text-fill">In this space market-facing, yet UI work flows , or bake it in. Red flag we need a first agile at the end of the day.</p>
                    </div>
                    <div class="serv-content">
                      <div class="shift-back-filler"></div>
                      <div class="serv-unit-group">
                        <ServUnit serveTitle="Renting" />
                        <ServUnit serveTitle="Selling" />
                        <ServUnit serveTitle="Building" />
                      </div>
                    </div>
                </div>
            </section>
            <section class="moa">
                <div class="conteiner">
                    <div class="moa-title-group">
                        <h2 class="moa-title">Meet Our Agents</h2>
                        <p class="text-fill">In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day.</p>
                    </div>
                    <div class="agents-tile-group">
                      <AgentsCard/>
                      <AgentsCard/>
                      <AgentsCard/>
                    </div>
                </div>
            </section>
            <section class="add">
                <div class="conteiner">
                    <div class="add-block-group">
                      <AddBlock btn="disp-none"/>
                      <AddBlock tagID="geo-tag-2" btn="disp-none"/>
                      <AddBlock tagID="disp-none" />
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <div class="conteiner">
                <div class="footer-upper-block">
                    <div class="footer-title">
                        <h2 class="f-title-desc">luxestate<br/> Explore Real Estate</h2>
                    </div>
                    <div class="footer-subsc">
                        <div class="banner-form">
                            <form action="#">
                                <div class="form-group">
                                    <input type="search" placeholder="Subscribe To Our Newsletter"/>
                                    <button id="email-button" class="btn" type="submit">
                                        <i class="icon-scroll-down"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="footer-bttom-block">
                    <div class="arr">
                        <h3 class="f-bb-logo">luxestate</h3>
                        <p class="certification">© 2019 - luxestate,
                            All Right Reserved</p>
                    </div>
                    <div class="footer-links">
                      <FootLinkList linkLabel="f-l" titleName="LUXESTATE">
                        <LiLink itemTitle="Agents"/>
                        <LiLink itemTitle="Hunters"/>
                      </FootLinkList>
                      <FootLinkList linkLabel="f-c" titleName="COMPANY">
                        <LiLink itemTitle="About"/>
                        <LiLink itemTitle="FAQ"/>
                        <LiLink itemTitle="Contact"/>
                        <LiLink itemTitle="Social"/>
                      </FootLinkList>
                      <FootLinkList linkLabel="f-p" titleName="PRODUCT">
                        <LiLink itemTitle="Appartments"/>
                        <LiLink itemTitle="How It Works"/>
                        <LiLink itemTitle="Contact"/>
                        <LiLink itemTitle="Social"/>
                      </FootLinkList>
                      <FootLinkList linkLabel="f-s" titleName="SERVICES">
                        <LiLink itemTitle="Renting"/>
                        <LiLink itemTitle="Selling"/>
                        <LiLink itemTitle="Building"/>
                      </FootLinkList>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    </div>
  );
}

export default App;
