import { Routes, Route, Link } from "react-router-dom";
// pages
import Counter from "./pages/Counter";

const LINK = [
  {
    link: "counter",
    name: "counter",
    component: <Counter />,
  },
];

const App = () => {
  return (
    <main className="relative w-full h-screen text-white bg-slate-600">
      <nav className="absolute top-0 w-full flex justify-center items-center mb-2">
        {LINK.map((item) => (
          <Link
            key={item.link}
            to={`/${item.link}`}
            className="p-2 hover:opacity-60"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="w-full h-full flex justify-content item-center">
        <Routes>
          {LINK.map((item) => (
            <Route
              key={item.link}
              path={item.link}
              element={item.component}
            ></Route>
          ))}
        </Routes>
      </div>
    </main>
  );
};

export default App;
