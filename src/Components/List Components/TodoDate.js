export default function TodoDate({time})
{
    let dateTime =
        (new Date(time * 1000)).toLocaleString("en-GB",{weekday: "short"}) + ", "+
        (new Date(time * 1000)).toLocaleString("en-GB",{ day: "2-digit" }) + "-"+
        (new Date(time * 1000)).toLocaleString("en-GB",{month: "short"}) + "-"+
        (new Date(time * 1000)).toLocaleString("en-GB",{year: "2-digit"}) + ", At "+
        (new Date(time * 1000)).toLocaleString("en-US", {hour: "2-digit"}).substring(0,2) + ":"+
        (new Date(time * 1000)).toLocaleString("en-US",{minute: "2-digit"}) + ":"+
        (new Date(time * 1000)).toLocaleString("en-US",{second: "numeric"}) + " "+
        (new Date(time * 1000)).toLocaleString("en-US", {hour: "numeric"}).substring(2,5)

  return(
      <div className="flex text-2xl">
          <h2 className="mr-4 underline font-bold">DateTime:</h2>
          <p > {dateTime} </p>
      </div>
  );
}