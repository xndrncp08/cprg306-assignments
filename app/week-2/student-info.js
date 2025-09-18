import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Xander Rancap</p>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/xndrncp08/cprg306-assignments.git" target="_blank">
          xndrncp08/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}
