// import { call } from "@redux-saga/core/effects";

const Helper = {
  generateUUID: () => {
    const hexOctet = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    return `${
      hexOctet + hexOctet
    }-${hexOctet}-${hexOctet}-${hexOctet}-${hexOctet}${hexOctet}${hexOctet}`;
  },
  getDataStored: (value) => {
    return localStorage.getItem(value);
  },
  storeData: (key, value) => {
    return localStorage.setItem(key, value);
  },
  removeDataStored: (key) => {
    if (key) {
      return localStorage.removeItem(key);
    }
    return localStorage.clear();
  },
  formatCurrency: (x, sale) => {
    if (sale) {
      x = x - x * (sale / 100);
    }
    return x.toFixed(0).replace(/\d(?=(\d{3})+(?!\d))/g, "$&,") + "₫";
  },
  formatNumber: (x) => {
    if(!x) return 0;
    return Number(x);
  },
//   formatDateAndTime: (x) => {
//     if(!x) return "";
//     return moment(Number(x)).format('DD/MM/YYYY - hh:mm')
//   },
//   formatTime: (x) => {
//     if(!x) return "";
//     return moment(Number(x) ).format('hh:mm')
//   },
//   formatDate: (x) => {
//     if(!x) return "";
//     return moment(Number(x)).format('DD/MM/YYYY')
//   }
};

export default Helper;


