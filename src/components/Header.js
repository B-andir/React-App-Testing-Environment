import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {

    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}


// Example of CSS in JS. Would be passed in as an element in the tag where to be applied. style={headingStyle}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
