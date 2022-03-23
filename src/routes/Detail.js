import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  console.log(id);
  return <h1>Detail</h1>;
}
export default Detail;
