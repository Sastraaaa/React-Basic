type headerTitle = {
  title: string;
};

function Header(header: headerTitle) {
  const { title } = header;
  return <h1>{title}</h1>;
}

export default Header;
