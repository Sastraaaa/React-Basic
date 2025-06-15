import ProfileCard from "./ProfileCard";

type Mahasiswa = {
  name: string;
  majority?: string;
  birth: number;
};

// Data Dummy
const someMahasiswa: Mahasiswa[] = [
  {
    name: "Mamat Karbit",
    majority: "Teknik Lele",
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

const MahasiswaList = () => {
  return (
    <>
      {someMahasiswa.map((mahasiswa, id) => {
        const { name, majority, birth } = mahasiswa;
        return (
          <ProfileCard key={id} name={name} majority={majority} birth={birth} />
        );
      })}
    </>
  );
};

export default MahasiswaList;
