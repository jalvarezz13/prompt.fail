export default function Credits() {
  return (
    <div className="flex flex-col mb-auto">
      <h2 className="text-3xl md:text-4xl">Credits</h2>

      <section className="mt-4">
        <h3 className="text-xl mb-2">Libraries Used</h3>
        <ul className="list-disc md:list-inside">
          <li>
            <a
              href="https://github.com/nextui-org/nextui"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @nextui-org/react
            </a>
            : A modern and customizable React UI library.
          </li>
          <li>
            <a
              href="https://github.com/tabler/tabler-icons"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @tabler/icons-react
            </a>
            : A set of over 1000 pixel-perfect, customizable vector icons for React.
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <h3 className="text-xl mb-2">Fonts</h3>{" "}
        <ul className="list-disc md:list-inside">
          <li>
            <a
              href="https://fonts.google.com/specimen/Readex+Pro"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Readex Pro
            </a>
            : A versatile and modern sans-serif font.
          </li>
          <li>
            <a
              href="https://fonts.google.com/specimen/Pacifico"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pacifico
            </a>
            : A brush script typeface, inspired by the 1950s American surf culture.
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <h3 className="text-xl mb-2">Inspiration</h3>
        <p>
          The initial inspiration for this project came from the{" "}
          <a
            href="https://github.com/0xk1h0/ChatGPT_DAN"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ChatGPT_DAN
          </a>{" "}
          repository by 0xk1h0.
        </p>
      </section>
    </div>
  )
}
