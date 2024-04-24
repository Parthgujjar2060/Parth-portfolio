import { db } from '../dbsetup/firebase';
import homeModels from '../models/homeModels';

export const getHomeData = async (): Promise<homeModels[]> => {
  const snapshot = await db.collection('Home').get();
  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data() as { name: string; photo: string; icon: string; }
  }));

  return data.map(item => new homeModels(item));
};

