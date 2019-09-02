import Vue from "vue";

Vue.filter("phoneNumberHidden", phoneNumber => {
  const reg = new RegExp("(\\d{3})(\\d{4})(\\d{4})");
  return phoneNumber.replace(reg, "$1****$3");
});
