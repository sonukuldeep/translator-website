import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LanguageComponent from './LanguageComponent'
import { data } from './mockData.js'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

// export default function LanguageWrapperComponent() {
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <Grid container spacing={2}>
//                 <Grid item xs={6} md={8}>
//                     {data.map((data, index) => <Item key={index}><LanguageComponent data={data} /></Item>)}
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }

export default function abc() {
    return(
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
            {data.map((data,index)=><LanguageComponent key={index} data={data}/>)}
        </div>
    )
}