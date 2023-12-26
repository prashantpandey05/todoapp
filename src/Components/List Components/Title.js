export default function Title({todoTitle})
{
  return(
      <div className="flex mb-8 font-bold  text-4xl">

        <h2 className="mr-4 underline">Title:</h2>
        <p className="">{todoTitle}</p>

      </div>
  );
}