import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      <p>
        Name: <span>Qixiao Liu</span>
      </p>
      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/QixiaoLiu0/cprg306-assignments-deployed">
          Click
        </Link>
      </p>
    </section>
  );
}
