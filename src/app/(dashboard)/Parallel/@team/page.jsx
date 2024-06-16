

const Team = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return <div>
    <h2 >
      Team Page Posts
    </h2>
    <ul style={{
      display: "flex", flexDirection: "column",
      gap: "1rem"
    }}>
      {data.slice(0, 1).map((post, ind) => {
        return <li key={ind}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </li>
      })}

    </ul>
  </div>;
};

export default Team;
