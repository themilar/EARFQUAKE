export default function MarkerIcon() {
  return (
    <g
      fill="none"
      stroke="#FF5533" /*FA9533  modify this for thw icon color based on significance of the earthquake*/
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(-12, -24)"
    >
      <circle cx="12" cy="10" r="3" />
      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
    </g>
  );
}
