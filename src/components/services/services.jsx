const serviesList = [
  {
    id: 1,
    serviceImages:
      "https://images.vexels.com/content/132687/preview/flat-wifi-icon-25976e.png",
    name: "High Speed Internet",
    description:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
  {
    id: 2,
    serviceImages: "https://i.postimg.cc/66VN02gW/pngwing-com.png",
    name: "Healthy Meals",
    description:
      "A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere.",
  },
  {
    id: 3,
    name: "Homely Stay",
    serviceImages: "https://i.postimg.cc/Z54Pdg3Y/home-7-512.png",
    description:
      "Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen  are some of the comforts providedin  your space.",
  },
  {
    id: 4,
    name: "Transportation",
    serviceImages:
      "https://www.javonet.com/app/themes/responsive/v3/assets/dist/images/content/clients-javo/directions_car_gray_100.png",
    description:
      " Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
  {
    id: 5,
    serviceImages: "https://i.postimg.cc/B6Jhp6Ry/Png-Item-2562990.png",
    name: "Food Delivery",
    description:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
  {
    id: 6,
    name: "Tourism",
    serviceImages: "https://i.postimg.cc/t4pH1h5Q/downloasdfd.png",
    description:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
  {
    id: 7,
    name: "Job",
    serviceImages: "https://cdn-icons-png.freepik.com/256/12144/12144584.png",
    description:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
  {
    id: 8,
    name: "Rental Service",
    serviceImages:
      "https://www.javonet.com/app/themes/responsive/v3/assets/dist/images/content/clients-javo/directions_car_gray_100.png",
    description:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
  {
    id: 9,
    name: "Online Shop",
    serviceImages:
      "https://i.postimg.cc/J07k4Th6/Pngtree-shopping-cart-icon-4436010.png",
    description:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
];
function Services() {
  return (
    <div>
      <div className="container mt-5  mx-auto px-6 mb-5">
        <h1 className="text-center font-normal text-5xl mb-6">SERVICES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviesList.map((item) => (
            <div
              key={item.id}
              className="bg-transparent border rounded-lg shadow-xl p-4 transition-transform hover:scale-105"
            >
              <img
                src={item.serviceImages}
                alt="Service Image"
                className="rounded-lg w-full h-20 object-contain mb-2"
              />
              <div className="flex items-center mb-2">
                <div>
                  <h2 className="font-semibold text-lg text-center">
                    {item.name}
                  </h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
