import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import RecipePage from "./pages/RecipePage";
import AddRecipePage from "./pages/AddRecipePage";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <h1>Recipes</h1>
              <div id="page-body">
                  <Routes>
                      <Route path="/" element={<RecipePage />} />
                      <Route path="/add-recipe" element={<AddRecipePage />} />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
