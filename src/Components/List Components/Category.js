export default function Category({todoCategory})
{
  return(
      <div className="text-2xl">
          {/*<h2 className="">Category:</h2>*/}
          <p>{todoCategory}</p>
      </div>
  );
}