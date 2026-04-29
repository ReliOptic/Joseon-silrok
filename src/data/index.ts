import type { KingData } from '../types/king.types';

const loaders: Record<string, () => Promise<KingData>> = {
  taejo: () => import('./taejo').then(m => m.TAEJO_DATA),
  jeongjong: () => import('./jeongjong').then(m => m.JEONGJONG_DATA),
  taejong: () => import('./taejong').then(m => m.TAEJONG_DATA),
  sejong: () => import('./sejong').then(m => m.SEJONG_DATA),
  munjong: () => import('./munjong').then(m => m.MUNJONG_DATA),
  danjong: () => import('./danjong').then(m => m.DANJONG_DATA),
  sejo: () => import('./sejo').then(m => m.SEJO_DATA),
  yejong: () => import('./yejong').then(m => m.YEJONG_DATA),
  seongjong: () => import('./seongjong').then(m => m.SEONGJONG_DATA),
  yeonsangun: () => import('./yeonsangun').then(m => m.YEONSANGUN_DATA),
  jungjong: () => import('./jungjong').then(m => m.JUNGJONG_DATA),
  injong: () => import('./injong').then(m => m.INJONG_DATA),
  myeongjong: () => import('./myeongjong').then(m => m.MYEONGJONG_DATA),
  seonjo: () => import('./seonjo').then(m => m.SEONJO_DATA),
  gwanghaegun: () => import('./gwanghaegun').then(m => m.GWANGHAEGUN_DATA),
  injo: () => import('./injo').then(m => m.INJO_DATA),
  hyojong: () => import('./hyojong').then(m => m.HYOJONG_DATA),
  hyeonjong: () => import('./hyeonjong').then(m => m.HYEONJONG_DATA),
  sukjong: () => import('./sukjong').then(m => m.SUKJONG_DATA),
  gyeongjong: () => import('./gyeongjong').then(m => m.GYEONGJONG_DATA),
  yeongjo: () => import('./yeongjo').then(m => m.YEONGJO_DATA),
  jeongjo: () => import('./jeongjo').then(m => m.JEONGJO_DATA),
  sunjo: () => import('./sunjo').then(m => m.SUNJO_DATA),
  heonjong: () => import('./heonjong').then(m => m.HEONJONG_DATA),
  cheoljong: () => import('./cheoljong').then(m => m.CHEOLJONG_DATA),
  gojong: () => import('./gojong').then(m => m.GOJONG_DATA),
  sunjong: () => import('./sunjong').then(m => m.SUNJONG_DATA),
};

export async function loadKingData(id: string): Promise<KingData> {
  const loader = loaders[id] ?? loaders['sejong'];
  return loader();
}
