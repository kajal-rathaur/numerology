import { React } from "react";
import videos from "../utils/videos/video1.mp4"
import pic1 from "../utils/images/8.png"
import Grid from '@mui/material/Unstable_Grid2';
import Card from "../components/Card";

const Home = () => {
    return (
        <div style={{ marginTop: '68.5px', alignContent: 'space-between', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', height: "400px", paddingTop: "119px", paddingBottom: "30px" }}>
                <div style={{ width: '50', textAlign: 'left' }}>
                    <h1 style={{ color: '#a18b5c'}}>Welcome to ASTRO-NUMERO</h1>
                    <p style={{color:'#fdfdfda1'}}>Unveiling Your Numbers, Unlocking Your Potential</p>
                    <p style={{color:'#fdfdfda1'}}> Explore the world of numerology and discover the hidden meanings behind your numbers.
                        Whether you're a seasoned numerology enthusiast or just beginning to explore this ancient wisdom,
                        ASTRO-NUMERO is your one-stop shop for unlocking the hidden potential within your numbers.
                        Ready to embark on your numerology adventure?
                        Explore our website and discover the power of numbers in your life!
                    </p>
                </div>
                <div style={{ width: '50%', padding: '0px 20px', opacity: '0.5' }}>
                    <img src={pic1} alt="Logo" style={{ height: '400px', width: '100%' }} />
                </div>
            </div>
            <div>
                <Grid container rowSpacing={3} columnSpacing={3} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item xs={3} >
                        <Card title="Home" description1="The Lo Shu Grid, a 3x3 grid with numbers 1-9, is a cornerstone of Chinese numerology. Each number placement holds meaning, and rows/columns add up to a lucky number (often 15). It's used to create personal numerology charts for insights into personality and potential." description2="" number="Loshu Grid" />
                    </Grid>
                    <Grid item xs={3}>
                        <Card title="Home" description1="In numerology, your Name Number is calculated by adding the values assigned to each letter in your full name. This number is said to influence your personality, goals, and potential challenges. It's like a unique energetic signature, unveiling your inner compass, offering insights into your life path." description2="" number="Name Number" />
                    </Grid>
                    <Grid item xs={3}>
                        <Card title="Home" description1="Mulank, also known as Moolank, is your birth number in Vedic numerology (Indian system). It's calculated by adding the digits of your birthdate. It's believed to influence your personality, strengths, and potential life path. There are different interpretations for each Mulank number (1-9)." description2="" number="Mulank" />
                    </Grid>
                    <Grid item xs={3}>
                        <Card title="Home" description1="Bhagyank, in Indian numerology, is your destiny number calculated by adding the digits of your birthdate (day, month, year). It's believed to influence your luck, potential, and overall life path. Knowing your Bhagyank offers insights into areas where you might experience ease or challenges." description2="" number="Bhagyank" />
                    </Grid>
                </Grid>

            </div>
            <div style={{ color: '#a18b5c', paddingTop: '49px' }}>
                <h1 >ABOUT ASTRO-NUMERO</h1>
                <p style={{color: '#fdfdfda1'}}>Passionate community dedicated to empowering individuals through the ancient wisdom of numerology.</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', height: '400px', paddingTop: '20px', paddingBottom: '20px' }}>
                <div style={{ width: '50%' }}>
                    <img src={pic1} alt="Logo" style={{ height: '370px', width: '100%' }} />
                </div>
                <div style={{ width: '50%', color: '#a18b5c', textAlign: "left", padding: "0px 24px" }}>
                    <h2>Unveiling the Universe Within</h2>
                    <p style={{color: '#fdfdfda1'}}> We envision a world where numerology is embraced as a valuable tool for self-discovery,
                        personal growth, and navigating life's path.
                        To illuminate the profound connection between numbers and the human experience.
                        To provide a welcoming and supportive space for individuals to explore their numerological journeys.
                        To equip you with the knowledge and tools to decipher the language of numbers and unlock your full potential.
                    </p>
                    <p style={{color: '#fdfdfda1'}}>
                        Whether you're a seasoned numerologist or simply curious to explore the world of numbers,
                        ASTRO-NUMERO welcomes you with open arms. We invite you to explore our website,
                        delve into our resources, and embark on your own journey of numerological discovery.
                    </p>
                </div>

            </div>
            <div style={{ width: '100%', height: '50px', textAlign: 'center', color: 'white', backgroundColor: '#0302045e', display: 'flex', justifyContent: 'center' }}><p>copyright 2024 @ASTRO-NUMERO</p></div>
        </div>
    )
}

export default Home;