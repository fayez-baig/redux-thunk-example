import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useSelector(({ todos }) => todos);

  // const users = useSelector((state) => state.todos);

  console.log(isLoading, isError);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className="App">
      Redux Thunk Example
      <div>
        <h2>isLoading: {JSON.stringify(isLoading)}</h2>
        <h2>isError: {JSON.stringify(isError)}</h2>
        <h2>Error: {error || "No Errors All Good"}</h2>
        {data.map((item) => (
          <h6 key={item.title}>{item.title}</h6>
        ))}
      </div>
    </div>
  );
}

export default App;
