function Footer() {
  return (
    <div
      className="text-black py-8"
      style={{
        backgroundColor: "#ececec",
      }}
    >
      <div className="container  mx-auto text-start">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-semibold mb-2">Brisphere</h1>
            <p className="text-lg mb-0">Spituk, Ladakh,</p>
            <p className="text-lg mb-0">India, 194101</p>
            <p className="text-lg mb-0">Phone: +91 77649 97033</p>
            <p className="text-lg mb-8">
              Email:{" "}
              <a
                href="mailto:amit.jha6700@gmail.com"
                className="text-blue-400 hover:underline"
              >
                amit.jha6700@gmail.com
              </a>
            </p>
            <div className="mb-3 mt-3">
              <a
                href="https://maps.app.goo.gl/aBcJ82HxybTK4qM36"
                target="_blank"
                style={{
                  backgroundColor: "#206d99",
                  color: "#fff",
                  padding: "20px 50px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Location
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <a
              href=""
              className="mb-1"
              style={{
                textDecoration: "none",
                color: "#000",
              }}
            >
              Terms and Conditions
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#000",
              }}
              href=""
              className="mb-1"
            >
              Privacy Policy
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#000",
              }}
              href=""
              className="mb-1"
            >
              Refunds
            </a>
          </div>
        </div>
        <div className="mt-1 text-center">
          <p className="text-sm m-0">© 2024 Brisphere. All Rights Reserved.</p>
          <span className="-m-5 p-0">
            Developed by
            <a
              href="https://www.instagram.com/nameisbharatnaik/"
              target="_blank"
            >
              Bharat Naik
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
