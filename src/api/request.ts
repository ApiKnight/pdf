export async function apiGetBaidu(url: string) {
  return fetch(url).then((res) => res.json());
}