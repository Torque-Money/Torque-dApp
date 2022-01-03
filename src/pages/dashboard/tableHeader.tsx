export default function TableHeader() {
    return (
        <div className="flex items-center justify-evenly py-3 px-10 mb-2">
            <h3 className="text-center w-full text-neutral-500 font-bold">Name</h3>
            <h3 className="text-center w-full text-neutral-500 font-bold">TVL</h3>
            <h3 className="text-center w-full text-neutral-500 font-bold">Borrowed</h3>
            <h3 className="text-center w-full text-neutral-500 font-bold">Available</h3>
            <h3 className="text-center w-full text-neutral-500 font-bold">Stake APY</h3>
            <h3 className="text-center w-full text-neutral-500 font-bold">Borrow APY</h3>
        </div>
    );
}
