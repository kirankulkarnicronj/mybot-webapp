export function secondsToMinutes(time) {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return min + ":" + sec;
}

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function isEmail(text) {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim;
  if (!text) return false;
  return regex.test(text);
}

export function isValidUrl(url) {
  const urlRegex =
    /^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/g;
  if (!url) return false;

  return urlRegex.test(url);
}

export function allObjectValuesEmpty(obj) {
  for (let key in obj) {
    if (obj[key] !== null && obj[key] !== "" && obj[key] !== undefined) {
      return false;
    }
  }
  return true;
}

export function validatePhoneNumber(phoneNumber) {
  const number = phoneNumber.replace(/\D/g, "");
  var regex = /^([0-9]{1,4})[-\s]?([0-9]{6,11})$/;

  if (regex.test(number)) {
    return true;
  } else {
    return false;
  }
}

export function isPasswordValid(password) {
  const urlRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!password) return false;

  return urlRegex.test(password);
}

export function secToMin(time) {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min} min ${sec} sec`;
}

export function secondsToHours(time) {
  let hours = Math.floor(time / 3600);
  time %= 3600;
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);
  if (hours < 10 && hours !== 0) {
    hours = `0${hours}`;
  }
  if (hours === 0) {
    hours = `00`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return hours + ":" + min + ":" + sec;
}

export function timeago(nd, s) {
  var o = {
    second: 1000,
    minute: 60 * 1000,
    hour: 60 * 1000 * 60,
    day: 24 * 60 * 1000 * 60,
    week: 7 * 24 * 60 * 1000 * 60,
    month: 30 * 24 * 60 * 1000 * 60,
    year: 365 * 24 * 60 * 1000 * 60,
  };
  var r = Math.round,
    dir = " ago",
    pl = function (v, n) {
      return s === undefined
        ? n + " " + v + (n > 1 ? "s" : "") + dir
        : n + v.substring(0, 1);
    },
    ts = Date.now() - new Date(nd).getTime(),
    ii;
  if (ts < 0) {
    ts *= -1;
    dir = " from now";
  }
  for (var i in o) {
    if (r(ts) < o[i]) return pl(ii || "m", r(ts / (o[ii] || 1)));
    ii = i;
  }
  return pl(i, r(ts / o[i]));
}
