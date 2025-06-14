type Mahasiswa = {
  name: string;
  majority?: string;
  birth: number;
};

function ProfileCard(mahasiswa: Mahasiswa) {
  const { name, majority, birth } = mahasiswa;
  return (
    <div className="card">
      <p>Nama: {name}</p>
      {majority && <p>Jurusan: {majority}</p>}
      <p>Tahun Lahir: {birth}</p>
    </div>
  );
}

export default ProfileCard;
