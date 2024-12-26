import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex justify-center gap-10">
            <NavLink
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) =>
                    e.isActive ? { textDecoration: "underline" } : {}
                }
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) =>
                    e.isActive ? { textDecoration: "underline" } : {}
                }
                to="/grocery"
            >
                Grocery            </NavLink>

                <NavLink
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) =>
                    e.isActive ? { textDecoration: "underline" } : {}
                }
                to="/fashion"
            >
             Fashion          </NavLink>
          
             <NavLink
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) =>
                    e.isActive ? { textDecoration: "underline" } : {}
                }
                to="/mobile"
            >
           Mobile      </NavLink>
        </nav>
    );
};

export default Nav;
