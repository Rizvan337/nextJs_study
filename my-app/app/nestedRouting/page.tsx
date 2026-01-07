import Link from "next/link";
export default function Blog() {
  return (
    <>
      <h1>Nested Routing Page</h1>
      <ul>
        <li>
          <Link href={"/nestedRouting/first"}>First</Link>
        </li>
        <li>
          <Link href={"/nestedRouting/second"}>Second</Link>
        </li>
      </ul>
    </>
  );
}
