export default async function Page({ params }) {
  const { ids } = await params;

  if (ids.length === 3) {
    return (
      <div>
        <p>Item: {ids[2]}</p>
      </div>
    );
  }

  if (ids.length === 2) {
    return (
      <div>
        <p>Item: {ids[1]}</p>
      </div>
    );
  }

  if (ids.length === 1) {
    return (
      <div>
        <p>Item: {ids[0]}</p>
      </div>
    );
  }

  return <p>Invalid category path</p>;
}