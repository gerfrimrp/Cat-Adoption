import Carousel from "./Carousel";

export default function Card() {
  return (
    <section className="">
      <div>
        <div>Username</div>
        <div>Profile Picture</div>
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <div>cat name, adoption status</div>
        <div>cat description</div>
      </div>
    </section>
  );
}
