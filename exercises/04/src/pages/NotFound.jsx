import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div data-testid="not-found">
      <h1>404</h1>
      <p>Oh no, this route doesn't exist!</p>
      <Link to="/">Go back to the shop</Link>
    </div>
  );
};

export default NotFound;
