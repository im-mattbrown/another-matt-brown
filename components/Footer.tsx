import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="flex flex-col">
        <div className="horizontal-divide mb-20"></div>
        <div className="flex w-full justify-between mb-20">
          <h4 className="text-with-me">Work with me</h4>
          <h4 className="text-with-me underline underline-offset-8">
            m@mononestud.io
          </h4>
        </div>
        <div className="horizontal-divide mb-20"></div>
        <div className="flex mb-38">
          <div className="flex flex-col width-1-column">
            <h6 className="font-bold mb-4">Sitemap</h6>
            <ul>
              <Link href="/case-studies">
                <li className="underline underline-offset-4 mb-4">
                  Case Studies
                </li>
              </Link>
              <Link href="/approach">
                <li className="underline underline-offset-4 mb-4">Approach</li>
              </Link>
              <Link href="/contact">
                <li className="underline underline-offset-4 mb-4">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-gutter">
            <h6 className="font-bold mb-4">Socials</h6>
            <ul>
              <Link
                href="https://www.instagram.com/monomstud.io/"
                target="_blank"
              >
                <li className="underline underline-offset-4 mb-4">Instagram</li>
              </Link>
              <Link
                href="https://www.youtube.com/@3verythingscomputer"
                target="_blank"
              >
                <li className="underline underline-offset-4 mb-4">YouTube</li>
              </Link>
              <li className="underline underline-offset-4 mb-4">Behance</li>
            </ul>
          </div>
        </div>
        <div className="flex w-full justify-between items-end">
          <h4 className="font-badly-stuffed text-name">M@TT</h4>
          <h6 className="font-badly-stuffed text-copy">© 2025</h6>
        </div>
      </div>
    </footer>
  );
}
