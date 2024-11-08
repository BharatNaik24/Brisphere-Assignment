import { useState } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    profileImgae:
      "https://images.unsplash.com/photo-1678286742832-26543bb49959?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image:
      "https://i0.wp.com/pathadventure.com/wp-content/uploads/2023/01/photo-1619837374214-f5b9eb80876d.jpg?resize=768%2C1152&ssl=1",
    content:
      "I am sharing this after a month-long stay at Bricabin in Ladakh. From the moment we were picked up at the airport to our drop-off at the end of the month, Urgan ensured we felt at home and taken care of. Every detail was thoughtfully handled, making the experience truly unforgettable",
    rating: "https://i.postimg.cc/prVL7HK0/Png-Item-5155542.png",
  },
  {
    name: "Nisha Verma",
    profileImgae:
      "https://www.wanderershub.com/wp-content/uploads/2021/12/Untitled-12-6.jpg",
    image:
      "https://i0.wp.com/pathadventure.com/wp-content/uploads/2023/01/photo-1559186820-3e8201de3879.jpg?resize=768%2C1152&ssl=1",
    content:
      "Reflecting on my time at Bricabin, the experience was nothing short of amazing. For the entire month, Urgan was incredibly attentive, from greeting us warmly at the airport to seeing us off with the same care. My friends and I were constantly impressed by the hospitality and warmth shown to us.",
    rating: "https://i.postimg.cc/prVL7HK0/Png-Item-5155542.png",
  },
  {
    name: "Vikram Patel",
    profileImgae:
      "https://www.tripjodi.in/wp-content/uploads/2019/04/IMG_1755-1024x683.jpg",
    rating: "https://i.postimg.cc/prVL7HK0/Png-Item-5155542.png",
    image:
      "https://i0.wp.com/pathadventure.com/wp-content/uploads/2023/01/8d546bea7f5a60be5f0b3207a2b2f0f9.jpg?fit=576%2C796&ssl=1",
    content:
      "Spending a month at Bricabin was an experience to cherish. Urgan went above and beyond to make our stay in Ladakh seamless and comfortable, starting from the airport pickup until we were dropped off. The attention to detail and genuine care made all the difference.",
  },
  {
    name: "Sanya Gupta",
    profileImgae:
      "https://turuhi.com/storage/story/11-Pangong-Lake-Photography.jpeg",
    rating: "https://i.postimg.cc/prVL7HK0/Png-Item-5155542.png",
    image:
      "https://i0.wp.com/pathadventure.com/wp-content/uploads/2023/01/5-2.jpg?fit=768%2C576&ssl=1",
    content:
      "After a month in Ladakh at Bricabin, I can’t help but be grateful for the exceptional hospitality. Urgan managed every aspect of our stay, from airport transfers to our day-to-day comfort. My friends and I felt completely looked after and could relax and enjoy our time without worry.",
  },
  {
    name: "Kabir Das",
    profileImgae:
      "https://media1.thrillophilia.com/filestore/tbk5i2qw477s1o9q7d3jdqa535fn_confluence11.jpg?w=753&h=450&dpr=2.0",
    rating: "https://i.postimg.cc/prVL7HK0/Png-Item-5155542.png",
    image:
      "https://i0.wp.com/pathadventure.com/wp-content/uploads/2023/01/12.jpg?fit=768%2C576&ssl=1",
    content:
      "My one-month adventure in Ladakh was made perfect thanks to Bricabin and Urgan. From airport pick-up to the final farewell, we were always in good hands. Urgan’s responsibility and dedication to making our stay smooth and memorable were evident throughout the trip.",
  },
];

function Discover() {
  // Manage read more  for each testimonial
  const [readMoreIndex, setReadMoreIndex] = useState(null);

  const toggleReadMore = (index) => {
    setReadMoreIndex(readMoreIndex === index ? null : index);
  };

  return (
    <div className="container mt-5  mx-auto px-6 mb-5">
      <h1 className="text-center font-normal text-5xl mb-6">Discover</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-lg p-4 transition-transform hover:scale-105"
          >
            <img
              src={item.image}
              alt="location"
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <div className="flex items-center mb-4">
              <img
                src={item.profileImgae}
                alt="user profile"
                className="w-12 h-12 rounded-full border-2 border-gray-200 mr-3"
              />
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <img src={item.rating} alt="rating" className="w-24 mt-1" />
              </div>
            </div>
            <p className="text-gray-600">
              {readMoreIndex === index
                ? item.content
                : `${item.content.slice(0, 80)}...`}
              <button
                onClick={() => toggleReadMore(index)}
                className="text-blue-500 mt-2"
              >
                {readMoreIndex === index ? "Read Less" : "Read More"}
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;
