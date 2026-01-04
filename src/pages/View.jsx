import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExpenseTable from '../components/Table'
import FloatingAddButton from '../components/FloatingAddButton'
import axios from 'axios'
import { baseUrl } from '../api'

export default function View() {
    const [allExpense, setallExpense] = useState([])
    const fetchallExpense = async () => {
        try {
            const res = await axios.get(`${baseUrl}/api/expense/view-all`);
            // console.log(res.data)
            if (res.data.success) {
                setallExpense(res.data.expense)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchallExpense()
    },[])
    // console.log(allExpense)
    return (
        <Box>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h4'> Expense list</Typography>
            </Box>
            <Box sx={{ p: 2 }}>
                <ExpenseTable  allExpense={allExpense}fetchallExpense={fetchallExpense}/>
            </Box >
            <FloatingAddButton />
        </Box>
    )
}
