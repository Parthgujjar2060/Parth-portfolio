const links = ["Home","About","Avocations","Contact"]; 

export default function Header() {
  return (
    <nav className="bg-white flex justify-between items-center h-10 p-0"> 
      <ul className="flex gap-6 list-none bg-slate-400">
        {links.map((link) => (
          <li key={link}>
            <a href={`/${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
