import PropTypes from 'prop-types'

function Student(props) {
    return ( //props are read only and cannot be modified by the child component

        <div>
            <h1>Student Name: {props.name}</h1>
            <h2>Student Age: {props.age}</h2>
            <h3>Is Student: {props.isStudent ? "Yes" : "No"}</h3>
        </div>
    )
}//propTypes ensure the passed value is of the correct datatype
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
//defaultProps are used to set default values for props if they are not passed from the parent component
Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false
}
export default Student