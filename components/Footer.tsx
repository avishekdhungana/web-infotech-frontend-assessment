const FOOTER_LINKS = [
  {
    heading: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    heading: "For customers",
    links: ["How it works", "Browse services", "Reviews", "Help center"],
  },
  {
    heading: "For providers",
    links: ["Become a provider", "Pricing", "Success stories", "Resources"],
  },
  {
    heading: "Legal",
    links: ["Terms of service", "Privacy policy", "Cookie policy"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#08090d] px-6 pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[15px] font-bold text-black">
                N
              </div>
              <span className="text-lg font-semibold tracking-tight">
                NexaServe
              </span>
            </div>
            <p className="mt-4 max-w-[220px] text-sm text-gray-500">
              Find verified local pros and book them without the guesswork.
            </p>
          </div>

          {FOOTER_LINKS.map((column) => (
            <div key={column.heading}>
              <h4 className="text-sm font-semibold text-white">
                {column.heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NexaServe. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Twitter", "Instagram", "LinkedIn"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-sm text-gray-500 transition-colors hover:text-white"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
