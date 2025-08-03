const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ashwin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;