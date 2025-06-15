type Mahasiswa = {
  name: string;
  majority?: string;
  birth: number;
};

// Data Dummy
export const someMahasiswa: Mahasiswa[] = [
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
