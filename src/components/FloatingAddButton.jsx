import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

export default function FloatingAddButton() {
    const fabStyle = {
        position: 'absolute',
        bottom: 16,
        right: 16,
    };
    const navigate=useNavigate();
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Tooltip title='Add new entry' arrow>
                <Fab onClick={()=>navigate('/add')} sx={fabStyle} size="medium" color="secondary" aria-label="add">
                    <AddIcon /> 
                </Fab>
            </Tooltip>

        </Box>
    );
}
