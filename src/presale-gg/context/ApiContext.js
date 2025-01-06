/**
 * @typedef {object} ApiContextValue
 * @property {import("nanostores").MapStore<import("../stores/api.store").ApiStateValue>} $apiState,
 * @property {import("nanostores").MapStore<import("../stores/user.store").UserStoreValue>} $userState,
 */

import { createContext, useState } from "react"
import { $dogeApiState, $pepeApiState } from "../stores/api.store"
import { $dogeUserState, $pepeUserState } from "../stores/user.store"

/** @type {ApiContextValue} */
const defaultState = {
	$apiState: null,
	$userState: null
}

export const ApiContext = createContext(defaultState)

/**
 * @param {object} props
 * @param {"doge" | "pepe"} props.project
 * @param {import("react").JSX.Element | import("react").JSX.Element[]} props.children
 */
export const ApiContextWrapper = ({ project, children }) => {
	/** @type {Record<"doge" | "pepe", ApiContextValue>} */
	const value = {
		doge: {
			$apiState: $dogeApiState,
			$userState: $dogeUserState
		},
		pepe: {
			$apiState: $pepeApiState,
			$userState: $pepeUserState
		}
	}

	return (
		<ApiContext.Provider value={value[project]}>
			{children}
		</ApiContext.Provider>
	)
}