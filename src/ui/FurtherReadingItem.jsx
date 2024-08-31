function FurtherReadingItem({ title, author, url }) {
  return (
    <li className="px-3">
      <p className="font-bold">{title}</p>
      <p className="">{author}</p>
      <a className="text-blue-600 underline text-sm md:text-base" href={url}>
        {url}
      </a>
    </li>
  );
}

export default FurtherReadingItem;
