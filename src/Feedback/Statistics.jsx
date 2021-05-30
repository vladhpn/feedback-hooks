import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    section:{
        textAlign: 'center',
    },
    list:{
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
    },
    item:{
        padding: [10, 10],
        color: 'white',
        backgroundColor: '#1D1B26',
        marginRight: 5,
        boxShadow: [0, 5, 5, 0, 'rgba(0,0,0, .2)'],
        transition: '.8s cubic-bezier(.165, .84, .44, 1)',
        '&:hover':{
            backgroundColor: 'rgba(255, 255, 255, 0)',
            color: '#1D1B26',
        },
    }

})

const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {

    const styles = useStyles();

    return(
        <>
    <div className={styles.section}>
    <h2>Statistics</h2>
            
            {total === 0 ? <p>No feedback given</p> : <ul className={styles.list}>
                <li className={styles.item}>Good: {good}</li>
                <li className={styles.item}>Neutral: {neutral} </li>
                <li className={styles.item}>Bad: {bad}</li>
                <li className={styles.item}>Total: {total}</li>
                <li className={styles.item}>Positive Feedback: {positiveFeedback}</li>
            </ul>}
            </div>
    </>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.string.isRequired
}

export default Statistics;