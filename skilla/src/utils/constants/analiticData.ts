import {
  ColorPercentageCalls,
  ColorPercentageOrder,
  ColorPercentageQuality,
  ColorTextOrder,
  ColorTextQuality,
  ColorTextResultCalls,
} from './constant';

export const analiticItems = [
  {
    id: 1,
    title: 'Новые звонки',
    result: '20 из 30 шт',
    colorResult: ColorTextResultCalls,
    percentage: 68,
    colorPercentage: ColorPercentageCalls,
  },
  {
    id: 2,
    title: 'Качество разговоров',
    result: '40%',
    colorResult: ColorTextQuality,
    percentage: 67,
    colorPercentage: ColorPercentageQuality,
  },
  {
    id: 3,
    title: 'Конверсия в заказ',
    result: '67%',
    colorResult: ColorTextOrder,
    percentage: 78,
    colorPercentage: ColorPercentageOrder,
  },
];