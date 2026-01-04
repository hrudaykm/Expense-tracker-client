import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

export default function Add() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  // console.log(formData)
  const handleSubmit = async () => {
    // console.log(formData)
    setIsLoading(true);
    try {
      const res = await axios.post(`http://localhost:7000/api/expense/insert`, formData)
      // console.log(res)
      if (res.data.success) {
        toast.success(res.data.message)
        setTimeout(() => {
          navigate('/')
        }, 2000);
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
    }
  }
  return (
    <Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='h4'>Add Expense Details</Typography>
      </Box>
      <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper sx={{ width: '70%', p: 3 }}>
          <TextField value={formData.title} fullWidth onChange={(e) => setFormData({ ...formData, title: e.target.value })} label="Expense title" placeholder='Enter expense title'
            sx={{ mb: 2 }} />
          <TextField value={formData.amount} fullWidth onChange={(e) => setFormData({ ...formData, amount: e.target.value })} type='number' label="Expense amount" placeholder='Enter expense amount'
            sx={{ mb: 2 }} />
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="demo-simple-select-label">Select expense category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              // value={age}
              value={formData.category}
              label="select expense category "
            // onChange={handleChange} 
            >
              <MenuItem value={'Transport'}>Transport</MenuItem>
              <MenuItem value={'Food'}>Food</MenuItem>
              <MenuItem value={'other'}>Other</MenuItem>
            </Select>
          </FormControl>
          <Button onClick={handleSubmit} sx={{ mb: 1 }} variant='contained' fullWidth loading={isLoading}>SUBMIT</Button>
          <Button component={Link} to={'/'} sx={{ mb: 1 }} variant='outlined' color='secondary' fullWidth>VIEW ENTRIES</Button>
        </Paper>
      </Box>
    </Box>
  )
}
