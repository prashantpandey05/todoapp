export default function Done({todoStatus})
{
    let status = "Not Done Yet"
    if (todoStatus)
        status = "Task is Completed"
  return(
      <div className="flex text-2xl">
          <h2 className="mr-4 underline font-bold">Done:</h2>
          <p> {status} </p>
      </div>
  );
}