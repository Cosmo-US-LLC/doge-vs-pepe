import { useContext, useEffect, useState } from "react";
import historyIcon from "../../../assets/walletsec/btnicns (2).svg";
import { ApiContext } from "../../../presale-gg/context/ApiContext";
import { api } from "../../../presale-gg/api";
import { useStore } from "@nanostores/react";
import { useAccount } from "../../../presale-gg/web3";
import { formatDollar, formatLargeNumber, formatNumber } from "../../../presale-gg/util";

/**
 * @typedef {import("../../../presale-gg/api/api.types").API.TransactionHistoryItem} TransactionHistoryItem
 */

const capitalize = (str) => {
	return str.split(/\s|\_/).map((str) => str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()).join(" ")
}

const HistoryTab = () => {
	const projectData = useContext(ApiContext)
	const apiData = useStore(projectData.$apiState)
	/** @type {[TransactionHistoryItem[], (action: import("react").SetStateAction<TransactionHistoryItem[]>) => void]} */
	const [ transactions, setTransactions ] = useState([])
	const [ loading, setLoading ] = useState(false)

	const accountData = useAccount()

	useEffect(() => {
		if (!accountData.address) return setTransactions([])
		setLoading(true)
		api.getTransactionHistory(apiData.project, accountData.address, 0, 100)
			.then((res) => {
				setTransactions(res.data)
				setLoading(false)
			})
	}, [accountData.address])

	return (
		<>
			<h3 className="text-[38.258px] font-[700] text-center leading-[88%] text-[#00]">
				Transactions
			</h3>
			<div className="flex flex-col gap-2 overflow-y-auto">
				{transactions.map((trx) => {
					const statusCols = {
						"pending": ["#4f2e1a", "#de7223"],
						"processing": ["#4f2e1a", "#de7223"],
						"completed": ["#142e23", "#20f79b"],
						"failed": ["#731a14", "#de5950"],
						"expired": ["#731a14", "#de5950"],
						"refunded": ["#731a14", "#de5950"]
					}[trx.status]
					return (
						<div className="flex items-center bg-[#00000078] text-[#fff] px-2 py-[0.375rem] rounded-lg text-[0.8125rem]">
							<p className="text-[#bbb] flex justify-center flex-1">-{formatDollar(trx.payment_usd_amount)}</p>
							<p className="flex justify-center flex-1">+{formatLargeNumber(trx.tokens_bought, 0, 2)} {projectData.symbol}</p>
							<p className="text-[0.625rem] leading-[1] w-[7em] py-[0.375rem] flex-0 flex items-center justify-center rounded-lg" style={{background: statusCols[0], color: statusCols[1]}}>{capitalize(trx.status)}</p>
						</div>
					)
				})}
				{transactions.length === 0 && !loading && (
					<p className="text-[#444] text-center mt-2 text-lg">No transactions found</p>
				)}
			</div>
		</>
	)
}

export default {
	component: HistoryTab,
	label: "History",
	icon: historyIcon
}