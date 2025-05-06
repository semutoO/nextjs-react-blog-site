const Header = ({
  category = ""
}: {
  category?: string
}) => {
  return (
    <div className="border-b dark:bg-slate-800 bg-neutral-800 border-neutral-800 text-white mb-8">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight py-4 px-4 flex items-center">
        {category ? category.charAt(0).toUpperCase() + category.slice(1) + " Blog" : ""}
      </h2>
    </div>
  );
};

export default Header;
