export default {
  incremetn() {
    return {
      type: "INCREMENT"
    }
  },
  decrement() {
    return {
      type: "DECREMENT"
    }
  },
  setUserName(val) {
    return {
      type: 'SETUSERNAME',
      value: val
    }
  },
  removeUserName() {
    return {
      type: 'REMOVEUSERNAME'
    }
  }
}