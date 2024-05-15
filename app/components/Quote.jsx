// eslint-disable-next-line react/prop-types
function Quote({ quote }) {
  const { text, author } = quote;
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[73.5%] bg-slate-200 absolute top-[27rem] left-[18rem] h-[10rem] rounded">
      <p className="items-center relative right-[30rem] font-medium">
        Quote of the day
      </p>
      <div>&quot;{text}&quot;</div>
      <p className="relative left-[30rem] font-medium">{author}</p>
    </div>
  );
}

export default Quote;
