import { GiGalaxy } from "react-icons/gi";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <GiGalaxy size={24} />
        <div>Amalia Store</div>
      </div>
      <button>Login</button>
    </header>
  );
}

