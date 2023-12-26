export default function Description({todoDesc})
{
  return(
      <div className="flex mb-10  text-2xl">
          <h2 className="mr-4 underline font-bold">Description:</h2>
          <p className="">{todoDesc}</p>
      </div>
  );
}