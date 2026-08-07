import heroImg from "../../assets/hero.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Upgrade Your Comfort
          </h1>

          <p className="text-lg mb-6">
            Discover premium furniture crafted for modern living. Stylish,
            durable, and designed for everyday comfort.
          </p>

          <button className="btn btn-primary btn-lg">Shop Now</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Hero"
            className="max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
