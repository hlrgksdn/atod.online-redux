import React, { ReactElement } from "react"
import { Card, Box, CardContent, Typography, Paper } from "@mui/material"


const MoneyCard = ({children}): ReactElement => {
 return (
    <>
        <Card sx={{ display: 'flex', flex: '1 0 1', borderRadius:4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    Текущая сумма
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {children}
                </Typography>
                </CardContent>
            </Box>
            <Box sx={{alignSelf:'center', p:2}}>
                <Paper elevation={5} sx={{p:2}}>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        5000000Р
                    </Typography>
                </Paper>
            </Box>
        </Card>
    </>
 )   
}

export default MoneyCard