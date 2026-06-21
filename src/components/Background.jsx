import bg_vid from "../assets/bg_vid.mp4";

const Background = () => (
  <>
    <video
      src={bg_vid}
      className="absolute -z-10 top-0 h-full w-full object-cover"
      muted
      loop
      autoPlay
      playsInline
    />
    <div className="absolute inset-0 -z-10 bg-black/50" />
  </>
);

export default Background;