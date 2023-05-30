import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import '../helper/back-to-top.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);


        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300) {
                setVisible(true);
            } else if (scrolled <= 300) {
                setVisible(false);
            }
        };

    

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible )
        }
    })

    const useStyles = makeStyles(() => ({
        icon: {
            fontSize: '2rem',
            color: '#000',
            '&:hover': {
                transform: 'scale(1.08)',
                color: '#fff',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div
            style={{ display: visible ? 'inline' : 'none' }}
            className='backToTop'
        >
            <button onClick={scrollToTop} aria-label='Back to top'>
                <IoIosArrowDropupCircle className={classes.icon} />
            </button>
        </div>
    );

}

export default BackToTop;
