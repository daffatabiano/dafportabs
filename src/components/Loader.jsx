const Loader = () => {
  return (
    <div className="w-full h-screen fixed flex justify-center items-center bg-zinc-950/90 z-50">
      <div className="absolute bg-gradient-to-br from-amber-600 via-yellow-400 to-amber-800 top-[calc(50%-32px)] left-[calc(50%-32px)] w-[64px] h-[64px] rounded-full perspective-[800px] ">
        <div className="left-0 top-0 animate-rotateOne border-b-[6px] absolute w-full h-full rounded-full box-border border-yellow-600" />
        <div className="left-0 top-0 animate-rotateTwo border-r-[6px] absolute w-full h-full rounded-full box-border border-yellow-400" />
        <div className="left-0 top-0 animate-rotateThree border-t-[6px] absolute w-full h-full rounded-full box-border border-amber-300/90" />
      </div>
    </div>
  );
};

export { Loader };
