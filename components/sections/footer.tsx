export function Footer() {
  return (
    <div className="relative mt-28">
      <div className="absolute top-0 -translate-y-full left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-12 text-accent"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      <footer className="bg-accent text-white pt-16 pb-8">
        <div className="container mx-auto px-4"></div>
      </footer>
    </div>
  )
}
