import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Recipes</Link>
                </li>
                <li>
                    <Link to="/add-recipe">Add Recipe</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;