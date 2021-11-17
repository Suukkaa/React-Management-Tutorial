import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/128/128/1",
    name: "김현수",
    birthday: "952501",
    gender: "남자",
    job: "비둘기",
  },
  {
    id: 2,
    image: "https://placeimg.com/128/128/2",
    name: "현수",
    birthday: "951301",
    gender: "남자",
    job: "비둘기",
  },
  {
    id: 3,
    image: "https://placeimg.com/128/128/3",
    name: "수",
    birthday: "951001",
    gender: "남자",
    job: "비둘기",
  },
];

function App() {
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
