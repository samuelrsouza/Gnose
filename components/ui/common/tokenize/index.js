


export default function Tokenize(){
    return (
        <div className="rounded-md shadow font-sans font-bold lg:text-sm text-center leading-snug">
            <div class="container py-5">
            <h1 id="buy">Comprar Gnose</h1>
                <Button
                onClick=""
                >
                Compre agora
                </Button>
                <p>
                <button className="btn btn-primary buy-now-button">Compre agora<small>(<strike>0.10 EUR each</strike> free for limited time)</small></button></p>
            <p id="buy-now-waiting">Waiting for purchase transaction to complete.</p>
            <p>
                <a id="buy-now-transaction-link ">
                Watch for transaction to complete. Then reload this page.
                </a>
            </p>
            </div>
            <Link legacyBehavior href={`/marketplace`}>      
                <a href="/marketplace" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Comece agora
                </a>
            </Link>
        </div>
    )
}