const fetch = require("node-fetch");

const LIST_URL = "https://lk.priority2030.ru/api/v0/priority/list";

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getAllData() {
  let list = await getData(LIST_URL);

  for (let i = 0; i < 1/*list.data.participants.length*/; i++) {
    let listItem = list.data.participants[i];
    const detailsUrl = `https://lk.priority2030.ru/api/v0/priority/${listItem.id}/info`;
    listItem.info = (await getData(detailsUrl)).data;
  }
  console.log(JSON.stringify(list));
}

getAllData();
