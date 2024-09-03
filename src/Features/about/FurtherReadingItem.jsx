function FurtherReadingItem({ title, author, url }) {
  return (
    <li className="px-3">
      <p className="font-bold">{title}</p>
      <a className="text-blue-600 underline text-sm md:text-base" href={url}>
        {author}
      </a>
    </li>
  );
}

export default FurtherReadingItem;
