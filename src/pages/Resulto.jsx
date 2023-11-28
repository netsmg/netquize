
import { Link } from 'react-router-dom';

function MyComponent() {
  const data = { name: 'John', age: 30 };

  return (
    <Link to={`/resulto?name=${data.name}&age=${data.age}`}>Go to My Page</Link>
  );
}

// Receiving page
function Resulto(props) {
  const searchParams = new URLSearchParams(props.location.search);
  const name = searchParams.get('name');
  const age = searchParams.get('age');

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
export default resulto;
