import Spinner from 'react-bootstrap/Spinner';

function SpinnerExample() {
  return (
    <Spinner animation="border" variant="primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerExample;