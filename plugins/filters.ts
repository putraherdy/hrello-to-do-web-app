import Vue from "vue";
import moment from "moment";

Vue.filter("formatDate", (value: moment.MomentInput) => {
  if (!value) return "";
  return moment(value).format("dddd, MMMM Do YYYY");
});
