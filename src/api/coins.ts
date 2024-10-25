interface DevCoins {
  amount: number;
}

const getDevCoins = async (id: string) => {

  let res: Response = await fetch(
    `${import.meta.env.PUBLIC_PLAYDEV_API}/devcoins/${id}`,
    {
      credentials: 'include'
    }
  );

  const response: DevCoins = await res.json();

  return response.amount;
};

export { getDevCoins };