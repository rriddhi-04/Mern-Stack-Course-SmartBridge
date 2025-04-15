const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white text-center p-6 mt-10 fixed bottom-0 w-full">
        <p className="text-sm">&copy; 2025 My Store. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="#" className="hover:underline text-sm">Facebook</a>
          <a href="#" className="hover:underline text-sm">Twitter</a>
          <a href="#" className="hover:underline text-sm">Instagram</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
