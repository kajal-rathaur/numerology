import { React, useState, useEffect } from "react";
import '../App.css';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography } from "@mui/material";

const LoshuGrid = ({ dob }) => {

    const [dobData, setDobData] = useState({
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
    });

    useEffect(() => {
        dobPlacer(dob.replaceAll("/", ""));
    }, [dob]);

    const dobPlacer = (dobValue) => {
        let a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", r = "";
        setDobData(dobValue.split(''))
        dobValue.split('').forEach(item => {
            if (item == 1) {
                a += item;
            } else if (item == 2) {
                b += item;
            } else if (item == 3) {
                c += item;
            } else if (item == 4) {
                d += item;
            } else if (item == 5) {
                e += item;
            } else if (item == 6) {
                f += item;
            } else if (item == 7) {
                g += item;
            } else if (item == 8) {
                h += item;
            } else if (item == 9) {
                i += item;
            }
        });

        setDobData({ ...dobData, 1: a, 2: b, 3: c, 4: d, 5: e, 6: f, 7: g, 8: h, 9: i });
    };

    return (
        <>
            <Box width={"300px"}
            sx={{
                border: '1px solid #a18b5c70', 
                boxShadow: '0px 3px 5px #a18b5c82',
              }}
            >
                <Grid container>
                    <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid #a18b5c70"} borderLeft={"1px solid #a18b5c70"} borderBottom={"0px solid #a18b5c70"} borderRight={"0px solid #a18b5c70"} height={"100px"}>
                        <Typography variant="p" component="p" sx={{color: "#a18b5c", fontWeight: "bold", fontFamily: "math", }}>{dobData['4']}</Typography>
                    </Grid>
                    <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid #a18b5c70"} borderLeft={"1px solid #a18b5c70"} borderBottom={"0px solid #a18b5c70"} borderRight={"0px solid #a18b5c70"} height={"100px"}>
                        <Typography variant="p" component="p" sx={{color: "#a18b5c", fontWeight: "bold", fontFamily: "math", }}>{dobData['9']}</Typography>
                    </Grid>
                    <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid #a18b5c70"} borderLeft={"1px solid #a18b5c70"} borderBottom={"0px solid #a18b5c70"} borderRight={"1px solid #a18b5c70"} height={"100px"}>
                        <Typography variant="p" component="p" sx={{color: "#a18b5c", fontWeight: "bold", fontFamily: "math", }}>{dobData['2']}</Typography>
                    </Grid>
                    <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid #a18b5c70"} borderLeft={"1px solid #a18b5c70"} borderBottom={"0px solid #a18b5c70"} borderRight={"0px solid #a18b5c70"} height={"100px"}>
                        <Typography variant="p" component="p" sx={{color: "#a18b5c", fontWeight: "bold", fontFamily: "math", }}>{dobData['3']}</Typography>
                    </Grid>
                    <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid #a18b5c70"} borderLeft={"1px solid #a18b5c70"} borderBottom={"0px solid #a18b5c70"} borderRight={"0px solid #a18b5c70"} height={"100px"}>
                        <Typography variant="p" component="p" sx={{color: "#a18b5c", fontWeight: "bold", fontFamily: "math", }}>{dobData['5']}</Typography>
                    </Grid>
                    <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid #a18b5c70"} borderLeft={"1px solid #a18b5c70"} borderBottom={"0px solid #a18b5c70"} borderRight={"1px solid #a18b5c70"} height={"100px"}>
                        <Typography variant="p" component="p" sx={{color: "#a18b5c", fontWeight: "bold", fontFamily: "math", }}>{dobData['7']}</Typography>
                    </Grid>
                    <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid #a18b5c70"} borderLeft={"1px solid #a18b5c70"} borderBottom={"1px solid #a18b5c70"} borderRight={"0px solid #a18b5c70"} height={"100px"}>
                        <Typography variant="p" component="p" sx={{color: "#a18b5c", fontWeight: "bold", fontFamily: "math", }}>{dobData['8']}</Typography>
                    </Grid>
                    <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid #a18b5c70"} borderLeft={"1px solid #a18b5c70"} borderBottom={"1px solid #a18b5c70"} borderRight={"0px solid #a18b5c70"} height={"100px"}>
                        <Typography variant="p" component="p" sx={{color: "#a18b5c", fontWeight: "bold", fontFamily: "math", }}>{dobData['1']}</Typography>
                    </Grid>
                    <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} borderTop={"1px solid #a18b5c70"} borderLeft={"1px solid #a18b5c70"} borderBottom={"1px solid #a18b5c70"} borderRight={"1px solid #a18b5c70"} height={"100px"}>
                        <Typography variant="p" component="p" sx={{color: "#a18b5c", fontWeight: "bold", fontFamily: "math", }}>{dobData['6']}</Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* <p>Mulank : {mulank}</p>
            <p>Bhagyank : {bhagyank}</p> */}
        </>
    );
}

export default LoshuGrid;