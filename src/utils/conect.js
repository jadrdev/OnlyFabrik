var myHeaders = new Headers();
myHeaders.append('Authorization', 'Basic WC1OZXQ6SmFkYWNvbTEwX18=');
myHeaders.append('Cookie', 'PHPSESSID=4622542f51aea8c89f1bf740480a492d');
myHeaders.append('Content-Type', 'application/json');

export const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const postOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow',
};
