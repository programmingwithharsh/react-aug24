import Main from "./Main";
import { connect } from 'react-redux';

function mapStateToProps(state) {
    debugger
    return {
        products: state
    }
}

const App = connect(mapStateToProps)(Main);
export default App;