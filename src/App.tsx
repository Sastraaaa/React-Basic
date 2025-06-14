import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

type Mahasiswa = {
  name: string;
  majority?: string;
  birth: number;
};

const someMahasiswa: Mahasiswa[] = [
  {
    name: "Mamat Uncal",
    majority: "Teknik informatika",
    birth: 2000,
  },
  {
    name: "Mamat Uncal",
    majority: "Teknik informatika",
    birth: 2000,
  },
  {
    name: "Mamat Uncal",
    birth: 2000,
  },
];

function App() {
  return (
    <>
      <h1>
        <Header title="Data Mahasiswa" />
      </h1>
      {someMahasiswa.map((mahasiswa, id) => {
        const { name, majority, birth } = mahasiswa;
        return (
          <ProfileCard key={id} name={name} majority={majority} birth={birth} />
        );
      })}

      <Counter />
    </>
  );
}

export default App;
