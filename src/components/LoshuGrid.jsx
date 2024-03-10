import { React, useState, useEffect } from "react";
import '../App.css';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography } from "@mui/material";

const LoshuGrid = ({ dob }) => {
    const [dobData, setDobData] = useState({
        1:"",
        2:"",
        3:"",
        4:"",
        5:"",
        6:"",
        7:"",
        8:"",
        9:"",
    });
    const [num1, setnum1] = useState();
    const [num2, setnum2] = useState();
    const [num3, setnum3] = useState();
    const [num4, setnum4] = useState();
    const [num5, setnum5] = useState();
    const [num6, setnum6] = useState();
    const [num7, setnum7] = useState();
    const [num8, setnum8] = useState();
    const [num9, setnum9] = useState();
    const [num0, setnum0] = useState();
    useEffect(() => {
        dobPlacer(dob.replaceAll("/", ""));
    }, [dob,dobData ]);
    const dobPlacer = (dobValue) => {
        setDobData(dobValue.split(''))
        dobValue.split('').forEach(item => {
            // if (item == 1) { setnum1(num1 + item); }
            // else if (item == 2) { setnum2(num2 + item); }
            // else if (item == 3) { setnum3(num3 + item); }
            // else if (item == 4) { setnum4(num4 + item); }
            // else if (item == 5) { setnum5(num5 + item); }
            // else if (item == 6) { setnum6(num6 + item); }
            // else if (item == 7) { setnum7(num7 + item); }
            // else if (item == 8) { setnum8(num8 + item); }
            // else if (item == 9) { setnum9(num9 + item); }
            // if (item == 1) { setDobData(dobData[1] + item); }
            // else if (item == 2) { setDobData(dobData[2] + item); }
            // else if (item == 3) { setDobData(dobData[3] + item); }
            // else if (item == 4) { setDobData(dobData[4] + item); }
            // else if (item == 5) { setDobData(dobData[5] + item); }
            // else if (item == 6) { setDobData(dobData[6] + item); }
            // else if (item == 7) { setDobData(dobData[7] + item); }
            // else if (item == 8) { setDobData(dobData[8] + item); }
            // else if (item == 9) { setDobData(dobData[9] + item); }
            setDobData(dobData => ({...dobData, ['1'] : item}))
        });

        // console.log(num0,num1,num2,num3,num4,num5,num6,num7,num8,num9)
        console.log('num1', num1);
        console.log('num2', num2);
        console.log('num3', num3);
        console.log('num4', num4);
        console.log('num5', num5);
        console.log('num6', num6);
        console.log('num7', num7);
        console.log('num8', num8);
        console.log('num9', num9);
        console.log('num0', num0);
        console.log('dobData', dobData);
    };

    return (
        <Box width={"300px"}>
            <Grid container>

                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid black"} borderLeft={"1px solid black"} borderBottom={"0px solid black"} borderRight={"0px solid black"} height={"100px"}>
                    <Typography variant="p" component="p">{dobData}</Typography>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid black"} borderLeft={"1px solid black"} borderBottom={"0px solid black"} borderRight={"0px solid black"} height={"100px"}>
                    <Typography variant="p" component="p">2</Typography>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid black"} borderLeft={"1px solid black"} borderBottom={"0px solid black"} borderRight={"1px solid black"} height={"100px"}>
                    <Typography variant="p" component="p">3</Typography>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid black"} borderLeft={"1px solid black"} borderBottom={"0px solid black"} borderRight={"0px solid black"} height={"100px"}>
                    <Typography variant="p" component="p">4</Typography>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid black"} borderLeft={"1px solid black"} borderBottom={"0px solid black"} borderRight={"0px solid black"} height={"100px"}>
                    <Typography variant="p" component="p">5</Typography>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid black"} borderLeft={"1px solid black"} borderBottom={"0px solid black"} borderRight={"1px solid black"} height={"100px"}>
                    <Typography variant="p" component="p">6</Typography>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid black"} borderLeft={"1px solid black"} borderBottom={"1px solid black"} borderRight={"0px solid black"} height={"100px"}>
                    <Typography variant="p" component="p">7</Typography>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid black"} borderLeft={"1px solid black"} borderBottom={"1px solid black"} borderRight={"0px solid black"} height={"100px"}>
                    <Typography variant="p" component="p">8</Typography>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid black"} borderLeft={"1px solid black"} borderBottom={"1px solid black"} borderRight={"1px solid black"} height={"100px"}>
                    <Typography variant="p" component="p">9</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LoshuGrid;