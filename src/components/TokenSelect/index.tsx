import {useEffect, useState} from "react";
import {Approved} from "../../utils/getApproved";
import config from "../../config/config.json";

export default function TokenSelect({title, setToken}: {title: string; setToken: (token: Approved) => void}) {
    const tokens = config.approved;
    const [selectedToken, setSelectedToken] = useState<Approved>(config.approved[0]);

    useEffect(() => {
        setToken(selectedToken);
    }, [selectedToken]);

    return (
        <div>
            <h3 className="text-neutral-500 font-bold lg:text-center text-left text-2xl mb-4">{title}</h3>
            <div className="bg-neutral-900 rounded-3xl p-3 glow flex items-center justify-evenly w-full min-w-max space-x-2">
                <img src={selectedToken.icon} alt={selectedToken.symbol} width={35} className="rounded-xl" />
                <select
                    className="text-white font-bold bg-transparent border-transparent rounded-xl text-xl w-full"
                    onChange={(e) => setSelectedToken(tokens.filter((token) => token.address === e.target.value)[0])}
                >
                    {tokens.map((token, index) => (
                        <option key={index} className="font-bold bg-neutral-900" value={token.address}>
                            {token.symbol}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
