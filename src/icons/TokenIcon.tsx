export default function TokenIcon(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M9 20q-3.35 0-5.675-2.325T1 12q0-3.35 2.325-5.675T9 4q3.35 0 5.675 2.325T17 12q0 3.35-2.325 5.675T9 20Zm0-4.5q.425 0 .713-.288T10 14.5v-4h1.25q.325 0 .537-.213T12 9.75q0-.325-.213-.537T11.25 9h-4.5q-.325 0-.537.213T6 9.75q0 .325.213.537t.537.213H8v4q0 .425.288.713T9 15.5ZM18.55 8l-.8-1.75l-1.75-.8q-.275-.125-.275-.45T16 4.55l1.75-.8l.8-1.75q.125-.275.45-.275t.45.275l.8 1.75l1.75.8q.275.125.275.45T22 5.45l-1.75.8l-.8 1.75q-.125.275-.45.275T18.55 8Zm0 14l-.8-1.75l-1.75-.8q-.275-.125-.275-.45t.275-.45l1.75-.8l.8-1.75q.125-.275.45-.275t.45.275l.8 1.75l1.75.8q.275.125.275.45t-.275.45l-1.75.8l-.8 1.75q-.125.275-.45.275T18.55 22Z"
      />
    </svg>
  )
}
