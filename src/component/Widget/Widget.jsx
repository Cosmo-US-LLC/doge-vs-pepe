import { ApiContextWrapper } from "../../presale-gg/context/ApiContext"

import BuyTab from "./Tabs/BuyTab"
import StakeTab from "./Tabs/StakeTab"
import HistoryTab from "./Tabs/HistoryTab"
import { useState } from "react"
import clsx from "clsx"

const tabs = [BuyTab, StakeTab, HistoryTab]

/**
 * @param {object} props 
 * @param {"doge" | "pepe"} props.project
 * @param {object} props.theme
 * @param {string} props.theme.bg
 * @param {string} props.symbol
 * @returns 
 */
const Widget = ({ project, theme, symbol }) => {
	const [ selectedTabIndex, setSelectedTabIndex ] = useState(0)
	const Comp = tabs[selectedTabIndex].component

	return (
		<ApiContextWrapper project={project} symbol={symbol}>
			<div
				className="min-h-[596.83px] max-w-[404.01px] bg-[var(--bg)] w-[100%] space-y-[14px]  px-[16px] pb-[26px] pt-[24px] rounded-[24px] border border-[#fff]"
				style={{
					"--bg": theme.bg
				}}
			>
				<div className="bg-[#00000040] flex justify-between p-1 rounded-[30px]">
					{tabs.map((tab, i) => {
						const selected = i === selectedTabIndex
						return (
							<button
								className={clsx(
									"w-[104.8px] rounded-[30px] py-[2px] space-x-2 flex justify-center items-center cursor-pointer border",
									{"border-transparent": !selected},
									{"bg-[var(--bg)] border-black": selected}
								)}
								onClick={() => setSelectedTabIndex(i)}
								key={i}
							>
								<img src={tab.icon} alt="" aria-hidden />
								<p className={clsx("text-[18.364px] font-[700] text-[#000]")}>
									{tab.label}
								</p>
							</button>
						)
					})}
				</div>
				<Comp />
			</div>
		</ApiContextWrapper>
	)
}

export default Widget