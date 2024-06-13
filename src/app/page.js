export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <details className="dropdown">
          <summary className="m-1 btn">1. Elije un pais</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>🇻🇪 Venezuela</a>
            </li>
            <li>
              <a>🇦🇷 Argentina</a>
            </li>
            <li>
              <a>🇨🇱 Chile</a>
            </li>
            <li>
              <a>🇪🇸 España</a>
            </li>
            <li>
              <a>🇺🇸 USA</a>
            </li>
          </ul>
        </details>
        <input
          type="text"
          placeholder="2. Nombre del corte"
          className="input w-full max-w-xs"
        />
        <details className="dropdown">
          <summary className="m-1 btn">3. Elije pais a traducir</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>🇻🇪 Venezuela</a>
            </li>
            <li>
              <a>🇦🇷 Argentina</a>
            </li>
            <li>
              <a>🇨🇱 Chile</a>
            </li>
            <li>
              <a>🇪🇸 España</a>
            </li>
            <li>
              <a>🇺🇸 USA</a>
            </li>
          </ul>
        </details>
      </div>
    </main>
  );
}
