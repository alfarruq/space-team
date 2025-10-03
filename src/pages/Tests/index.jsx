import { Link } from "react-router-dom";
import "./tests.css"; // можешь потом добавить стили

function Tests() {
  return (
    <div className="tests">
      <h1>Testlar</h1>
      <p>Quyidagi mavzudan birini tanlab, testni boshlang:</p>

      <div className="test-list">
        <Link to="/tests/html" className="test-card">HTML Test</Link>
        <Link to="/tests/css" className="test-card">CSS Test</Link>
        <Link to="/tests/js" className="test-card">JavaScript Test</Link>
      </div>
    </div>
    
  );
}

export default Tests;
