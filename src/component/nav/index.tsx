import cannonical from 'constant/cannonical';

export default function Nav(): JSX.Element {
  return (
    <ul>
      <li>
        <a href={cannonical.repository} target="_blank" rel="noreferrer">
          Repository
        </a>
      </li>
      <li>
        <a href={cannonical.email}>Contact us</a>
      </li>
    </ul>
  );
}
