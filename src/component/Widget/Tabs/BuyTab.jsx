import { useContext, useEffect, useMemo, useState } from "react";
import dollarIcon from "../../../assets/walletsec/btnicns (3).svg";
import placeholderImg from "../../../assets/walletsec/gg.svg"
import { ApiContext } from "../../../presale-gg/context/ApiContext";
import { getConfig, getAbi, getChainIdFromLabel, getContractAddress, getDecimals, isCurrencyNative, sendGenericTransaction } from "../../../presale-gg/web3";
import { useStore } from "@nanostores/react";
import { tokenImageMap } from "../../../presale-gg/assets/img/tokens"
import toast from "react-hot-toast"

import { formatDollar, minMax, parseNum } from "../../../presale-gg/util"
import TokenInput from "../../TokenInput";
import { useAccount } from "../../../presale-gg/web3";
import { showConnectionModal } from "../../../presale-gg/stores/modal.store";
import TransactionModal from "../../TransactionModal";
import { api } from "../../../presale-gg/api";
import { PAYMENT_WALLET_ADDRESS } from "../../../presale-gg/constants";
import clsx from "clsx";


const walletBuyTokens = new Set([
	"ETH-ERC-20",
	"USDT-ERC-20",
	"BNB-BEP-20",
	"BUSD-BEP-20",
	"USDT-BEP-20"
])

/** 
 * @template T
 * @typedef {[T, import("react").Dispatch<import("react").SetStateAction<T>>]} State 
 */

const BuyTab = () => {
	const projectData = useContext(ApiContext)
	const apiState = useStore(projectData.$apiState)
	
	const stageCurrent = parseNum(apiState.stage?.cumulative_usd_raised)
	const stageTarget = parseNum(apiState.stage?.next_stage_target_usd)

	/** @type {State<import("../../TokenInput").InputRef>} */
	const [ paymentTokenRef, setPaymentTokenRef ] = useState(null)
	const [ paymentTokenValue, setPaymentTokenValue ] = useState(1)
	
	/** @type {State<import("../../TokenInput").InputRef>} */
	const [ receiveTokenRef, setReceiveTokenRef ] = useState(null)
	const [ receiveTokenValue, setReceiveTokenValue ] = useState(1)

	/** @type {State<import("../../../presale-gg/api/api.types").API.PaymentToken | null>} */
	const [ selectedPaymentToken, setSelectedPaymentToken ] = useState(null)

	useEffect(() => {
		if (!selectedPaymentToken && apiState.paymentTokens?.[0]) setSelectedPaymentToken(apiState.paymentTokens[0])
	}, [apiState.paymentTokens])

	useEffect(() => {
		const receiveAmount = paymentTokenValue * parseNum(selectedPaymentToken?.price) / (parseNum(apiState.stage?.token_price) || 1)
		receiveTokenRef?.setVal(receiveAmount)
	}, [selectedPaymentToken, receiveTokenRef])

	const acceptingTokens = useMemo(() => {
		let acceptingTokens = [];
		(apiState.paymentTokens ?? []).forEach((token) => {
			if (acceptingTokens.length >= 6) return
			const img = tokenImageMap[token.symbol.toLowerCase()]
			if (!img) return
			if (acceptingTokens.find((currToken) => tokenImageMap[currToken.symbol.toLowerCase()] === img)) return
			acceptingTokens.push(token)
		})
		return acceptingTokens
	})

	const accountData = useAccount()

	const minimum = (() => {
		const currency = selectedPaymentToken
		if (!currency || !currency.nowpayments_minimum) return null
		return Math.ceil((parseNum(currency.nowpayments_minimum) / parseNum(currency.price)) * 10**6) / 10**6
	})()

	const [ createdTransaction, setCreatedTransaction ] = useState(null)
	const [ transactionModalVisible, setTransactionModalVisible ] = useState(false)
	const [ transactionLoading, setTransactionLoading ] = useState(false)

	const buy = async () => {
		if (apiState.presaleEnded) return toast.error("Presale has ended")
		const { config } = await getConfig()
		const currency = selectedPaymentToken
		if (!currency) return
		const min = minimum
		if (paymentTokenValue === 0) return toast.error(`Must pay more than 0 ${currency.symbol.toUpperCase()}`)
		if (min !== null && paymentTokenValue < min) return toast.error(`Cannot pay less than ${min} ${currency.symbol}`)
		const address = accountData.address
		if (!address) return
		try {
			setTransactionLoading(true)
			await toast.promise((async () => {
				const walletTransfer = walletBuyTokens.has(currency.symbol.toUpperCase() + "-" + currency.chain.toUpperCase())
				if (walletTransfer) {
					const chainId = getChainIdFromLabel(currency.chain)
					if (!chainId) return toast.error(`Invalid chain id for chain ${currency.chain}`)
					const abi = getAbi(chainId)
					if (!abi) return toast.error(`Invalid ABI for chain id ${chainId}`)
					const native = isCurrencyNative(currency.symbol, chainId)
					const contractAddress = getContractAddress(chainId, currency.symbol) ?? undefined
					const decimals = currency.symbol ? getDecimals(chainId, currency.symbol) : 18
					if (!native && !contractAddress) return toast.error(`Invalid contract address for token ${currency.symbol}`)
					toast("Confirm in your wallet")
					const transactionHash = await sendGenericTransaction(config, {
						to: PAYMENT_WALLET_ADDRESS,
						value: paymentTokenValue,
						abi,
						chainId,
						contractAddress,
						decimals: decimals,
						native
					})
					toast.success("Transaction successfully completed", {duration: 10000})
					api.createTransactionMetadata(apiState.project, address ?? "", transactionHash)
					return "submitted"
				} else {
					const res = await api.createTransaction(apiState.project, {
						payment_token_id: currency.id,
						usd_amount: (paymentTokenValue * parseNum(currency.price)).toString(),
						wallet_address: address ?? "",
						token_amount: paymentTokenValue.toString()
					})
					setCreatedTransaction(res.data)
					setTimeout(() => {
						setTransactionModalVisible(true)
						setTransactionLoading(false)
					}, 100)
					return "created"
				}
			})(), {
				loading: "Processing transaction",
				error: (err) => api.getApiErrorMessage(err, "Transaction errored"),
				success: (res) => `Successfully ${res} transaction`
			})
		} catch (_) {}
		setTransactionLoading(false)
	}

	return (
		<>
			<div className="space-y-[8px]">
				<h3 className="text-[38.258px] font-[700] text-center leading-[88%] text-[#00]">
					{apiState.presaleEnded ? "Presale Ended" : `Buy $${projectData.symbol}`}
				</h3>
				<h5 className="text-[#000] leading-[133.333%] text-[18.364px] font-[700] text-center">
					1 {projectData.symbol} = {formatDollar(parseNum(apiState.stage?.token_price))}
				</h5>
			</div>
			<div className=" pb-2 space-y-[8px]">
				<div className="bg-[#FFFFFF47] w-[100%] h-[16px] rounded-[30px]">
					<div
						className="bg-[#000] h-[16px] rounded-[30px]"
						style={{width: `${minMax(stageCurrent / (stageTarget || 1), 0, 1) * 100}%`}}
					/>
				</div>
				<div className="flex justify-between">
					<h4 className="text-[18.364px] font-[600] text-[#000]">
						USD Raised
					</h4>
					<h5 className="text-[18.364px] font-[600] text-[#000]">
						{formatDollar(stageCurrent, true, 0, 0)} / {formatDollar(stageTarget, true, 0, 0)}
					</h5>
				</div>
			</div>
			<TokenInput
				label="You pay"
				defaultValue={paymentTokenValue}
				selectedToken={selectedPaymentToken ? {
					id: selectedPaymentToken.id,
					chain: selectedPaymentToken.chain,
					symbol: selectedPaymentToken.symbol.toUpperCase(),
					imgSrc: tokenImageMap[selectedPaymentToken.symbol.toLowerCase()]
				} : null}
				onChange={(newVal) => {
					setPaymentTokenValue(newVal)
					const receiveTokenNum = newVal * parseNum(selectedPaymentToken?.price) / (parseNum(apiState.stage?.token_price) || 1)
					receiveTokenRef?.setVal(receiveTokenNum)
				}}
				onTokenChange={(token) => setSelectedPaymentToken(apiState.paymentTokens.find((currToken) => currToken.id === token.id) ?? null)}
				tokenOptions={(apiState.paymentTokens ?? []).map((token) => ({
					id: token.id,
					chain: token.chain,
					symbol: token.symbol.toUpperCase(),
					imgSrc: tokenImageMap[token.symbol.toLowerCase()]
				}))}
				style={{zIndex: 11}}
				inputRef={setPaymentTokenRef}
			/>
			<TokenInput
				label="You receive"
				defaultValue={receiveTokenValue}
				decimals={2}
				selectedToken={{
					id: 0,
					chain: "ERC-20",
					symbol: projectData.symbol,
					imgSrc: placeholderImg
				}}
				onChange={(newVal) => {
					setReceiveTokenValue(newVal)
					const paymentTokenNum = (newVal * (parseNum(apiState.stage?.token_price) || 1)) / parseNum(selectedPaymentToken?.price)
					paymentTokenRef?.setVal(paymentTokenNum)
				}}
				inputRef={setReceiveTokenRef}
			/>
			<div className="pb-[10px] space-y-[10px]">
				<h5 className="text-[#000] text-[18.364px] font-[700] text-center">
					Accepting
				</h5>
				<div className="flex justify-center space-x-6">
					{acceptingTokens.map((token) => (
						<img
							key={token.id}
							src={tokenImageMap[token.symbol.toLowerCase()]}
							className="h-[29px] w-[29px]"
							alt={token.name}
						/>
					))}
				</div>
			</div>

			<button
				className={clsx(
					"bg-[#000] text-[#FFF] w-[100%] h-[41.319px] text-[21.425px] font-[700] rounded-[50px] transition-all duration-300 hover:bg-[#0184E2] hover:text-[#FFFFFF] hover:opacity-90 cursor-pointer",
					{"bg-[#888]": transactionLoading}
				)}
				onClick={() => {
					if (!accountData.isConnected) showConnectionModal()
					else buy()
				}}
			>
				{accountData.isConnected ? (apiState.presaleEnded ? "Presale Ended" : "Buy") : "Connect Wallet"}
			</button>
			<div className="flex items-center justify-center ">
				<p className="text-[15px] font-normal text-black font-k2d capitalize leading-normal">
					Max Buy-in $25,000
				</p>
			</div>
			{createdTransaction && (
				<TransactionModal
					open={transactionModalVisible}
					onClose={(() => setTransactionModalVisible(false))}
					transaction={createdTransaction}
				/>
			)}
		</>
	)
}

export default {
	component: BuyTab,
	label: "Buy",
	icon: dollarIcon
}