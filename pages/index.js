import Link from "next/link";

function HomePage() {
  return (
    <div>
      Welcome to Next.js!
      <h1>
        Read{" "}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
    </div>
  );
}

export default HomePage;
