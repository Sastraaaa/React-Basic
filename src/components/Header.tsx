type headerTitle = {
  title: string;
};

function Header(header: headerTitle) {
  const { title } = header;
  return <div>{title}</div>;
}

export default Header;
