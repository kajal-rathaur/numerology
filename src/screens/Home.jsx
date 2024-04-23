import { React } from "react";
import videos from "../utils/videos/video1.mp4"
import pic1 from "../utils/images/Designer.jpeg"
import Grid from '@mui/material/Unstable_Grid2';
import Card from "../components/Card";

const Home = () => {
    return (
        <div style={{ marginTop: '68.5px', alignContent: 'space-between', textAlign: 'center' }}>
            {/* <div style={{ color: '#a18b5c', }}>

            </div> */}
            {/* <video width="750" height="500" autoplay muted >
                <source src={videos} type="video/mp4" />
            </video> */}
            <div style={{ display: 'flex', justifyContent: 'space-evenly', height: '600px', paddingTop: '200px', paddingBottom: '200px' }}>

                <div style={{ width: '50%', color: '#a18b5c', }}>
                    <h1>Welcome to ASTRO-NUMERO</h1>
                    <h1>Unveiling Your Numbers, Unlocking Your Potential</h1>
                    <p> Explore the world of numerology and discover the hidden meanings behind your numbers.</p>
                </div>
                <div style={{ width: '50%' }}>
                    <img src={pic1} alt="Logo" style={{ height: '400px', width: '100%' }} />
                    {/* <ul style={{ color: 'white' }}>
                        <li>Gain deeper self-awareness through the power of numerology.</li>
                        <li>Understand your strengths, challenges, and life's purpose through the lens of numbers.</li>
                    </ul> */}
                </div>
            </div>
            <div>
                <Grid container rowSpacing={3} columnSpacing={3} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item xs={3} >
                        <Card title="{lllll}" description1="The Lo Shu Grid is used in numerology, and divination to understand life aspects, balance energy, and predict fortune." description2="" number="Loshu Grid" />
                    </Grid>
                    <Grid item xs={3}>
                        <Card title="{lllll}" description1="Numerology concept derived by assigning numbers to each letter in your name and then adding them together." description2="" number="Name Number" />
                    </Grid>
                    <Grid item xs={3}>
                        <Card title="{lllll}" description1="Numerology focuses on the meaning and vibrations of numbers, offer insights into your strengths, weaknesses, and opportunities." description2="" number="Numbers" />
                    </Grid>
                </Grid>

            </div>
            <div>
                <p>4th</p>
            </div>
        </div>
    )
}

export default Home;