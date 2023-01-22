import React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import styles from '../styles/utility.module.css'


import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xgebvdye");
    if (state.succeeded) {
        return <p style={{color: '#fff'}}>Thanks for the submission!</p>;
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
            </label>
            <input
                id="name"
                type="text"
                name="name"
            />
            <label htmlFor="request-language">
                Language to add:
            </label>
            <input
                id="request-language"
                type="text"
                name="request-language"
            />
            <label htmlFor="email">
                Your email:
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label>Brief describe the language:</label>
            <textarea
                id="message"
                name="message"
                cols={50}
                rows={8}
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button className={styles.btn} type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}
const About = () => {
    return (
        <>
            <Box className={`${styles.backgroundGradient} ${styles.aboutPage}`} >
                <Box sx={{ maxWidth: '200px', maxHeight: '200px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                    <img src="https://media.tenor.com/vTl4mocfWFMAAAAd/cat-workaholic.gif" alt="cat memes" />
                </Box>
                <Box>
                    <Typography variant='h5'>About Me!</Typography>
                    <Typography>Once upon a time, there was a chicken who wanted to be an astronaut. Everyone laughed at her and told her that chickens can't fly let alone go to space. But the chicken was determined, she trained day and night, doing space-like exercises such as jumping as high as she could and spinning in circles. Eventually, the day of the space launch arrived and the chicken managed to sneak on board the spacecraft. As the rocket blasted off into the cosmos, the chicken realized that space travel was not as glamorous as she thought it would be. The food was terrible and the view was just a bunch of stars. The chicken quickly regretted her decision, but it was too late to turn back. Suddenly, an alien spaceship appeared and abducted the chicken, thinking it was an advanced form of poultry from Earth. The chicken became a sensation on the alien planet, performing acrobatic tricks and laying square eggs. She even got to meet her idol, the famous space chicken, Colonel Sanders. In the end, the chicken realized that sometimes, the journey to your dream can lead you to unexpected places and it's important to enjoy the ride.</Typography>
                    <Typography>Thank you for visiting my site!</Typography>
                </Box>
            </Box>
            <Typography sx={{textAlign: 'center', color: '#fff'}} variant='h5'>Request Language Support</Typography>
            <Box sx={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>
                <ContactForm />
            </Box>
        </>
    )
}

export default About