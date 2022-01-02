import { getCurrentSeasoningsDiscount, getCurrentSpecialDiscount, getCurrentShippingDiscount } from "../../api/discountApi";

const state = {
    seasoningsDiscounts: [],
    specialDiscounts: [],
    shippingDiscounts: [],
}
//////// shippingDiscounts: []
// discountCode
// endTime
// policyDescription
// startTime
// targetPrice
// venderId
//////////

//////// seasoningsDiscountList: []
// discountCode
// discountRate
// endTime
// policyDescription
// startTime
// venderId
//////////

//////// specialDiscountList: []
// venderId;
// policyDescription;
// startTime;
// endTime;
// category;
// discountRate;
//////////

const getters = {}

const actions = {
    async loadCurrentSeasoningDiscount({ commit }) {
        const seasoningsDiscounts = await getCurrentSeasoningsDiscount()
        console.log(seasoningsDiscounts)
        commit('loadCurrentSeasoningDiscountData', seasoningsDiscounts.seasoningsDiscountList)
    },
    async loadCurrentSpecialDiscount({ commit }) {
        const specialDiscounts = await getCurrentSpecialDiscount()
        console.log(specialDiscounts)
        commit('loadCurrentSpecialDiscountData', specialDiscounts.specialDiscountList)

    },
    async loadCurrentShippingDiscount({ commit }) {
        const shippingDiscounts = await getCurrentShippingDiscount()
        console.log(shippingDiscounts)
        commit('loadCurrentShippingDiscountData', shippingDiscounts.shippingDiscountList)
    }
}

const mutations = {
    loadCurrentSeasoningDiscountData(state, seasoningsDiscounts) {
        state.seasoningsDiscounts = seasoningsDiscounts
    },
    loadCurrentSpecialDiscountData(state, specialDiscounts) {
        state.specialDiscounts = specialDiscounts
    },
    loadCurrentShippingDiscountData(state, shippingDiscounts) {
        state.shippingDiscounts = shippingDiscounts
    }
}

export default { namespaced: true, state, getters, actions, mutations };