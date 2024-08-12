/*
function Title() {
    return <h1>This is Title Functional Component</h1>
}
*/

import styles from './title.module.css';

const Title = (props) => <>
    <h1 className={styles.header}>This is Title Functional Component - Module CSS</h1>
    <h4>Props username is {props.username}</h4></>

export default Title;