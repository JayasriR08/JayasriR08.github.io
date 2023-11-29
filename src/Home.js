import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import Typewriter from 'typewriter-effect'
import './Home.css';
import pdf from 'C:/Users/zakir/OneDrive/Desktop/react/project/src/Resume .pdf';

export default function Home() {
    const handle = () => {
        window.open(pdf)
    }
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    return (
        <div className='main'>
            {/* <>-------------------------------------Home------------------------------------</> */}
            <div id='Home'>
                <div className="ts">
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        options={{
                            "fullScreen": {
                                "enable": false,
                                "zIndex": 0
                            },
                            "particles": {
                                "number": {
                                    "value": 60,
                                    "density": {
                                        "enable": false,
                                        "value_area": 800
                                    }
                                },
                                "color": {
                                    "value": "fff"
                                },
                                "shape": {
                                    "type": "star",
                                    "options": {
                                        "sides": 4
                                    }
                                },
                                "opacity": {
                                    "value": 0.8,
                                    "random": false,
                                    "anim": {
                                        "enable": false,
                                        "speed": 1,
                                        "opacity_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "size": {
                                    "value": 4,
                                    "random": false,
                                    "anim": {
                                        "enable": false,
                                        "speed": 40,
                                        "size_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "rotate": {
                                    "value": 0,
                                    "random": true,
                                    "direction": "anti-clockwise",
                                    "animation": {
                                        "enable": true,
                                        "speed": 5,
                                        "sync": false
                                    }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "distance": 600,
                                    "color": "000",
                                    "opacity": 0.4,
                                    "width": 2
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 2,
                                    "direction": "none",
                                    "random": false,
                                    "straight": false,
                                    "out_mode": "out",
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                    }
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": ["grab"]
                                    },
                                    "onclick": {
                                        "enable": false,
                                        "mode": "bubble"
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "grab": {
                                        "distance": 400,
                                        "line_linked": {
                                            "opacity": 1
                                        }
                                    },
                                    "bubble": {
                                        "distance": 400,
                                        "size": 40,
                                        "duration": 2,
                                        "opacity": 8,
                                        "speed": 3
                                    },
                                    "repulse": {
                                        "distance": 200
                                    },
                                    "push": {
                                        "particles_nb": 4
                                    },
                                    "remove": {
                                        "particles_nb": 2
                                    }
                                }
                            },
                            "retina_detect": true,
                            "background": {
                                "color": "#005c63",
                                // "image":"",
                                // "position": "50% 50%",
                                // "repeat": "no-repeat",
                                // "size": "cover",
                                // "height": "400"
                            }
                        }}>

                    </Particles>
                    <div class="text">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Developer")
                                    .pauseFor(0)
                                    .deleteAll()
                                    .typeString("Jayasri Ravi")
                                    .deleteAll()
                                    .start()
                            }}
                            options={{ loop: true }}
                        />
                    </div>
                    <div className='icon1'>
                        <a href='https://www.linkedin.com/in/jayasri-ravi-ab568626a/' target='_blank'><img src='icons-linkedin.png' alt='linkedin' className='icons1' style={{ width: 43 }}></img></a>
                        <a href='https://github.com/JayasriR08' target='_blank'><img src='icons-github.png' alt='github' className='icons1' style={{ width: 45 }}></img></a>
                    </div>
                </div>
            </div>
            {/* <>--------------------------------------About-----------------------------------</> */}
            <div id='About'>
                <div>
                    <div className='div1'>
                        <h1>WHAT I DO</h1>
                        <p style={{ marginLeft: 45, lineHeight: 1.4, width: 1000 }}>
                            A Front-End Developer with entry-level experience specializing
                            in web development, user interface design, HTML, and ReactJS.
                            As a Web Developer I design and create various websites.And as
                            UI/UX Designer I create many designs for Web Applications and
                            I create the beauty of the site.
                        </p>
                    </div>

                    <div className='div2'>
                        <div className='box1'>
                            <img src='icons-notes.png' alt='box1' className='i1' style={{ width: 60 }}></img>
                            <h3>Working Hard</h3>
                            <p className='p1'>Always believe in hard-work in my profession</p>
                        </div>
                        <div className='box1'>
                            <img src='uiux.png' alt='Ui' className='i1' style={{ width: 57 }}></img>
                            <h3>UI Design</h3>
                            <p className='p1'>Love to do UI design for new product</p>
                        </div>
                        <div className='box1'>
                            <img src='icons-world.png' alt='World' className='i1'></img>
                            <h3>Web Design</h3>
                            <p className='p1'>Passionate about Web Design from start</p>
                        </div>
                        <div className='box1'>
                            <img src='icons-settings.png' alt='Settings' className='i1'></img>
                            <h3>Web Development</h3>
                            <p className='p1'>Created all types of modern web development </p>
                        </div>
                    </div>
                </div>

                <div className='div03'>
                    <div className='div3'>
                        <h1 className='h01'>Hello! This is Jayasri</h1>
                    </div>
                    <div className='div4'>
                        <p>I’m looking to work as a web developer. I’m a very driven and
                            motivated individual who believes that each day should be challenging
                            and rewarding. I enjoy building interactive web apps. If you are a
                            business seeking a web presence or an employer looking to hire, you
                            can get in touch with me I design and build digital products with
                            simple and beautiful code. I specialize in custom web theme development
                            and love what I do. I'm quietly confident, naturally curious, and
                            perpetually working on improving my chops one design problem at a time.
                        </p>
                        <div className='d0'>
                            <button type='button' className='b1' onClick={handle}>See Resume</button>
                            <a href='#Contact' className='a1'>Hire Me</a>
                        </div>

                    </div>
                    <div className='d1'>
                        <div className='box2'>
                            <img src='icon-Notes.png' alt='Notes' className='i3'></img>
                            <h3>0021</h3>
                            <p>Web Design Completed</p>
                        </div>
                        <div className='box2'>
                            <img src='Ui.png' alt='Ui' className='i3'></img>
                            <h3>0040</h3>
                            <p>UI Design Done</p>
                        </div>
                        <div className='box2'>
                            <img src='Thunder.png' alt='Thunder' className='i3'></img>
                            <h3>0015</h3>
                            <p>Website Created</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <>------------------------------------Skill--------------------------------------</> */}
            <div id='Skill'>
                <div className='div1'>
                    <h1>My Skill</h1>
                    <p> I value simple content structure, clean design patterns,
                        and thoughtful interactions.</p>
                </div>
                <div className='div06'>
                    <div className='div6'>
                        <p>UI involves planning and iterating a site's structure
                            and layout. Once the proper information architecture is in
                            place, I design the visual layer to create a beautiful
                            user experience. Front End Development is building out the
                            visual components of a website. Using HTML, CSS, and
                            Javascript, I build fast, interactive websites. This also
                            may include an apis, or other integrations. The work
                            that I am most interested in is 0-1 work (helping you get
                            your idea into the world).</p>
                    </div>
                    <div>
                        <ul className='ul2'>
                            <li><p>HTML / CSS - 75%</p></li>
                            <div className='box'></div>
                            <li><p>Javascript - 75%</p></li>
                            <div className='box'></div>
                            <li><p>React JS - 75%</p></li>
                            <div className='box'></div>
                            <li><p>Bootstrap - 70%</p></li>
                            <div className='box'></div>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <>---------------------------------Educational-----------------------------------</> */}
            <div id='Education'>
                <div className='div05'>
                    <div className='div5'>
                        <h1 className='h01'>Educational Story</h1>
                        <p>I like to code things from scratch, and enjoy bringing
                            ideas to life in the browser.</p>
                    </div>
                    <div className='div7'>
                        <div className='d2'>
                            <h3>School</h3>
                            <p>2011-2018</p>
                            <p style={{ margin: 10 }}>Velammal Matriculation Higher Secondary School.</p>
                        </div>
                        <div className='d2'>
                            <h3>Graduation</h3>
                            <p>2018-2022</p>
                            <p>Panimalar Institute of Technology.</p>
                        </div>
                        <div className='d2'>
                            <h3>Training</h3>
                            <p>2023-2023</p>
                            <p style={{ margin: 15 }}>Course in Front end development from Fita Academy.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <>--------------------------------------Service-----------------------------------</> */}
            <div id='Service'>
                <div className='div1'>
                    <h1>Service List</h1>
                    <p>I always want to make things that make a difference.
                    </p>
                </div>
                <div className='div8'>
                    <div className='sd1'>
                        <img src='design.png' alt="Design" className='i2'></img>
                        <img src='icons-notes.png' alt='box1' className='i3' >
                        </img>
                        <h3>Design + Development</h3>
                        <p className='p2'>
                            Clean, modern designs - optimized for performance,
                            search engines, and converting users to customers.
                        </p>
                    </div>
                    <div className='sd1'>
                        <img src='ecommerce.png' alt='ecommerce' className='i2'></img>
                        <img src='icons-cart.png' alt='box2' className='i3'></img>
                        <h3>eCommerce</h3>
                        <p className='p2'>
                            Integration of eCommerce platforms, payment gateways,
                            custom product templates, and more.
                        </p>
                    </div>
                    <div className='sd1'>
                        <img src='Analytics.png' alt="Analytics" className='i2'></img>
                        <img src='icons-palette.png' alt='box3' ></img>
                        <h3>Analytics</h3>
                        <p className='p2'>
                            Get insights into who is browsing your site so that
                            you can make smarter business decisions.
                        </p>
                    </div>
                </div>
                <div className='div8'>
                    <div className='sd1'>
                        <img src='Mobile.png' alt=" Mobile" className='i2'></img>
                        <img src='icons-computer.png' alt='box4' style={{ width: '55' }}>
                        </img>
                        <h3>Mobile-friendly</h3>
                        <p className='p2'>
                            A responsive design makes your website accessible to
                            all users, regardless of their device.
                        </p>
                    </div>
                    <div className='sd1'>
                        <img src='Website.png' alt="Website" className='i2'></img>
                        <img src='icons-search.png' alt='box5' style={{ width: '55' }}></img>
                        <h3>Website Rank</h3>
                        <p className='p2'>
                            Looking to improve your page performance, SEO, or user
                            experience? Request a free site audit.
                        </p>
                    </div>
                    <div className='sd1'>
                        <img src='Content.png' alt="Content" className='i2'></img>
                        <img src='icons-folder.png' alt='box6' style={{ width: '55' }}></img>
                        <h3>Content Management</h3>
                        <p className='p2'>
                            Custom theme and plugin development. Easily update
                            site content with knowledge of powerful code.
                        </p>
                    </div>
                </div>
            </div>
            {/* <>-------------------------------------Contact------------------------------------</> */}
            <div id='Contact'>
                <div className='contact'>
                    <div className='div5'>
                        <h1>Contact  Me</h1>
                        <p>I always want to make things that make a difference.
                        </p>
                    </div>

                    <div className='div9'>
                        <div className='d3'>
                            <img src='location.png' alt='location'></img>
                            <h1>Address</h1>
                            <p>Chennai,Tamil Nadu, India</p>
                        </div>
                        <div className='d3'>
                            <img src='gmail.png' alt='gmail'></img>
                            <h1>Email</h1>
                            <a href='mailto:jayasriravi460@gmail.com' target='_blank' style={{ color: "black" }}>jayasriravi460@gmail.com</a>
                        </div>
                        <div className='d3'>
                            <img src='phone.png' alt='phone'></img>
                            <h1>Phone</h1>
                            <p>+91 9176024301</p>
                        </div>
                        <div className='d3'>
                            <img src='computer.png' alt='computer' style={{ width: 50 }}></img>
                            <h1>Portfolio</h1>
                            <a href='https://github.com/JayasriR08' target='_blank' style={{ color: "black" }}>https://github.com/JayasriR08</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id='#map'>
                <iframe
                    title="google-maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8292.447362678015!2d80.19942328994526!3d13.139728250910004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52649228ab4d03%3A0xd8950dc8b153a65f!2sVinayakapuram%2C%20Chennai%2C%20Tamil%20Nadu%20600099!5e0!3m2!1sen!2sin!4v1700718088762!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}
