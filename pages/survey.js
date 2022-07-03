import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <h3>Questions</h3>
        <div>
          <form action="/survey" method="post">
            <label for="first">First name:</label>
            <input type="text" id="first" name="first" />
            <label for="last">Last name:</label>
            <input type="text" id="last" name="last" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}
