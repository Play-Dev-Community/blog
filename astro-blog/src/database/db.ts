import database from "core/firebase";
import { equalTo, get, orderByChild, push, query, ref, remove, set, update } from "firebase/database";

const createTick = async (data: any) => {
  try {
    const newTickRef = push(ref(database, "ticks"));
    await set(newTickRef, data);
    console.log("New tick created:", newTickRef.key);
  } catch (e) {
    throw new Error("[Error] Tick Create");
  }
};

const readTick = async (member_id: string, className: string) => {
  const TickRef = ref(database, `ticks`);

  const firstQuery = query(TickRef, orderByChild('member_id'), equalTo(member_id));
  const firstSnapshot = await get(firstQuery);

  const filteredTicks: any[] = [];

  firstSnapshot.forEach(childSnapshot => {
    const tick = childSnapshot.val() as any;
    if (tick.class === className) {
      filteredTicks.push(tick);
    }
  });

  return filteredTicks[0];
};

const updateTick = async (member_id: string, className: string, completed: boolean) => {
  const TickRef = ref(database, `ticks`);
  const memberQuery = query(TickRef, orderByChild('member_id'), equalTo(member_id));
  const memberSnapshot = await get(memberQuery);

  const updates: { [key: string]: any } = {};
  memberSnapshot.forEach(childSnapshot => {
    const tick = childSnapshot.val();
    if (tick.class === className) {
      const tickRefPath = `ticks/${childSnapshot.key}`;
      updates[tickRefPath] = { ...tick, completed };
    }
  });

  if (Object.keys(updates).length > 0) {
    await update(ref(database), updates);
    console.log('Ticks updated successfully');
  } else {
    console.log('No ticks found for the given parameters.');
  }
};

const deleteTick = async (tickID: string) => {
  const TickRef = ref(database, `ticks/${tickID}`);
  await remove(TickRef);
  console.log("Tick deleted:", tickID);
};

export { createTick, readTick as readUserTick, updateTick, deleteTick };