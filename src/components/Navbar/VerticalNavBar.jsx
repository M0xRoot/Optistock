export default function VerticalNavBar({ left, right }) {
  return (
    <aside className="w-screen flex h-20 flex-row absolute shadow-xl z-1">
      <nav className="flex items-center justify-between h-full w-full px-4">
        <div className="flex items-center gap-4">{left}</div>
        <div className="flex items-center gap-4">{right}</div>
      </nav>
    </aside>
  );
}
