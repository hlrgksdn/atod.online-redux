import React from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { Paper, Box, Divider } from "@mui/material"
import MoneyCard from "./MoneyCard"
import TerminalCard from "./TerminalCard"

const MainPage = () => {
    return(
        <>
            <Box sx={{display: 'flex', flex: '1 0 1', justifyContent:'center', m:2}}>
                <Paper elevation={5} sx={{display: 'flex', flex: '1 0 1', justifyContent:'center', flexWrap:'wrap', gap: 2, p: 2, borderRadius: 4}}>
                    <DatePicker slotProps={{textField: {size: 'small'}}} sx={{width:'180px'}}/>
                    <DatePicker slotProps={{textField: {size: 'small'}}} sx={{width:'180px'}}/>
                </Paper>
            </Box>
            {/* // добавить период для среднего пополнения */}
            <Box sx={{display: 'flex', flex: '1 0 1', justifyContent:'center', flexWrap:'wrap', gap:2, m:2}}> 
                <MoneyCard> купюры и монеты </MoneyCard>
                <MoneyCard> безнал </MoneyCard>
                <MoneyCard> среднее пополнение </MoneyCard> 
                <MoneyCard> колличество машин </MoneyCard>
            </Box>

            <Divider/>
            
            <Box sx={{display: 'flex', flex: '1 0 1', justifyContent:'center', flexWrap:'wrap', gap:2, m:2}}>
                <TerminalCard/>
                <TerminalCard/>
                <TerminalCard/>
                <TerminalCard/>
            </Box>
        </>
    )
}

export default MainPage