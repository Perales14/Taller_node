// components/sidebar.tsx
interface SidebarProps {
  title: string;
  items: string[];
}

const Sidebar = ({ title, items }: SidebarProps) => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="mb-2">
              <a href="#" className="text-primary hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
