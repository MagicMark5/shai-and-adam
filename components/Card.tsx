// Card is a component that renders a card with a title and children

export default function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-[28px] m-10 drop-shadow-lg text-blue z-10 w-[90%] max-w-[680px] p-5 px-[2em] flex flex-col items-center justify-center lg:flex">
      <h1 className="text-4xl font-bold m-3">{title}</h1>
      {children}
    </div>
  );
}
