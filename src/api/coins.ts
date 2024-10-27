import { Storage } from '@core/storage';
import { EStorage } from 'models/storage.model';

interface DevCoins {
  amount: number;
}

const getDevCoins = async (id: string) => {

  let res: Response = await fetch(
    `${import.meta.env.PUBLIC_PLAYDEV_API}/devcoins/${id}`, {
    headers: {
      authorization: `Bearer ${Storage.getData(EStorage.TOKEN)}`
    }
  }
  );

  const response: DevCoins = await res.json();

  return response.amount;
};

export { getDevCoins };