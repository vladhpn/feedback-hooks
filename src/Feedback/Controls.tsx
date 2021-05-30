import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    button: {
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'none',
        color: 'white',
        padding: [15, 30],
        border: [1, 'solid'],
        borderImage: 'linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082)',
        borderImageSlice: 1,
        margin: [10, 20],
        outline: 'none',
        backgroundColor: '#1D1B26',
        textTransform: 'uppercase',
        letterSpacing: 2,
        transition: '.8s cubic-bezier(.165, .84, .44, 1)',
        '&:hover':{
            backgroundColor: 'rgba(255, 255, 255, 0)',
            color: '#1D1B26',
        },
    },
    title:{ 
        textAlign:'center',
        paddingTop: 30,
    },
    buttonContainer:{
        textAlign: 'center',
    }
})

type Option = string;
interface Props{
    options: Option[];
    onLeaveFeedback: React.MouseEventHandler<HTMLButtonElement>
}

const Controls = ({options, onLeaveFeedback}: Props) => {
    const styles = useStyles();

    return (<>
    
        <h1 className={styles.title}>Please leave feedback</h1>
    <div className={styles.buttonContainer}> 
      {options.map((option:Option) => (
               <button
                   type="button"
                   data-action={option}
                   onClick={() => onLeaveFeedback(option)}
                   className={styles.button}
                   key={option}>
                       {option}
               </button>
           ))}
    </div>
    </>
    )}
    
    // Controls.propTypes ={
    //     options: PropTypes.array,
    //     onLeaveFeedback: PropTypes.func.isRequired
    // }


export default Controls;