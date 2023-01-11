import * as React from 'react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function LanguageComponent(props) {
    const { imageLink, title, description } = props.data
    return (
        <Box component="span" sx={{ p: 2 }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={imageLink}
                        alt="logo image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}