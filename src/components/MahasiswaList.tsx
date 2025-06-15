import { someMahasiswa } from "../data/mahasiswa";
import ProfileCard from "./ProfileCard";

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
