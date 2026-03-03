const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-apple-bg pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Layout;
