import { map } from "nanostores"
import { api } from "../api"
import toast from "react-hot-toast"
import { getAccount, signMessage, watchAccount } from "@wagmi/core"
import { getConfig } from "../web3"

/**
 * @typedef {import("../api/api.types").API.User} User
 * @typedef {import("../api/api.types").API.UserStakeData} UserStakeData
 * @typedef {import("../api/api.types").API.Token} Token
 * @typedef {import("../api/api.types").API.LeaderboardEntry} LeaderboardEntry
 * @typedef {import("../api/api.types").API.BonusCode} BonusCode
 * @typedef {import("../api/api.types").API.UserRankData} UserRankData
 * 
 * @typedef {object} UserStoreValue
 * @property {User | null} UserStoreValue.user
 * @property {UserStakeData | null} UserStoreValue.userStakeData
 * @property {Token | null} UserStoreValue.token
 * @property {LeaderboardRank | null} UserStoreValue.leaderboardRank
 * @property {BonusCode | null} UserStoreValue.appliedBonusCode
 * @property {UserRankData | null} UserStoreValue.rankData
 * @property {string} UserStoreValue.project
*/

/** @type {UserStoreValue} */
export const defaultUserState = {
	user: null,
	userStakeData: null,
	token: null,
	leaderboardRank: null,
	appliedBonusCode: null,
	rankData: null,
	project: ""
}

export const $pepeUserState = map({...defaultUserState, project: api.PEPE_PROJECT})
export const $dogeUserState = map({...defaultUserState, project: api.DOGE_PROJECT})

document.addEventListener("wagmi-loaded", async () => {
	const { config } = await getConfig()
	watchAccount(config, {
		onChange: (account) => {
			const address = account.address
			if (!address) return $userState.set({...defaultUserState})
			api.getUser(address).then((res) => $userState.setKey("user", res.data))
			api.getUserStakeData(address).then((res) => $userState.setKey("userStakeData", res.data))
			api.getUserLeaderboardRank(address).then((res) => $userState.setKey("leaderboardRank", res.data))
			api.getUserRanks(address).then((res) => $userState.setKey("rankData", res.data))
		}
	})
})

/**
 * @param {import("nanostores").MapStore<UserStoreValue>} $store
 * @returns {Promise<Token>}
 */
export const getUserToken = async ($store) => {
	const { config } = await getConfig()
	const userData = $store.get()
	if (userData.token && new Date(userData.token.expires).getTime() >= Date.now()) return userData.token
	const { address, isConnected } = getAccount(config)
	if (!address || !isConnected) throw "Please connect your wallet"
	const { project } = $store.get()
	const messageRes = await api.getSiweMessage(project, address)
	const signedMessage = await toast.promise(signMessage(config, {
		message: messageRes.data.message
	}), {
		loading: "Confirm the message signature in your wallet",
		success: "Successfully signed wallet message",
		error: (err) => api.getApiErrorMessage(err, "Error signing message")
	}).catch(() => {
		throw "Error confirming user"
	})
	const validRes = await api.verifySiweMessage(project, address, messageRes.data.message, signedMessage)
	const token = validRes.data.access
	$store.setKey("token", token)
	return token
}

/**
 * @param {import("nanostores").MapStore<UserStoreValue>} $store
 * @returns {Promise<void>}
 */
export const refetchUserStakeData = async ($store) => {
	const { config } = await getConfig()
	const { address, isConnected } = getAccount(config)
	if (!address || !isConnected) throw "Please connect your wallet"
	const { project } = $store.get()
	const res = await api.getUserStakeData(project, address)
	$store.setKey("userStakeData", res.data)
}

/**
 * @param {import("nanostores").MapStore<UserStoreValue>} $store
 * @param {string} newCode 
 * @returns {Promise<void>}
 */
export const userUpdateReferralCode = async ($store, newCode) => {
	const { config } = await getConfig()
	const { address, isConnected } = getAccount(config)
	if (!address || !isConnected) throw "Please connect your wallet"
	const { project } = $store.get()
	const token = await getUserToken($store)
	await api.updateReferralCode(project, token.token, address, newCode)
	const res = await api.getUser(project, address)
	$store.setKey("user", res.data)
}

/**
 * @param {import("nanostores").MapStore<UserStoreValue>} $store
 * @returns {Promise<void>}
 */
export const userResetReferralCode = async ($store) => {
	const oldUser = $store.get().user
	if (!oldUser) return
	$store.setKey("user", {
		...oldUser,
		referred_by: null
	})
}

/**
 * @param {import("nanostores").MapStore<UserStoreValue>} $store
 * @param {string} code
 * @returns {Promise<void>}
*/
export const userApplyBonusCode = async ($store, code) => {
	const { config } = await getConfig()
	const { address, isConnected } = getAccount(config)
	if (!address || !isConnected) throw "Please connect your wallet"
	const { project } = $store.get()
	const token = await getUserToken($store)
	const res = await api.applyBonusCode(project, address, code, token.token)
	$store.setKey("appliedBonusCode", res.data)
}

/** @param {import("nanostores").MapStore<UserStoreValue>} $store */
export const resetUserBonusCode = ($store) => {
	return $store.setKey("appliedBonusCode", null)
}