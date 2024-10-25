interface DevCoins {
  amount: number;
}

const getDevCoins = async (id: string) => {

  let res: Response = await fetch(
    `${import.meta.env.PUBLIC_PLAYDEV_API}/devcoins/${id}`,
    {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  const response: DevCoins = await res.json();

  return response.amount;
};

export { getDevCoins };